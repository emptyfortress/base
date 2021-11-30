import { defineStore } from 'pinia'

export const usePoisk = defineStore({
	id: 'poisk',
	state: () => ({
		searchMode: false,
	}),
	getters: {},
	actions: {
		toggleSearch() {
			this.searchMode = !this.searchMode
		}

	}
})
