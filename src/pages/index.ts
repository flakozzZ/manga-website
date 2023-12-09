import Register from "@/pages/register/index.vue";
import Login from "@/pages/login/index.vue";
import Main from "@/pages/main/index.vue";
import Catalog from '@/pages/catalog/index.vue'
export const routes = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        component: Main,
    },
    {
        path: '/auth/sign-in',
        component: Login,
    },
    {
        path: '/auth/sign-up',
        component: Register,
    },
    {
        path: '/catalog',
        component: Catalog
    }

]



