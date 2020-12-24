import Vue from 'vue'
import App from './App'

import router from './router' //自动扫描router
import VueCookie from 'vue-cookie'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueCookie)   //挂在在全局了

Vue.use(Element);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  //配置路由
  router,
  components: {
    App,
  },
  template: '<App/>',
  render: h => h(App) //ElementUI需要
})
