import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'

export const router = createRouter({
	history: createWebHashHistory(),

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
			component: () => import('@/components/Lib.vue'),
		},
		{
			path: '/albatros',
			name: 'albatros',
			component: () => import('@/components/Albatros.vue'),
		},
	],
})
