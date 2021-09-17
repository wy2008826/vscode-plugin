# vscode-plugin
vscode插件、提升开发效率

#### 实现构想
- 自创一套语法，便于后期快速横向扩展，也便于识别
- 调查vscode 可以做哪些提升效率的事情
- 可以快速创建特定类型的文件 在任意指定的文件夹内
- 快速创建某种功能的页面
- 快速创建代码片段
- 快速引用
- 在当前文件中执行命令 可以快速确认并删除当前文件
- 除了通过prefix之外，是否可以通过指引选择的方式添加？
- react:page.detail.form.table.table-edit 文件中输入上述内容，可以自动解析为 detail 页面，同时包含 form、table、edit-table 的情况，进而生成动态化的页面
- 或者通过命令行打开一个内联页，在内联页中进行动态化输入，然后解析输入，动态化插入代码，但此时又没法使用到 snippets 定义的代码模板，这是一个局限；

 
#### 需要vscode 具备的能力有

- 可以读取参数的入口
- 可以进行逻辑判断的入口
- 可以进行文件操作的能力
- 需要通过 snippets ，调用到 js 运行逻辑，同时可以读取到用户的输入，进而可以创建出具有


#### 语法构想
通过 : . 进行功能和属性配置

[框架]:[片段类型]
[react|vue]:[page|comp]:[filter|list|modal]:[ref|]


#### 代码片段、自动补全【可逻辑判断】
- 通过  import ./ | ../../ 可以自动提示并引入组件,避免手动查找引入
- 通过 import React  自动引入 React的代码
- log -> console.log();
- nameIds -> [{name:'',id:''}]

#### 快速生成页面

- 列表页
  - 包含filter table
  - 是否支持tab切换
  - 是否支持多选
  - 是否包含操作确认弹框
  - 列表上方是否包含操作按钮

- 表单页
  - 是否是简单的单行布局表单
  - 是否包含块级别的组件【表单块，列表块，其他块】
  - 包含哪些类型的表单组件
  - 是否同时支持查看状态


- docs
  - data
    - data:array
  - page
    - react:page.modal.form
    - react:page.modal.table
    - react:page.filter
    - react:page.table
    - react:page.detail.form.table.table-edit
  - component
    - react:comp.modal
    - react:comp.tale
    - react:comp.modal


#### 快速生成各种类型的组件

  - 自定义表单组件
  - 弹框组件
    - 列表展示弹框
    - 表单弹框



#### QA
- 是否可以在 webview 中进行操作，从而读取数据，创建文件？ webview 的能力有哪些？
- 在 webview 中是否可以访问工作区，并读取或者写入文件？
