import {createRouter, createWebHistory} from "vue-router";
import {routes} from "@/pages/index.ts";

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router