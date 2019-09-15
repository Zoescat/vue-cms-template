// 入口文件  
import Vue from 'vue'


// 导入Mint-UI 的样式
import './lib/mui/css/mui.min.css'
//  按需导入 Minit-UI 的组件
import {
  Header
} from 'mint-ui'
Vue.component(Header.name, Header)

// 导入APP模板
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app)
})