import { defineStore } from 'pinia'

export const useGrid = defineStore({
	id: 'grid',
	state: () => ({
		sidebar: true,
		view: 'grid',
	}),
	getters: {},
	actions: {
		switchSidebar() {
			this.sidebar = !this.sidebar
		},
		switchView() {
			this.view === 'grid' ? this.view = 'lenta' : this.view = 'grid'
			
		}
	},
})

