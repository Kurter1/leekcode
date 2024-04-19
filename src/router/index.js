
const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router