# Fonts

[All components](../components.md)

Call the font helper once inside your domain block, then choose a family on the
selectors that need it:

```less
.ore-fonts();

body {
  font-family: "Mojangles", sans-serif;
}

h1,
h2 {
  font-family: "Minecraft Ten", sans-serif;
}
```

| Helper              | Family           | Weight      |
| ------------------- | ---------------- | ----------- |
| `.ore-fonts()`      | `Mojangles`      | 400 and 700 |
| `.ore-fonts()`      | `Minecraft Ten`  | 400         |
| `.ore-fonts-five()` | `Minecraft Five` | 400         |

Both helpers take no arguments. They declare the fonts without applying them to
any elements. The font data is included in the library.

```less
.ore-fonts-five();

.small-heading {
  font-family: "Minecraft Five", sans-serif;
}
```

Avoid overriding an icon font with a text font. Target text elements instead of
using `* { font-family: ... }`.
