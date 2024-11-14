import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./app.scss";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const App = createApp({});

App.use(pinia);

export default App;
