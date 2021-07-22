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
			path: '/docs',
			name: 'docs',
			component: () => import('@/pages/Docs.vue'),
			meta: { transition: 'slide-left' },
		},
		{
			path: '/tasks',
			name: 'tasks',
			component: () => import('@/pages/Tasks.vue'),
			meta: { transition: 'slide-left' },
		},
		{
			path: '/folders',
			name: 'folders',
			component: () => import('@/pages/Folders.vue'),
		},
		{
			path: '/hello',
			name: 'helloworld',
			component: () => import('../components/HelloWorld.vue'),
		},
	],
})
