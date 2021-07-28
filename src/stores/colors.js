import { defineStore } from 'pinia'

export const useColor = defineStore({
	id: 'color',
	state: () => ({
		toolbar: false,
		panel: false,
		// primary: 'one',
	}),
	getters: {},
	actions: {},
})
