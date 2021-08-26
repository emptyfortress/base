import { defineStore } from 'pinia'

// function uniqueKeepLast(data, key) {
// 	return [
// 		...new Map(
// 			 data.map(x => [key(x), x])
// 		).values()
// 	]
// }

export const useGrid = defineStore({
	id: 'grid',
	state: () => ({
		sidebar: true,
		lenta: false,
		fullscreen: false,
		items: [],
		filter: true,
		checked: [],
		reset: false,
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
		addChecked(col, items) {
			let temp = this.checked.find( item => item.id === col.id )
			if (!temp) {
				this.checked.push({
					id: col.id,
					col: col.name,
					items: items
				})
			} else {
				temp.items = []
				items.forEach( el => {
					temp.items.push(el)  
				} )
			}
		},
		clearCheckedColumn(col) {
			let temp = this.checked.indexOf( (el) => el.id === col.id )
			this.checked.splice(temp, 1)
		},
		clearCheckedAll() {
			this.checked = []
		}
	},
})

