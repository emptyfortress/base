export default {
	async mounted(el) {
		await this.$nextTick()
		el.focus()
	}
}
