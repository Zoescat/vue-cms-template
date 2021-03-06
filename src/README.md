# 这是一个 vue 商城项目

## 制作首页 APP 组件

1. 完成 Header 区域,使用的是 Min-UI 中的 Header 组件
2. 制作底部的 Tabbar 区域,使用的是 MUI 的 Tabbar.html

- 在制作购物车小图标的时候,操作会相对多一些
- 先把扩展图标的 CSS 样式,拷贝到项目中
- 拷贝扩展字体库 ttf 文件到项目中
- 为购物车小图标添加如下样式 'mui-icon mui-icon-extra mui-icon-extra-cart'

3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 Tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接,展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据

1. 获取数据,如何获取呢 使用 vue-resource
2. 使用 vue-resource 的 this.\$http.get 获取数据
3. 获取到的数据,要保存在 data 身上
4. 使用 v-for 循环渲染每个 item 项

## 中间内容六宫格区域的设计,使用了 Mint-UI 的例子

## 新闻资讯 页面 制作

1. 绘制界面， 使用 MUI 中的 media-list.html
2. 使用 vue-resource 获取数据
3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情

1. 把列表中的每一项改造为 router-link,同时，在跳转的时候应该提供唯一的 Id 标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在 路由模块中，将 新闻详情的 路由地址 和 组件页面对应起来

## 实现 新闻详情 的 页面布局 和数据渲染

## 单独封装一个 comment.vue 评论子组件

1. 先创建一个 单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的 页面中，先手动 导入 comment 组件

- `import comment from './comment.vue'`

3. 在父组件中，使用 `components` 属性，将刚才导入 comment 组件，注册为自己的 子组件
4. 将注册子组件时候的，注册名称，以 标签形式，在页面中 引用即可
