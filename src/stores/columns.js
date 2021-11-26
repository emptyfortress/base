import { defineStore } from 'pinia'

export const useColumns = defineStore({
	id: 'columns',
	state: () => ({
		columns: [
			{id: 0, name: 'title', label: 'Название', sort: false, filt: false, align: 'left' },
			{id: 1, name: 'status', label: 'Состояние', sort: false, filt: false, align: 'left' },
			{id: 2, name: 'vid', label: 'Вид', sort: false, filt: false, align: 'left' },
		]
	}),
	getters: {
		itemIndex: (state) => {
			return (e) => state.columns.findIndex((item) => item.id === e.id)
		}
	},
	actions: {
		add(e) {
			let index = this.itemIndex(e)

			let newItem = {}
			newItem.id = new Date()
			this.columns.splice(index + 1, 0, newItem)
		},
		del(e) {
			let index = this.itemIndex(e)
			this.columns.splice(index, 1)
		}
	}
})
