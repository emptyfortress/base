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
					div
						.card.flow(v-for="n in 5")
							.text-bold head {{ n }}
							.value Lorem ipsum dolor
					div
						.card.flow(v-for="n in 5")
							.text-bold head {{ n }}
							.value Lorem ipsum dolor
						 
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
	padding: .5rem;
}
#columns {
	display: grid;
	grid-template-columns: repeat(2, auto-fill);
	/* grid-auto-flow: column; */
	grid-gap: 1rem;
	> * {
		background: pink;
	}
	.flow {
		display: flex;
		gap: 1rem;
	}
}
</style>
