import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'

export const router = createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/hello',
			name: 'helloworld',
			component: () => import('@/components/HelloWorld.vue')
			
		},
	],
})
