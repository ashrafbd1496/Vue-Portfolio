import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App); 
app.config.devtools = true; 
app.mount("#app"); 
