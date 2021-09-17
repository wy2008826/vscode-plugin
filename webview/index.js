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
   context.subscriptions.push(vscode.commands.registerCommand('openConfigPage', function (uri) {
     // 创建webview
     console.log('创建webview')
       const panel = vscode.window.createWebviewPanel(
           'testWebview', // viewType
           "WebView演示", // 视图标题
           vscode.ViewColumn.One, // 显示在编辑器的哪个部位
           {
               enableScripts: true, // 启用JS，默认禁用
               retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
           }
       );
       panel.webview.html = `<html> 
       <script>
          function clickSend(e){
            console.log("clickSend",e)
            vscode.window.showInformationMessage('received');
          }
       </script>
       <body>
           <select name="pageType"><option value="list">列表</option></select>
           <button onclick="function(){document.getElementsByTagName("button")[0].innetText='123' }">点击发送</button>
       </body>
       </html>`;
      
       // 插件接收到 webview 的数据
       panel.webview.onDidReceiveMessage(message => {
        console.log('插件收到的消息：', message);
      }, undefined, context.subscriptions);


     })
   )
 };
 
 /**
  * 插件被释放时触发
  */
 exports.deactivateCb = function() {
     console.log('您的扩展“vscode-plugin-demo”已被释放！')
 };
 