import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'

const app = createApp(App);
app.config.globalProperties.$goToMain = () => {
    router.push('/');
};

app.use(router);
app.mount('#app');
