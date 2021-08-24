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
			let temp = this.checkedHeadItems.find( item => item.col === col )
			if (temp) {
				temp.items.push(items)
			} else {
				this.checkedHeadItems.push({
					col: col,
					items: items
				})
			}

		},
		clearCheckedItems() {
			this.checkedHeadItems = []
		}
	},
})

