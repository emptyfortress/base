<template lang="pug">
.container
	q-splitter(v-model="splitter" :limits="[0, 100]" style="height: 800px;")
		template(v-slot:before)
			.preview
				.pdf
					p Правый блок {{ width }}
		template(v-slot:after)
			.q-ml-md


				#columns
					.card.flow(v-for="n in 3")
					 
</template>

<script>
import { ref, computed, onUpdated } from 'vue'

export default {
	setup() {
		let width = ref(null)
		onUpdated(() => {
			width.value = document.querySelector('#columns').clientWidth
		})

		const hei = computed(() => {
			return 'height: ' + (window.innerHeight - 145) + 'px;'
		})

		return {
			splitter: ref(50),
			hei,
			width,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.flow {
	flex-basis: calc(calc(500px - 100%) * 999);
	flex-grow: 1;
}
.card {
	border: 1px solid #ccc;
	padding: 0.5rem;
	background: pink;
	height: 100px;
}
#columns {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
.container {
	background: #fff;
}
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
	}
}
</style>
