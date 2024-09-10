import { Mark } from '@tiptap/core';

const FontSize = Mark.create({
  name: 'fontSize',

  addOptions() {
    return {
      defaultSize: '13px',
    };
  },

  addAttributes() {
    return {
      size: {
        default: this.options.defaultSize,
        parseHTML: element => element.style.fontSize,
        renderHTML: attributes => {
          return { style: `font-size: ${attributes.size}` };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[style*=font-size]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', HTMLAttributes, 0];
  },

  addCommands() {
    return {
    
      setFontSize: size => ({ commands }) => {
        return commands.setMark(this.name, { size });
      },

      increaseFontSize: () => ({ state, commands }) => {
        const { from, to } = state.selection;
        const marks = state.doc.rangeHasMark(from, to, this.type);

        let currentFontSize = this.options.defaultSize;

        if (marks) {
          state.doc.nodesBetween(from, to, node => {
            node.marks.forEach(mark => {
              if (mark.type.name === this.name && mark.attrs.size) {
                currentFontSize = mark.attrs.size;
              }
            });
          });
        }

        const newSize = (parseInt(currentFontSize.replace('px', '')) + 1) + 'px';
        return commands.setMark(this.name, { size: newSize });
      },

      decreaseFontSize: () => ({ state, commands }) => {
        const { from, to } = state.selection;
        const marks = state.doc.rangeHasMark(from, to, this.type);

        let currentFontSize = this.options.defaultSize;

        if (marks) {
          state.doc.nodesBetween(from, to, node => {
            node.marks.forEach(mark => {
              if (mark.type.name === this.name && mark.attrs.size) {
                currentFontSize = mark.attrs.size;
              }
            });
          });
        }

        const newSize = Math.max(1, parseInt(currentFontSize.replace('px', '')) - 1) + 'px';
        return commands.setMark(this.name, { size: newSize });
      },

    };
  },
});

export default FontSize;