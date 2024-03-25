// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const http = require("http");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
let myServer;
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "chrome.github.copilot" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  const main = function () {
    // Display a message box to the user
    // vscode.window.showInformationMessage(
    //   "Hello World from gitcopilot-server.startServer!"
    // );

    // 执行命令使得 Copilot 聊天面板获取焦点
    vscode.commands.executeCommand("workbench.panel.chat.view.copilot.focus");
    // 粘贴剪贴板的内容
    vscode.commands.executeCommand("editor.action.clipboardPasteAction");
  };

  // 启动服务
  // eg. http://localhost:4999
  const startServer = function () {
    vscode.window.showInformationMessage(
      "Hello World from github copilot local server!"
    );

    if (myServer) {
      myServer.close();
      myServer = null;
    }
    // 创建服务
    myServer = http.createServer((req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      // 如果请求路径是 /ping
      if (req.url === "/ping") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("pong");
        return;
      }

      // 如果请求路径是send
      if (req.url === "/send") {
        main();
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("okay");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("okay");
      return;
    });

    // 监听端口
    myServer.listen(4999, () => {
      console.log("server listen on port 3000");
    });
  };

  let disposable = vscode.commands.registerCommand(
    "gitcopilot-server.startServer",
    startServer
  );

  // 命令注册
  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {
  if (myServer) {
    myServer.close();
  }
}

module.exports = {
  activate,
  deactivate,
};
