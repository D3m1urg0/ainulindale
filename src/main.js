import "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import imports from "./imports";

import "./assets/tailwind.css";
import VueRouterLayout from "vue-router-layout";

createApp(App)
  .use(VueRouterLayout)
  .use(store)
  .use(router)
  .use(imports)

  .mount("#app");
