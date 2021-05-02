import { createApp } from "vue";
import App from "./App.vue";
import AppButton from "@/components/AppButton.vue";

// Create Vue instance
const app = createApp(App);

// Register Button component globally
app.component("AppButton", AppButton);

// Mount Vue instance
app.mount("#app");
