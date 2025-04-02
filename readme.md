# Tiptap Font-Size Extension

A Tiptap extension for adjusting font size in text editors.

## Installation

You can install the extension via npm:

```bash
npm i tiptap-fontsize-extension
```

## Usage

```js
import { Editor } from '@tiptap/core';
import FontSize from 'tiptap-fontsize-extension';

const editor = new Editor({
  extensions: [
    FontSize.configure({
      defaultSize: '16px',
      step: 1
    }),
    // other extensions
  ],
});
```

## Commands

- setFontSize(size): Sets the font size to the specified value.
- getFontSize(): Get the selected font size.
- increaseFontSize(): Increases the font size by 1px.
- decreaseFontSize(): Decreases the font size by 1px.

```js
// Get the selected font size
const fontSize = editor.commands.getFontSize();
console.log('Selected font size:', fontSize);

// Set font size to 20px
editor.commands.setFontSize('20px');

// Increase font size by 1px
editor.commands.increaseFontSize();

// Decrease font size by 1px
editor.commands.decreaseFontSize();
```

PRs are welcome 😃❤️
