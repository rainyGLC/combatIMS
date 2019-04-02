import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from 'axios';
import App from './App.vue';
import router from './router';
import Layout from './components/layout.vue';


Vue.config.productionTip = false;
// Vue.prototype.axios = axios;
Vue.use(ElementUI);
Vue.component(Layout.name, Layout);

// Vue.use(Layout);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
