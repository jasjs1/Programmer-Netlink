# FontFlex - **DEV**

FontFlex is a versatile framework for effortless management and customization of font sizes in buttons and text areas. It empowers developers to create visually consistent and aesthetically pleasing user interfaces.

## Usage

## Recommended

1. Add .gitmodules file, on same level of your repo where `.git` directory is located, if You have not done already.
2. Open your prefered terminal in repo directory.
3. Use git to add submodule:
  `git submodule add https://github.com/jasjs1/FontFlex.git <path>`
  Update submodule if needed.
  
  Example:

```bash
git submodule add https://github.com/jasjs1/FontFlex.git src/vendor/fontflex
```
  
  it will put automatically in .../repo/src/vendor/fontflex

## Important Notices

### 1. Folder Path

Do not change any of the link, or script folder paths. This can cause the FontFlex to not be functional, unless you change the folder paths.

```html
<script src="/scripts/createFormatting.js"></script>
<link rel="stylesheet" href="/FontFlexComponents/styles/formatting.css">
```

If you do change any folder paths ensure that you change the folder path in this file: 'buttons.html'. Change these lines:

```html
<script src="/scripts/createFormatting.js"></script>

<link rel="stylesheet" href="/styles/formatting.css">
```

### 2. Text area ID

Ensure that you change this line to the textarea that you want FontFlex to be workingo on.

```js
const textarea = document.getElementById('test-textarea');
```

Change 'test-textarea' to the ID of the textarea (or other elements) that you want to have FontFlex to be working on.
