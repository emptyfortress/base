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
			path: '/doc',
			name: 'doc',
			component: () => import('@/pages/Docs.vue'),
			meta: { transition: 'slide-left' },
		},
		{
			path: '/dash',
			name: 'dash',
			component: () => import('@/pages/Dash.vue'),
			meta: { transition: 'slide-left' },
		},
		{
			path: '/grid',
			name: 'grid',
			component: () => import('@/pages/Grid.vue'),
		},
		{
			path: '/lib',
			name: 'lib',
			component: () => import('@/pages/Lib.vue'),
		},
		{
			path: '/hello',
			name: 'helloworld',
			component: () => import('../components/HelloWorld.vue'),
		},
	],
})
