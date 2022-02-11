import { defineStore } from 'pinia'

export const useApi = defineStore({
	id: 'api',
	state: () => ({
		progress: []

	}),
	getters: {},
	actions: {
		addProgress(id) {
			this.progress.push(id)
			setTimeout(() => {
				this.progress = []
			}, 5000)
		}
	}
})
