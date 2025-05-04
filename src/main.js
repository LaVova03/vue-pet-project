import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { svgSpritePlugin } from 'vue-svg-sprite';

createApp(App)
    .use(svgSpritePlugin, {
        url: 'icons/sprite.svg',
        class: 'icon',
    })
    .mount('#app');
