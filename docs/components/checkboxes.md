# Checkboxes

[All components](../components.md)

```less
input[type="checkbox"]:not([role="switch"]) {
  .ore-checkbox();
}
```

`.ore-checkbox()` styles a native checkbox at 24 by 24px. It takes no arguments.
The input keeps its checked state and label behavior.

The helper includes unchecked, hover, checked, checked while hovering, keyboard
focus, and disabled states. Disabled inputs have half opacity. There isn't a
separate indeterminate texture.

If the site draws its checkbox on a label or pseudo-element, this selector won't
reach it. Use [individual textures](textures.md) on the element the site draws.
