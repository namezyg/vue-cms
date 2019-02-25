// 入口文件
import Vue from 'vue'
import app from './App.vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
    // 导入 MUI 的样式
import './lib/mui/css/mui.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
// 1.3 导入自己的 router.js 路由模块
import router from './router.js'
// 按需导入组件
import { Swipe, SwipeItem, Button, Header } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Header.name, Header)
    // 导入resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'http://www.liulongbin.top:3005';

import moment from 'moment'
// 定义时间全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern) {
    return moment(dataStr).format(pattern)
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})