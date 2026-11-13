# Toggles

[All components](../components.md)

```less
input[type="checkbox"][role="switch"] {
  .ore-toggle();
}
```

`.ore-toggle()` styles a native checkbox as a 48 by 24px switch. It takes no
arguments and stretches the switch texture to that size.

Off, hover, on, on while hovering, keyboard focus, and disabled states are
included. Disabled inputs have half opacity. Keep toggle selectors out of your
regular checkbox rule.

This helper reads `:checked`. If the site uses a button with `aria-checked`, use
the textures with that attribute instead:

```less
button[role="switch"] {
  width: 48px;
  height: 24px;
  border: 0;
  background: @ore-toggles-off center / 100% 100% no-repeat;
  image-rendering: pixelated;

  &[aria-checked="true"] {
    background-image: @ore-toggles-on;
  }
}
```

That custom example only sets the off and on images. Add hover, focus, and disabled
rules to match the site.
