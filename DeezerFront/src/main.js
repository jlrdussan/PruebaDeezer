import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../src/assets/css/tailwind.css';
import { i18n } from './i18n';

const appp = createApp(App);
appp.use(i18n);
appp.use(router);
appp.mount('#app');
