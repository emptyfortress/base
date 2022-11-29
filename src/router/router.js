import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '@/pages/Dashboard.vue'
import Cabinet from '@/pages/Cabinet.vue'
import Grid from '@/pages/Grid.vue'

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			redirect: '/dashboard',
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard,
			meta: { transition: 'slide-left' },
		},
		{
			path: '/dashboard1',
			name: 'dashboard1',
			component: () => import('@/pages/Dashboard1.vue'),
			meta: { transition: 'slide-left' },
		},
		{
			path: '/cabinet',
			name: 'cabinet',
			component: Cabinet,
			meta: { transition: 'slide-left' },
		},
		{
			path: '/grid',
			name: 'grid',
			component: Grid,
			meta: { transition: 'slide-left' },
		},
	],
})
