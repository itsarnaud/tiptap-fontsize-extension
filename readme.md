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
import FontSize from 'tiptap-font-size';

const editor = new Editor({
  extensions: [
    FontSize.configure({
      defaultSize: '16px',
    }),
    // other extensions
  ],
});
```

## Commands

- setFontSize(size): Sets the font size to the specified value.
- increaseFontSize(): Increases the font size by 1px.
- decreaseFontSize(): Decreases the font size by 1px.

```js
// Set font size to 20px
editor.commands.setFontSize('20px');

// Increase font size by 1px
editor.commands.increaseFontSize();

// Decrease font size by 1px
editor.commands.decreaseFontSize();
```

## Configuration

You can configure the default font size if none is specified dans le code source.

```js
addOptions() {
    return {
      defaultSize: '13px', // Default font size if none is specified
    };
  },
```

PRs are welcome 😃❤️