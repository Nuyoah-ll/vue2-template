import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


// 批量加载所有components组件下router.js文件
const files = require.context('@/views', true, /router\.js$/);
const routes = files.keys().map(key => {
  const page = require('@/views' + key.replace('.', ''));
  return page.default;
});
routes.push({
  path: "/",
  redirect: "/home"
})


const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
