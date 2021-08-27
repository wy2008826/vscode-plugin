/**
 * 一些常见的命令
 * 
 * **/
console.log(123);

const  vscode = require('vscode');
/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activateCb = function(context) {
   // 注册命令
   context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', function () {
    vscode.window.showInformationMessage('Hello World21!');
  }));
};

/**
 * 插件被释放时触发
 */
exports.deactivateCb = function() {
   
};

exports.name = 'name'