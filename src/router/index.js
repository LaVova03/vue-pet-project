import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Product from '../views/Product.vue'
import MyCart from '@/views/MyCart.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/cart',
        name: 'MyCart',
        component: MyCart
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
