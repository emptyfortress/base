import { defineStore } from 'pinia'

export const useApi = defineStore({
	id: 'api',
	state: () => ({
		progress: [],
		active: false,
		err: false

	}),
	getters: {},
	actions: {
		addProgress(button) {
			this.active = true
			this.progress.push(button)
			setTimeout(() => {
				let ind = this.progress.indexOf(button)
				if (button.id === 1 && !this.err) {
					this.err = true
				} else if (button.id === 1 && this.err) {
					this.err = false
					this.progress.length = 0
				} else {
					this.progress.splice(ind,1)
				}
				this.active = false
			}, 5000)
		}
	}
})
