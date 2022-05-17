import 'core-js';
import Vue from 'vue';

Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;

import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

/*
Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;
*/

const routes = [
  {
    path: "/",
    name: "Index",
    component: Vue.component(
      "Index",
      require("./components/Index.vue").default
    )
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
