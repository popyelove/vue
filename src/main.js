import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//import iView from 'iview';
//import 'iview/dist/styles/iview.css';    // 使用 CSS
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-default/index.css';
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
//Vue.use(iView);
import DetailComponent from './components/detail.vue';
import FootComponent from './components/foot.vue';
import IndexComponent from './components/index.vue';

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: IndexComponent
    },
    {
      path: '/detail',
      component: DetailComponent
    }
  ]
});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
      el    : '#app',
      router: router,
      render: h=>h(App),
});
