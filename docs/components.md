# Components

Each page has the helper, its options, and a copyable example.
[Set up the import first](snippets.md). Put component rules inside your site's
domain block, and replace example classes with selectors from the site.

| Element        | Helper                                 | Guide                                  |
| -------------- | -------------------------------------- | -------------------------------------- |
| Button         | `.ore-button(@color)`                  | [Buttons](components/buttons.md)       |
| Panel          | `.ore-panel()`                         | [Panels](components/panels.md)         |
| Panel header   | `.ore-panel-header()`                  | [Panels](components/panels.md#headers) |
| Text field     | `.ore-input()`                         | [Inputs](components/inputs.md)         |
| Checkbox       | `.ore-checkbox()`                      | [Checkboxes](components/checkboxes.md) |
| Radio button   | `.ore-radio()`                         | [Radio buttons](components/radios.md)  |
| Switch         | `.ore-toggle()`                        | [Toggles](components/toggles.md)       |
| Dropdown menu  | `.ore-dropdown()`                      | [Dropdowns](components/dropdowns.md)   |
| Scrollbar      | `.ore-scrollbar()`                     | [Scrollbars](components/scrollbars.md) |
| Fonts          | `.ore-fonts()`, `.ore-fonts-five()`    | [Fonts](components/fonts.md)           |
| Custom texture | `.ore-texture(@image; @slice; @width)` | [Textures](components/textures.md)     |

Colors you can use in any rule:

| Variable           | Value     |
| ------------------ | --------- |
| `@ore-page`        | `#1e1e1f` |
| `@ore-panel`       | `#313233` |
| `@ore-raised`      | `#48494a` |
| `@ore-green`       | `#3c8527` |
| `@ore-green-light` | `#639d52` |
| `@ore-text`        | `#fff`    |
| `@ore-ink`         | `#1e1e1f` |

There are textures for sliders, popups, and other parts in
[assets/textures](../assets/textures). Those don't have dedicated helpers yet;
use the [texture helper](components/textures.md) to build your own rules.
