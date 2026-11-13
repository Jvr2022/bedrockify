# Textures

[All components](../components.md)

Use `.ore-texture()` for a control that doesn't have its own helper:

```less
.my-panel {
  .ore-texture(@ore-panels-background; 2; 8px);
}
```

| Argument | Default  | What it sets                               |
| -------- | -------- | ------------------------------------------ |
| `@image` | Required | Image used for the border and fill         |
| `@slice` | `6`      | Border-image slice, in source image pixels |
| `@width` | `10px`   | Border width on the element                |

The helper sets a transparent background, square corners, `border-box` sizing,
pixelated rendering, and `border-image` with `fill`. It doesn't set text color,
padding, or interaction states.

Texture variables follow the path under `assets/textures/`:

| File                        | Variable                     |
| --------------------------- | ---------------------------- |
| `buttons/white/default.png` | `@ore-buttons-white-default` |
| `panels/background.png`     | `@ore-panels-background`     |
| `headers/white.png`         | `@ore-headers-white`         |

See [lib/assets.less](../../lib/assets.less) for every available variable.
You can use them on background images too:

```less
.my-header {
  background-image: @ore-headers-white;
}
```

Add states by switching the image:

```less
.my-control {
  .ore-texture(@ore-buttons-white-default);

  &:hover {
    border-image-source: @ore-buttons-white-hover;
  }
}
```
