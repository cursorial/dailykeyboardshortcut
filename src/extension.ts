import * as vscode from 'vscode';
import { shortcuts, Shortcut } from './shortcuts';

export function activate(context: vscode.ExtensionContext) {
    const shortcut = shortcuts[Math.floor(Math.random() * shortcuts.length)];
    const disposable = vscode.commands.registerCommand('dailyKeyboardShortcut.showShortcut', async () => {
        await showShortcut(shortcut);
    });

    context.subscriptions.push(disposable);

    showShortcut(shortcut);
}

async function showShortcut(shortcut: Shortcut) {
    const currentPlatform = process.platform === 'darwin' ? 'mac' : process.platform === 'win32' ? 'windows' : 'linux';
    const shortcutString = shortcut[currentPlatform];
    const message = `Today's keyboard shortcut: ${shortcutString} - ${shortcut.description}`;
    const documentationLink = 'https://code.visualstudio.com/docs/getstarted/keybindings';

    let alreadyShown: Shortcut[] = [];

    const action = await vscode.window.showInformationMessage(message, 'Show Another', 'Learn More');
    if (action === 'Learn More') {
        vscode.env.openExternal(vscode.Uri.parse(documentationLink));
    }
    
    if (action === 'Show Another') {
        let newShortcut = shortcuts[Math.floor(Math.random() * shortcuts.length)];
        while(alreadyShown.find(shown => shown.windows === newShortcut.windows)) {
            newShortcut = shortcuts[Math.floor(Math.random() * shortcuts.length)];
            if (alreadyShown.length === shortcuts.length) {
                alreadyShown = []
            }
        }
        showShortcut(newShortcut);
    }
}

export function deactivate() {}
