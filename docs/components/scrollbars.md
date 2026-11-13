# Scrollbars

[All components](../components.md)

```less
html {
  .ore-scrollbar();
}
```

`.ore-scrollbar()` takes no arguments. It sets light gray and dark panel colors.
The WebKit scrollbar rules also set a 13px width and height, plus the Ore UI handle
texture.

Use a scrolling container's selector to limit it to one area:

```less
.sidebar-list {
  .ore-scrollbar();
  overflow: auto;
  max-height: 400px;
}
```

Scrollbar rendering depends on the browser. The helper includes both standard
color properties and WebKit pseudo-elements; the browser chooses which it uses.
