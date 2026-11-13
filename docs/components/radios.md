# Radio buttons

[All components](../components.md)

```less
input[type="radio"] {
  .ore-radio();
}
```

`.ore-radio()` styles a native radio input at 20 by 20px. It takes no arguments.

Unchecked, hover, checked, checked while hovering, keyboard focus, and disabled
states are included. Disabled inputs have half opacity.

The site's radio group and labels keep working as before. For custom radio
controls, use the [radio texture variables](../../lib/assets.less) with selectors
that match the site's selected state.
