# Dropdowns

[All components](../components.md)

```less
.account-menu {
  .ore-dropdown();
  padding: 8px;
}

.account-menu-button {
  .ore-button();
}
```

`.ore-dropdown()` adds the menu background texture, a 3px border, and white text.
It takes no arguments. Use it on the popup container; use `.ore-button()` for the
control that opens it.

Set spacing and item states separately:

```less
.account-menu a {
  display: block;
  padding: 8px 12px;

  &:hover,
  &:focus-visible {
    color: @ore-text;
    background: @ore-green;
  }
}
```

The helper doesn't open or position the menu. A native `select` popup may be drawn
by the browser rather than a page element you can style this way.
