# Using the snippets

Bedrockify uses Less. A helper such as `.ore-button(green)` adds the button CSS to
whichever selector you put it in.

## Start a style

Copy this into a new UserCSS style in Stylus:

```less
/* ==UserStyle==
@name         My Bedrockify theme
@namespace    github.com/your-name/your-theme
@version      0.1.0
@description  Ore UI for my site.
@author       your-name
@preprocessor less
==/UserStyle== */

@import "https://raw.githubusercontent.com/jvr2022/bedrockify/COMMIT_SHA/lib/bedrockify.less";

@-moz-document domain("example.com") {
  .ore-fonts();

  body {
    background: @ore-page;
    color: @ore-text;
    font-family: "Mojangles", sans-serif;
  }

  button {
    .ore-button(green);
  }
}
```

Change the metadata and domain to your own. Then replace `button` with the selector
for the button you want to style. For example, `.save-button` would apply it only
to elements with that class.

## Pin the import

Open [the commit history](https://github.com/jvr2022/bedrockify/commits/main/), pick
the revision you want, and copy its full 40-character SHA. Replace `COMMIT_SHA` in
the import with that hash before saving your style.

Keep the full URL in the style file. Don't use `main` or a branch name there:
a commit URL keeps the same snippets, fonts, and textures when this repo changes.
It doesn't stop the website itself from changing its layout or selectors.

When you want a library update, try the newer commit in your style, check the site,
then save the new SHA and bump your style's `@version`.

Import `lib/bedrockify.less`, which contains the helpers and embedded assets.
`lib/ore-ui.less` is the source used for local development and has filesystem imports.
You don't need to link individual fonts or images when using the hosted file.

## Pick a component

See the [component reference](components.md) for buttons, panels, inputs,
checkboxes, radio buttons, toggles, dropdowns, scrollbars, fonts, and textures.
Each page lists the helper's options, included states, and usage examples.
