export interface Shortcut {
  description: string;
  windows: string;
  linux: string;
  mac: string;
}

export const shortcuts: Shortcut[] = [
  {
    description: 'Open a file',
    windows: 'CTRL + P',
    linux: 'CTRL + P',
    mac: 'CMD + P'
  },
  {
    description: 'Open settings',
    windows: 'CTRL + ,',
    linux: 'CTRL + ,',
    mac: 'CMD + ,'
  },
  {
    description: 'Toggle sidebar',
    windows: 'CTRL + B',
    linux: 'CTRL + B',
    mac: 'CMD + B'
  },
  {
    description: 'Navigate tabs',
    windows: 'CTRL + SHIFT + TAB',
    linux: 'CTRL + SHIFT + TAB',
    mac: 'CTRL + SHIFT + TAB'
  },
  {
    description: 'Navigate tab groups',
    windows: 'CTRL + 1 or CTRL + 2 or CTRL + 3',
    linux: 'CTRL + 1 or CTRL + 2 or CTRL + 3',
    mac: 'CMD + 1 or CMD + 2 or CMD + 3'
  },
  {
    description: 'Open the terminal',
    windows: 'CTRL + J',
    linux: 'CTRL + J',
    mac: 'CMD + J'
  },
  {
    description: 'Open the command palette',
    windows: 'CTRL + SHIFT + P',
    linux: 'CTRL + SHIFT + P',
    mac: 'CMD + SHIFT + P'
  },
  {
    description: 'Select the current line',
    windows: 'CTRL + L',
    linux: 'CTRL + L',
    mac: 'CMD + L'
  },
  {
    description: 'Select all occurrences of the current selection',
    windows: 'CTRL + SHIFT + L',
    linux: 'CTRL + SHIFT + L',
    mac: 'CMD + SHIFT + L'
  },
  {
    description: 'Select all occurrences of the current word',
    windows: 'CTRL + P',
    linux: 'CTRL + P',
    mac: 'CMD + P'
  },
  {
    description: 'Select until the end of the word',
    windows: 'SHIFT + ALT + LEFT or SHIFT + ALT + RIGHT',
    linux: 'SHIFT + ALT + LEFT or SHIFT + ALT + RIGHT',
    mac: 'SHIFT + OPTION + LEFT or SHIFT + OPTION + RIGHT'
  },
  {
    description: 'Select a column or box of code by dragging the mouse',
    windows: 'SHIFT + ALT + drag mouse across lines',
    linux: 'SHIFT + ALT + drag mouse across lines',
    mac: 'SHIFT + OPTION + drag mouse across lines'
  },
  {
    description: 'Select a column or box of code with the arrow keys',
    windows: 'CTRL + SHIFT + ALT + LEFT or RIGHT or UP or DOWN',
    linux: 'CTRL + SHIFT + ALT + LEFT or RIGHT or UP or DOWN',
    mac: 'CMD + SHIFT + ALT + LEFT or RIGHT or UP or DOWN'
  },
  {
    description: 'Select the next occurrence of the searched word when search is focused',
    windows: 'CTRL + G',
    linux: 'CTRL + G',
    mac: 'CMD + G'
  },
  { 
    description: 'Select multiple results',
    windows: 'CTRL + D',
    linux: 'CTRL + D',
    mac: 'CMD + D'
  },
  {
    description: 'Select all instances of search results',
    windows: 'ALT + ENTER',
    linux: 'ALT + ENTER',
    mac: 'OPTION + ENTER'
  },
  {
    description: 'Go to line',
    windows: 'CTRL + G',
    linux: 'CTRL + G',
    mac: 'CTRL + G'
  },
  {
    description: 'Go to matching bracket',
    windows: 'CTRL + SHIFT + \\',
    linux: 'CTRL + SHIFT + \\',
    mac: 'CMD + SHIFT + \\'
  },
  {
    description: 'Fold/unfold block',
    windows: 'CTRL + SHIFT + [ or CTRL + SHIFT + ]',
    linux: 'CTRL + SHIFT + [ or CTRL + SHIFT + ]',
    mac: 'CMD + SHIFT + [ or CMD + SHIFT + ]'
  },
  {
    description: 'Fold/unfold blocks and sub-blocks',
    windows: 'CTRL + K + [ or CTRL + K + ]',
    linux: 'CTRL + K + [ or CTRL + K + ]',
    mac: 'CMD + K + [  or CTRL + K + ]'
  },
  {
    description: 'Insert additional cursors at mouse click position',
    windows: 'ALT + mouse click at position',
    linux: 'ALT + mouse click at position',
    mac: 'OPTION + mouse click at position'
  },
  {
    description: 'Insert additional cursors with arrow keys',
    windows: 'CTRL + ALT + UP or CTRL + ALT + DOWN',
    linux: 'CTRL + ALT + UP or CTRL + ALT + DOWN',
    mac: 'CMD + ALT + UP or CMD + ALT + DOWN'
  },
  {
    description: 'Undo cursor insert',
    windows: 'CTRL + U',
    linux: 'CTRL + U',
    mac: 'CMD + U'
  },
  {
    description: 'Insert the cursor at end of highlighted selection',
    windows: 'SHIFT + ALT + I',
    linux: 'SHIFT + ALT + I',
    mac: 'SHIFT + OPTION + I'
  },
  {
    description: 'Move lines and blocks',
    windows: 'ALT + UP or ALT + DOWN',
    linux: 'ALT + UP or ALT + DOWN',
    mac: 'OPTION + UP or OPTION + DOWN'
  },
  {
    description: 'Copy lines and blocks',
    windows: 'SHIFT + ALT + UP or SHIFT + ALT + DOWN',
    linux: 'SHIFT + ALT + UP or SHIFT + ALT + DOWN',
    mac: 'SHIFT + OPTION + UP or SHIFT + OPTION + DOWN'
  },
  {
    description: 'Indent/outdent lines',
    windows: 'CTRL + [ or CTRL + ]',
    linux: 'CTRL + [ or CTRL + ]',
    mac: 'CMD + [ or CMD + ]'
  },
  {
    description: 'Toggle comments',
    windows: 'CTRL + /',
    linux: 'CTRL + /',
    mac: 'CMD + /'
  },
  {
    description: 'Block comments',
    windows: 'SHIFT + ALT + A',
    linux: 'SHIFT + ALT + A',
    mac: 'SHIFT + OPTION + A'
  },
  {
    description: 'Format the entire file',
    windows: 'CTRL + P',
    linux: 'CTRL + P',
    mac: 'CMD + P'
  },
  {
    description: 'Format current selection',
    windows: 'CTRL + K, CTRL + F',
    linux: 'CTRL + K, CTRL + F',
    mac: 'CMD + K, CMD + F'
  },
  {
    description: 'Trim whitespace',
    windows: 'CTRL + K + X',
    linux: 'CTRL + K + X',
    mac: 'CMD + K + X'
  },
  {
    description: 'Change programming language',
    windows: 'CTRL + K, M',
    linux: 'CTRL + K, M',
    mac: 'CMD + K, M'
  },
  {
    description: 'Toggle suggestions',
    windows: 'CTRL + I',
    linux: 'CTRL + I',
    mac: 'CMD + I'
  },
  {
    description: 'Show function signature',
    windows: 'CTRL + SHIFT + SPACEBAR',
    linux: 'CTRL + SHIFT + SPACEBAR',
    mac: 'CMD + SHIFT + SPACEBAR'
  },
  {
    description: 'Zen Mode',
    windows: 'CTRL + K, Z',
    linux: 'CTRL + K, Z',
    mac: 'CMD + K, Z'
  }
];
