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
  base: '/admin/',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    }, {
      path: '/user',
      name: 'user',
      component: User,
    }, {
      path: '/classify',
      name: 'classify',
      component: Classify,
    }, {
      path: '/article',
      name: 'article',
      component: Article,
    }, {
      path: '/article_create',
      name: 'article_create',
      component: ArticleCreate,
    }, {
      path: '/article_edit/:id',
      name: 'article_edit',
      component: ArticlEdit,
    },
  ],
});

appRouter.beforeEach((to, from, next) => {
  // eslint-disable-next-line
  let name = to.name;
  const LoginPage = ['user', 'classify', 'article', 'article_create', 'article_edit'];
  const shouldLogin = LoginPage.some(data => data === name);
  const isLogin = localStorage.getItem('token');

  if (shouldLogin && !isLogin) {
    next('/login');
    return;
  }
  if (isLogin && name === 'login') {
    next('/user');
    return;
  }
  next();
});

export default appRouter;
