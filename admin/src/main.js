import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import App from './App.vue';
import router from './router';
import Layout from './components/layout.vue';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component(Layout.name, Layout);
Vue.use(VueQuillEditor);

// Vue.use(Layout);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
