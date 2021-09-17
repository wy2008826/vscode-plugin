/**
 * 所有功能的总入口 
 * **/

const vscode = require('vscode');
const command = require('../command/index')
const webview = require('../webview/index')

let actives = [ 
    command.activateCb,
    webview.activateCb 
] 
let deActives = [ 
    command.deactivateCb,
    webview.deactivateCb
] 

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function(context) {
    // 注册命令
    actives.map( activeFn => typeof activeFn === 'function' && activeFn(context) )
};

/**
 * 插件被释放时触发
 */

exports.deactivate = function() {
    deActives.map( deactiveFn => typeof deactiveFn === 'function' && deactiveFn(context) )
};

