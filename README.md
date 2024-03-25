# gitcopilot-server README

A VSCode extension to start a local server at http://localhost:4999 ，
Any Text send to http://localhost:4999/send will be pasted into the input box of vscode extension [Github Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)

## Features

- Use the VSCode command `GitCopilot: Start Server` to start a local server
- Listen to the `http://localhost:4999/send` , and paste the received text into the input box of Github Copilot Chat

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

- [Github Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) installed
- you have logged in a github copilot account.

## Usage

1. Install the Github Copilot Chat extension in VSCode
2. Open the command palette (`Cmd+Shift+P` on Mac, `Ctrl+Shift+P` on Windows/Linux), type and select the `GitCopilot: Start Server` command to start the local server
3. Once the server is started, the extension will automatically listen to the `http://localhost:4999/send` interface. Any text received will be pasted into the input box of Github Copilot Chat

## Notes

- Ensure that port 4999 on your machine is not occupied by other services
- If you encounter any problems during use, feel free to submit an issue

## Release Notes

### 1.0.0

Initial release

---

## Develop

- Node: 20.11.1
