import { defineStore } from 'pinia'

export const useGrid = defineStore({
	id: 'grid',
	state: () => ({
		sidebar: true,
	}),
	getters: {},
	actions: {
		switchSidebar() {
			this.sidebar = !this.sidebar
		}
	},
})

