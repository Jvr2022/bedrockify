# Buttons

[All components](../components.md)

```less
button {
  .ore-button();
}

.save-button {
  .ore-button(green);
}

.cancel-button {
  .ore-button(dark);
}
```

`.ore-button(@color: white)` accepts `white`, `green`, or `dark`. White uses dark
text; green and dark use white text. It inherits the element's font.

Hover and pressed states use their matching Ore UI textures. The pressed state
keeps the button the same size. Keyboard focus has a visible outline. Disabled
buttons use the locked white texture for all three colors.

Both `:disabled` and `[aria-disabled="true"]` get the disabled appearance.
`aria-disabled` only changes how the element looks here; the site still needs to
handle whether it can be clicked.

Put your own overrides after the helper:

```less
.save-button {
  .ore-button(green);
  min-width: 160px;
  font-size: 16px;
}
```
