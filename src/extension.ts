import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("Congratulations, vscode-rojo-tools is now active!");

  const disposable = vscode.commands.registerCommand("vscode-rojo-tools.helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from vscode-rojo-tools!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
