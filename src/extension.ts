import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Get the configuration for the startupToast.message setting
    const config = vscode.workspace.getConfiguration('startupToast');
    const message = config.get<string>('message') || 'Welcome to VSCode!'; // Default message as a fallback

    vscode.window.showInformationMessage(message);
}

// This method is called when your extension is deactivated
export function deactivate() {}
