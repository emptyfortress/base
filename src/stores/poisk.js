import { defineStore } from 'pinia'

export const usePoisk = defineStore({
	id: 'poisk',
	state: () => ({
		searchMode: false,
		model: '',
		extra: '',
	}),
	getters: {},
	actions: {
		toggleSearch() {
			this.searchMode = !this.searchMode
		},
		clearModel() {
			this.model = ''
		},
		updateModel(l, m) {
			this.model = this.model.concat(l, ': ', m, ', ')
		},
		updateExtra(e) {
			this.extra = e
		},
		setModel(e) {
			this.model = e
		}
	}
})
