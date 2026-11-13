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
    const source = await readFile(filename, "utf8");
    const { css } = await less.render(source, {
      filename,
      javascriptEnabled: false,
      rewriteUrls: "all",
    });
    const output = path.join(root, "dist", directory, file.replace(/\.less$/, ".css"));
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, css);
    console.log(path.relative(root, output));
  }
}
