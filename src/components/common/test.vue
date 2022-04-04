<template>
	<h2>fuck</h2>

	<ul v-show="raz">
		<li v-for="one in ones" :key="one">{{ one }}</li>
	</ul>

	<some>Vel fringilla est ullamcorper eget?</some>
</template>

<script>
import { ref, computed } from 'vue'

export default {
	components: {},
	setup() {
		const show = ref(false)
		// const fuck = 'lks'
		const test = () => {
			console.log(1)
		}
		// const raz = computed(() => {
		// 	if (show.value) {
		// 		return true
		// 	}
		// })

		const ones = ['laksj', 'laksj', 'laksj']

		return { ones, test, raz }
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.one {
	height: 100%;
}

.one {
	margin: 10px;
}
</style>
