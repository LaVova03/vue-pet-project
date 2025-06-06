import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';
import { svgSpritePlugin } from 'vue-svg-sprite';

createApp(App)
    .use(store)
    .use(router)
    .use(svgSpritePlugin, {
        url: 'icons/sprite.svg',
        class: 'icon',
    })
    .mount('#app');
