
export const routes = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        component: import('./main/index.vue'),
    },
    {
        path: '/auth/sign-in',
        component: import('./login/index.vue'),
    },
    {
        path: '/auth/sign-up',
        component: import('./register/index.vue')
    }

]



