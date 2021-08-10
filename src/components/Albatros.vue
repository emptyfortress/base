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
					.card.flow
						.text-bold head
						p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					.card.flow
						.text-bold head
						p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					.card.flow
						.text-bold head
						p Lorem ipsum dolor sit amet,
					.card.flow
						.text-bold head
						p Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					.card.flow
						.text-bold head
						p Lorem ipsum dolor sit amet, 
						 
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
.card {
	border: 1px solid #ccc;
	padding: 1rem;
}
#columns {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	.flow {
		/* flex-basis: calc(500px - 100%); */
		flex-basis: calc(calc(800px - 100%) * 999);
		flex-shrink: 1;
		flex-grow: 1;
	}
}
</style>
