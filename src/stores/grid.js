import { defineStore } from 'pinia'

export const useGrid = defineStore({
	id: 'grid',
	state: () => ({
		sidebar: true,
		lenta: false,
		fullscreen: false,
		items: [],
		filter: true,
		checked: [],
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
			let temp = this.checked.find( item => item.col === col )
			if (temp) {
				temp.items.push(items)
			} else {
				this.checked.push({
					col: col,
					items: items
				})
			}

		},
		clearCheckedItems() {
			this.checked = []
		}
	},
})

