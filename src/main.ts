import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./style.css";
import "virtual:svg-icons-register";

createApp(App).use(store).use(router).mount("#app");
