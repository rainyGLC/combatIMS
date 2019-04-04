import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login.vue';
import User from './views/user.vue';
import Classify from './views/classify.vue';
import Article from './views/article.vue';
import ArticleCreate from './views/article_create.vue';
import ArticlEdit from './views/article_edit.vue';

Vue.use(Router);
const appRouter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin/login',
      name: 'login',
      component: Login,
    }, {
      path: '/admin/user',
      name: 'user',
      component: User,
    }, {
      path: '/admin/classify',
      name: 'classify',
      component: Classify,
    }, {
      path: '/admin/article',
      name: 'article',
      component: Article,
    }, {
      path: '/admin/article_create',
      name: 'article_create',
      component: ArticleCreate,
    }, {
      path: '/admin/article_edit/:id',
      name: 'article_edit',
      component: ArticlEdit,
    },
  ],
});

// appRouter.beforeEach((to, from, next) =>{
//   let name = to.name;
//   let LoginPage = ['user','classify','article','article_create','article_edit'];
//   let shouldLogin = LoginPage.some(data=>data === name);
//   let isLogin = localStorage.getItem('token');
//   if(shouldLogin && !isLogin){
//     next('/admin/login')
//     return
//   }
//   next()
// });

export default appRouter;
