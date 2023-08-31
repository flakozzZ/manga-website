import Login from '../features/authentication/login/ui/index.vue'
import Register from '../features/authentication/register/ui/index.vue'


export const routes = [
    {
        path: '/auth/sign-in',
        name: 'Login',
        component: Login
    },
    {
        path: '/auth/sign-up',
        name: 'Register',
        component: Register
    }
]

