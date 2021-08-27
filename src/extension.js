const vscode = require('vscode');
const { active:commandActive, deactivate:commandDeactivate} = require('./command.js');
const { active:webviewActive, deactivate:webviewDeactivate} = require('./webview.js');

let actives = [ commandActive,webviewActive ] 
let deActives = [ commandDeactivate,webviewDeactivate ] 

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function(context) {
    actives.map( activeFn => typeof activeFn === 'function' && activeFn(context) )
};

/**
 * 插件被释放时触发
 */

exports.deactivate = function() {
    deActives.map( deactiveFn => typeof deactiveFn === 'function' && deactiveFn(context) )
};