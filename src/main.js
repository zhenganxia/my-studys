// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//vue来自node_modules中的vue
import App from './App'//注册组件App来自同级文件App（App文件引入当前文件下）
//相当于 var App=require('./App')
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },//注册App组件可以直接在static中的index.html中使用组件需要小写<app></app>
  template: '<App/>'
})
