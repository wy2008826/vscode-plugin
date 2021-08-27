/**
 * 打开一个 webview 界面，可以进行一些数据的读输入和读取
 * 
 * **/

const vscode = require('vscode');

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activateCb = function(context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.openWebview', function (uri) {
    // 创建webview
      const panel = vscode.window.createWebviewPanel(
          'testWebview', // viewType
          "WebView演示", // 视图标题
          vscode.ViewColumn.One, // 显示在编辑器的哪个部位
          {
              enableScripts: true, // 启用JS，默认禁用
              retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
          }
      );
      panel.webview.html = `<html><body>你好，我是Webview <input /> </body></html>`
    })
  )
};

/**
 * 插件被释放时触发
 */
exports.deactivateCb = function() {
    console.log('您的扩展“vscode-plugin-demo”已被释放！')
};
