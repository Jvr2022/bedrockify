import { readdir, readFile, writeFile } from "node:fs/promises";
import prettier from "prettier";

const root = new URL("../", import.meta.url);
const variables = new Map();
const textures = await readdir(new URL("assets/textures/", root), { recursive: true });

for (const texture of textures.sort()) {
  if (!texture.endsWith(".png")) continue;
  const file = texture.replaceAll("\\", "/");
  const name = `ore-${file.slice(0, -".png".length).replaceAll("/", "-")}`;
  if (variables.has(name)) throw new Error(`Duplicate variable: @${name}`);
  variables.set(name, `data-uri("image/png;base64", "../assets/textures/${file}")`);
}

async function save(file, source) {
  const output = new URL(file, root);
  const config = await prettier.resolveConfig(output);
  const formatted = await prettier.format(source, { ...config, parser: "less" });
  if (process.argv.includes("--check")) {
    if ((await readFile(output, "utf8")) !== formatted) {
      throw new Error(`Run npm run assets to update ${file}`);
    }
  } else {
    await writeFile(output, formatted);
  }
}

const source = [...variables].map(([name, value]) => `@${name}: ${value};`).join("\n");
await save("lib/assets.less", source);

let bundle = source;
for (const file of ["lib/fonts.less", "lib/ore-ui.less"]) {
  bundle += `\n${await readFile(new URL(file, root), "utf8")}`;
}
bundle = bundle.replace(/^@import .*;\r?$/gm, "");
for (const match of bundle.matchAll(/data-uri\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\)/g)) {
  const file = new URL(match[2], new URL("lib/", root));
  const data = await readFile(file);
  bundle = bundle.replaceAll(match[0], `url("data:${match[1]},${data.toString("base64")}")`);
}
await save("lib/bedrockify.less", bundle);
