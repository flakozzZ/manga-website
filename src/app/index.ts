import {createApp} from "vue";
import {createPinia} from "pinia";
import router from "./providers/router.ts";
import App from "./index.vue";
import "./index.scss"


export const app = createApp(App).use(createPinia).use(router)