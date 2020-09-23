import "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import plugins from "./imports";
import "./assets/tailwind.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(plugins);
app.mount("#app");
