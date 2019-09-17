// 入口文件  
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装理由
Vue.use(VueRouter)

// 导入格式化事件的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})


// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2  安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
// vue.http.options.root = 'http://vue.studyit.io';

// 导入Mint-UI 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'



//  按需导入 Minit-UI 的组件
import {
  Header,
  Swipe,
  SwipeItem
} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 1.3 导入自己的 router.js 模块
import router from './router.js'

// 导入APP模板
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 1.4 挂载 路由对象到 vm 实例上
})