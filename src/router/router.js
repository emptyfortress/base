import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '@/components/Home.vue'

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			redirect: '/grid'
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
			path: '/btn',
			name: 'btn',
			component: () => import('@/components/common/Btn.vue'),
		},
		{
			path: '/menu',
			name: 'menu',
			component: () => import('@/components/common/Menu.vue'),
		},
		{
			path: '/albatros',
			name: 'albatros',
			component: () => import('@/components/Albatros.vue'),
		},
	],
})
