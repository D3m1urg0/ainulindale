import "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import imports from "./imports";
// import axios from "./plugins/axios";
// import veeValidate from "./plugins/vee-validate";
import "./assets/tailwind.css";

import DynamicForm from "./components/form/DynamicForm.vue";

createApp(App)
  .use(store)
  .use(router)
  .use(imports)
  // .use(veeValidate)
  .component("DynamicForm", DynamicForm)
  .mount("#app");
