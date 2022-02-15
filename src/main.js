import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
// import store from './store/index';
/** 引入element3 */
import Element3 from 'element3';
import 'element3/lib/theme-chalk/index.css';

const app = createApp(App);
app.use(router);
// app.use(store);
app.use(Element3);
app.mount('#app');
