// Components
import App from "./App.vue";
// Plugins
import { registerPlugins } from "@/plugins";
import vuetify from "./plugins/vuetify";
import router from "./router";
// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app.use(router).use(vuetify).mount("#app");
