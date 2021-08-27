# vscode-plugin
vscode插件、提升开发效率

實現目標
- 自创一套语法，便于后期快速横向扩展，也便于识别
- 调查vscode 可以做哪些提升效率的事情
- 可以快速創建特定類型的文件 在任意指定的文件夹内
- 快速创建某种功能的页面
- 快速创建代码片段
- 快速引用
- 在当前文件中执行命令 可以快速确认并删除当前文件
- 除了通过prefix之外，是否可以通过指引选择的方式添加？


[框架]:[片段类型]
[react|vue]:[page|comp]:[filter|list|modal]:[ref|]

#### 快速生成页面

-列表页
  - 包含filter table
  - 是否支持tab切换
  - 是否支持多选
  - 是否包含操作确认弹框
  - 列表上方是否包含操作按钮

-表单页
  - 是否是简单的单行布局表单
  - 是否包含块级别的组件【表单块，列表块，其他块】
  - 包含哪些类型的表单组件
  - 是否同时支持查看状态

#### 快速生成各种类型的组件

  - 自定义表单组件
  - 弹框组件
    - 列表展示弹框
    - 表单弹框




快速代码片段
log -> console.log();

页面代码片段


构想：
- 通过  import ./ | ../../ 可以自动提示并引入组件,避免手动查找引入
- 通过 import React  自动引入 React的代码


 需要vscode 具备的能力有
1、可以读取参数的入口
2、可以进行逻辑判断的入口
3、可以进行文件操作的能力

