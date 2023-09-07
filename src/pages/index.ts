import Login from "./login/index.vue";
import Register from "./register/index.vue";
import Main from "./main/index.vue"

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
        component: Register
    }

]



