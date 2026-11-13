# Contributing

For a new style, copy `template/` to `styles/<site>/`. Update the metadata, domain,
and import path to `../../lib/ore-ui.less`. The [component docs](docs/components.md)
have examples to work from.

```sh
npm ci
npm run build
```

Install the CSS from `dist/styles/<site>/` in Stylus and try it on the site.
Check menus, forms, keyboard focus, and smaller windows. Include a screenshot and
mention anything unfinished in your PR. Bump `@version` when updating a style.

For library changes, edit `lib/ore-ui.less` or `lib/fonts.less`, then run
`npm run assets`. Include the generated files in your PR.

Before submitting:

```sh
npm run format
npm run check
```

Hosting your style elsewhere? [Pin the library import to a commit](docs/snippets.md#pin-the-import).
