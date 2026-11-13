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

Hover, pressed, pressed while hovering, and keyboard focus are included. Disabled
buttons use the locked white texture for all three colors. The pressed state
changes padding without changing the total vertical padding.

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
