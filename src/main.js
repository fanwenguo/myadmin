
import Vue from 'vue'
import App from './App'
import router from './router'
import './fonts/iconfont.css';
import mock from './mock/mock';
import ElementUI from 'element-ui';
import http from './utils/http';
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex/store';
mock();
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(http);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
