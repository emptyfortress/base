import { defineStore } from 'pinia'

export const useColor = defineStore({
	id: 'color',
	state: () => ({
		primary: 'one',
	}),
	getters: {},
	actions: {},
})
