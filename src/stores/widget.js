import { defineStore } from 'pinia'

export const useWidget = defineStore({
	id: 'widget',
	state: () => ({
		block: null,
		selected: null,
	}),
	getters: {},

	actions: {
		select(a,e) {
			if (this.selected === e) {
				this.selected = null
			} else this.selected = e
			this.block = a
		}
	},
})
