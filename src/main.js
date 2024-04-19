import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from "@/views/Login.vue";

// 你可以在此处定义路由
const routes = [
    // 示例路由配置
    { path: '/', component: Login },
    // { path: '/about', component: AboutComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')