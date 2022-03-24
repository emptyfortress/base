import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			redirect: '/dashboard'
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import('@/pages/Dashboard.vue'),
			meta: { transition: 'slide-left' },
		},
		{
			path: '/grid',
			name: 'grid',
			component: () => import('@/pages/Grid.vue'),
			meta: { transition: 'slide-left' },
		},
	],
})
