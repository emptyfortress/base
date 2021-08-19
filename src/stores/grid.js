import { defineStore } from 'pinia'

export const useGrid = defineStore({
	id: 'grid',
	state: () => ({
		sidebar: true,
		view: true,
		fullscreen: false,
		items: [],
	}),
	getters: {},
	actions: {
		switchSidebar() {
			this.sidebar = !this.sidebar
		},
		switchView() {
			this.view === 'grid' ? this.view = 'lenta' : this.view = 'grid'
			
		},
		switchFullscreen() {
			this.fullscreen = !this.fullscreen
			
		}
	},
})

