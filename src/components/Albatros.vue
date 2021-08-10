<template lang="pug">
.container
	h4 Albatros
	q-splitter(v-model="splitter" :limits="[0, 100]" style="height: 600px;")
		template(v-slot:before)
			.preview
				.pdf
					h4 Preview
		template(v-slot:after)
			.q-ml-md
				.row alksj


</template>

<script>
import { ref, computed } from 'vue'

export default {
	setup() {

		const hei = computed(() => {
			return 'height: ' + (window.innerHeight - 145) + 'px;'
		})

		return {
			splitter: ref(50),
			hei,

		}
	},

}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.preview {
	width: 100%;
	height: 600px;
	padding-right: 0.5rem;
	.pdf {
		background: var(--bg-drawer);
		border: 1px solid var(--my-border-color);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #aaa;
	}
}
</style>
