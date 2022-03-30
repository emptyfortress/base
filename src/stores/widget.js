import { defineStore } from 'pinia'

export const useWidget = defineStore({
	id: 'widget',
	state: () => ({
		block: null,
		chip: null,
	}),
	getters: {},

	actions: {
		select(a,e) {
			if (this.chip === e) {
				this.chip = null
			} else this.chip = e
			this.block = a
		}
	},
})
