import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import less from "less";

const root = fileURLToPath(new URL("../", import.meta.url));
await rm(path.join(root, "dist"), { recursive: true, force: true });

for (const directory of ["styles", "template", "examples"]) {
  const files = await readdir(path.join(root, directory), { recursive: true });
  for (const file of files.sort()) {
    if (!file.endsWith(".user.less")) continue;

    const filename = path.join(root, directory, file);
    let source = await readFile(filename, "utf8");
    const pinnedImport = source.match(
      /@import "(https:\/\/raw\.githubusercontent\.com\/jvr2022\/bedrockify\/[a-f0-9]{40}\/lib\/bedrockify\.less)";/,
    );
    if (pinnedImport)
      source = source.replace(
        pinnedImport[0],
        `@import "${path.join(root, "lib", "bedrockify.less")}";`,
      );
    const { css: compiled } = await less.render(source, {
      filename,
      javascriptEnabled: false,
      rewriteUrls: "all",
    });
    const css = compiled.replace("@preprocessor less", "@preprocessor default");
    const output = path.join(root, "dist", directory, file.replace(/\.less$/, ".css"));
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, css);
    console.log(path.relative(root, output));
  }
}
