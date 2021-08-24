import { defineStore } from 'pinia'

export const useGrid = defineStore({
	id: 'grid',
	state: () => ({
		sidebar: true,
		lenta: false,
		fullscreen: false,
		items: [],
		filter: true,
		checkedHeadItems: [],
	}),
	getters: {},
	actions: {
		switchSidebar() {
			this.sidebar = !this.sidebar
		},
		switchFullscreen() {
			this.fullscreen = !this.fullscreen
		},
		showGrid() {
			this.lenta = false
		},
		showLenta() {
			this.lenta = true
		},
		addHeadItem(col,items) {
			this.checkedHeadItems = []
			this.checkedHeadItems.push({
				col: col,
				items: items
			})
		},
		clearCheckedItems() {
			this.checkedHeadItems = []
		}
	},
})

