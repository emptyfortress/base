import { defineStore } from 'pinia'

export const useColor = defineStore({
	id: 'color',
	state: () => ({
		primary: '#2196f3',
	}),
	getters: {},
	actions: {
		setPrimary(e) {
			this.primary = e
		},
	},
})
