# Panels

[All components](../components.md)

```less
.card {
  .ore-panel();
  padding: 16px;
}
```

`.ore-panel()` adds the dark panel texture, an 8px border, and white text. It takes
no arguments. Set padding, width, and layout on the site's selector.

## Headers

```less
.card-header {
  .ore-panel-header();
  padding: 12px;
}
```

`.ore-panel-header()` uses the header panel texture with the same border width and
text color. Apply it to the header element inside the panel. Neither helper adds
hover or selected states.
