import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postcss from "postcss";

const root = fileURLToPath(new URL("../", import.meta.url));
const required = ["name", "namespace", "version", "description", "author", "preprocessor"];

function check(css, file) {
  const tree = postcss.parse(css, { from: file });
  const header = css.match(/^\/\* ==UserStyle==\r?\n([\s\S]*?)==\/UserStyle== \*\//);
  if (!header) throw new Error("Missing UserCSS header");

  const metadata = new Map();
  for (const [, key, value] of header[1].matchAll(/^@(\w+)\s+(.+)$/gm)) {
    if (metadata.has(key)) throw new Error(`Duplicate @${key}`);
    metadata.set(key, value.trim());
  }
  for (const key of required) {
    if (!metadata.get(key)) throw new Error(`Missing @${key}`);
  }
  if (!/^\d+\.\d+\.\d+$/.test(metadata.get("version"))) {
    throw new Error("Invalid @version; expected something like 0.1.0");
  }
  if (metadata.get("preprocessor") !== "default") {
    throw new Error("Built CSS must use @preprocessor default");
  }

  tree.walkAtRules("import", () => {
    throw new Error("Unresolved import");
  });
  tree.walkDecls(({ value }) => {
    for (const [, url] of value.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
      if (!url.startsWith("data:")) throw new Error(`Asset not embedded: ${url}`);
    }
  });

  const scopes = tree.nodes.filter((node) => node.type !== "comment");
  if (!scopes.length) throw new Error("No site rules");
  for (const scope of scopes) {
    if (scope.type !== "atrule" || scope.name !== "-moz-document") {
      throw new Error(`Line ${scope.source.start.line}: CSS outside a domain block`);
    }
    const domains = scope.params.split(/\s*,\s*/);
    if (!domains.every((domain) => /^domain\("[a-z0-9-]+(?:\.[a-z0-9-]+)+"\)$/i.test(domain))) {
      throw new Error(`Invalid domain scope: ${scope.params}`);
    }
    if (!scope.nodes?.length) throw new Error("Empty domain block");
    if (file.startsWith(`styles${path.sep}`) && domains.includes('domain("example.com")')) {
      throw new Error("Replace example.com with the site's domain");
    }
  }
}

const files = await readdir(path.join(root, "dist"), { recursive: true });
const styles = files.filter((file) => file.endsWith(".user.css")).sort();
if (!styles.includes(path.join("template", "bedrockify.user.css"))) {
  throw new Error("Missing built template");
}

for (const file of styles) {
  try {
    check(await readFile(path.join(root, "dist", file), "utf8"), file);
    await readFile(path.join(root, path.dirname(file), "README.md"));
    console.log(`OK ${file}`);
  } catch (error) {
    console.error(`${file}: ${error.message}`);
    process.exitCode = 1;
  }
}
