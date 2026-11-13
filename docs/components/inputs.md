# Inputs

[All components](../components.md)

```less
input[type="text"],
input[type="search"],
input[type="email"],
input[type="password"],
textarea {
  .ore-input();
}
```

`.ore-input()` adds the inset texture, white text, an 8px border, and 8px padding.
It inherits the font and takes no arguments.

Hover uses the highlighted inset texture. Keyboard focus gets a white outline.
Use the site's selectors to limit which fields are changed.

```less
.search-field {
  .ore-input();
  width: 100%;
  min-height: 44px;
}
```
