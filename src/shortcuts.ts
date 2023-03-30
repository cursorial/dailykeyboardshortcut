export interface Shortcut {
  description: string;
  windows: string;
  linux: string;
  mac: string;
}

export const shortcuts: Shortcut[] = [
  {
    description: "Show or hide the integrated terminal",
    windows: "Ctrl + `",
    linux: "Ctrl + `",
    mac: "Cmd + `",
  },
  {
    description: "Show or hide the side panel",
    windows: "Ctrl + B",
    linux: "Ctrl + B",
    mac: "Cmd + B",
  },
  {
    description: "Quick open a file",
    windows: "Ctrl + P",
    linux: "Ctrl + P",
    mac: "Cmd + P",
  },
  {
    description: "Toggle between full screen mode",
    windows: "F11",
    linux: "F11",
    mac: "Ctrl + Cmd + F",
  },
  {
    description: "Toggle between Zen mode",
    windows: "Ctrl + K, Z",
    linux: "Ctrl + K, Z",
    mac: "Cmd + K, Z",
  },
  {
    description: "Open settings",
    windows: "Ctrl + ,",
    linux: "Ctrl + ,",
    mac: "Cmd + ,",
  },
  {
    description: "Search for a specific setting",
    windows: "Ctrl + P, @",
    linux: "Ctrl + P, @",
    mac: "Cmd + P, @",
  },
  {
    description: "Search for a command",
    windows: "Ctrl + Shift + P",
    linux: "Ctrl + Shift + P",
    mac: "Cmd + Shift + P",
  },
  {
    description: "Toggle between open editors",
    windows: "Ctrl + Tab",
    linux: "Ctrl + Tab",
    mac: "Cmd + Tab",
  },
  {
    description: "Switch between open windows",
    windows: "Alt + Tab",
    linux: "Alt + Tab",
    mac: "Cmd + `",
  },
  {
    description: "Switch between open instances of Visual Studio Code",
    windows: "Ctrl + Alt + Tab",
    linux: "N/A",
    mac: "N/A",
  },
  {
    description: "Open the integrated terminal",
    windows: "Ctrl + `",
    linux: "Ctrl + `",
    mac: "Cmd + `",
  },
  {
    description: "Create a new terminal instance",
    windows: "Ctrl + Shift + `",
    linux: "Ctrl + Shift + `",
    mac: "Cmd + Shift + `",
  },
  {
    description: "Focus on the terminal",
    windows: "Ctrl + `",
    linux: "Ctrl + `",
    mac: "Cmd + `",
  },
  {
    description: "Open the command palette",
    windows: "Ctrl + Shift + P",
    linux: "Ctrl + Shift + P",
    mac: "Cmd + Shift + P",
  },
  {
    description: "Go to a specific line in the current file",
    windows: "Ctrl + G",
    linux: "Ctrl + G",
    mac: "Cmd + L",
  },
  {
    description: "Navigate to the last cursor position",
    windows: "Ctrl + Alt + -",
    linux: "Ctrl + Alt + -",
    mac: "Cmd + Alt + -",
  },
  {
    description: "Navigate to the next cursor position",
    windows: "Ctrl + Shift + -",
    linux: "Ctrl + Shift + -",
    mac: "Cmd + Shift + -",
  },
  {
    description: "Trigger suggestions",
    windows: "Ctrl + Space",
    linux: "Ctrl + Space",
    mac: "Cmd + Space",
  },
  {
    description: "Trigger parameter hints",
    windows: "Ctrl + Shift + Space",
    linux: "Ctrl + Shift + Space",
    mac: "Cmd + Shift + Space",
  },
  {
    description: "Format the document",
    windows: "Shift + Alt + F",
    linux: "Ctrl + Shift + I",
    mac: "Shift + Alt + F",
  },
  {
    description: "Add a cursor above the current line",
    windows: "Ctrl + Alt + Up",
    linux: "Ctrl + Alt + Up",
    mac: "Cmd + Alt + Up",
  },
  {
    description: "Add a cursor below the current line",
    windows: "Ctrl + Alt + Down",
    linux: "Ctrl + Alt + Down",
    mac: "Cmd + Alt + Down",
  },
  {
    description: "Select all occurrences of the current word in the document",
    windows: "Ctrl + Shift + L",
    linux: "Ctrl + Shift + L",
    mac: "Cmd + Shift + L",
  },
  {
    description: "Move the current line up or down",
    windows: "Alt + Up / Down",
    linux: "Alt + Up / Down",
    mac: "Cmd + Alt + Up / Down",
  },
  {
    description: "Copy the current line above or below",
    windows: "Shift + Alt + Up / Down",
    linux: "Shift + Alt + Up / Down",
    mac: "Cmd + Shift + Alt + Up / Down",
  }
];
