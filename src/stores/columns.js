import { defineStore } from 'pinia'

export const useColumns = defineStore({
	id: 'columns',
	state: () => ({
		columns: [
			{id: 0, name: 'title', label: 'Название', sort: false,  align: 'left' },
		],
		temp: [
			{id: 0, name: 'title', label: 'Название', sort: false,  align: 'left' },
		]
	}),
	getters: {
		itemIndex: (state) => {
			return (e) => state.columns.findIndex((item) => item.id === e.id)
		},
		name: () => {
			return (e) => {
				switch (e) {
					case 'Тип':
						return 'typ'
					case 'Название':
						return 'title'
					case 'Вид карточки':
						return 'vid'
					case 'Статус':
						return 'status'
					case 'Автор':
						return 'author'
					case 'Изменено':
						return 'changed'
					default:
						return 'id'
				}
			}
		}
	},
	actions: {
		addtemp(item, index) {
			this.temp.splice(index + 1, 0, item)
		},
		deltemp(index) {
			this.temp.splice(index, 1)
		},
		apply() {
			this.columns = [...this.temp]
		},
		update(val, ind) {
			const name = this.name(val)
			this.temp[ind].name = name
			this.temp[ind].label = val
		},
		updateTemp(e) {
			this.temp = [...e]

		}


	}
})
