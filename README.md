README.md
###项目介绍
极客学院的信息发布系统，通过后台配置的内容在前台中进行展示，支撑企业的信息发布和信息管理，运营人员会定期发布极客学院的新的动态及技术内容帮助大家及时的掌握前沿技术动态，更好的学习规划。为此需要一套信息管理发布系统来方便对他的内容进行发布、修改、删帖和分类等

本项目为 Node.js 构建 Web API，并使用 Vue 配合 Element-ui 构建管理后台。主要考察对 Vue 在后台项目中的应用能力，分成以下五个部分：

一、Node.js API
二、Vue
三、Vue-router
四、Element-ui

产品流程图:
![图片](https://uploader.shimo.im/f/valhfAWED9AW9oje.png!thumbnail)
![图片](https://uploader.shimo.im/f/XEL20xyE0oADzelo.png!thumbnail)

###项目步骤

    任务一： 环境搭建 主要通过 express-generator 快速搭建 Web 服务框架，在项目目录下创建admin文件夹并使用 Vue-Cli 快速搭建前端框架。

    任务二：Vue 路由模版配置 主要通过 vue-router 配置生成后台各个页面及访问路径。

    任务三：页面样式 主要通过 Element-ui 完成后台页面的结构与样式。

    任务四：Node.js API 主要通过 knex.js 连接 MySQL，梳理需求完成所有的 API 接口。

    任务五：用户和分类 主要通过API 获取、发送的用户数据实现用户、分类的增删改查。

    任务六：登录与退出 主要通过 JWT 实现用户登录状态的管理。

    任务七：文章管理 主要通过API 获取、发送的文章数据实现文章的增删改查。

    任务八：前台页面配置 主要通过 nunjucks 生成首页和详情页的模版并进行数据填充。

    任务九：后台页面配置 通过 Vue-CLI 的打包配置，定义打包文件打包位置，并在路由中定义渲染此模版。

    任务十：项目优化 主要通过自己的想法，对项目进行调整和修改。

###启动项目
cd combatIMS 
npm install
node ./bin/www



