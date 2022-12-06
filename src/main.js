import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from "@/router"

createApp(App).use(router).mount('#app');

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
