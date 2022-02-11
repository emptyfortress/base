<template lang="pug">
.container
	.zag Optimistic UI
	p Кнопки представляют различные действия пользователя, требующие взаимодействия с API.
	q-btn(unelevated color="primary" :loading="loading[0]" @click="simulateProgress(0)") Завершить
	span.error(v-if="api.progress.length") just test
</template>

<script>
import { ref } from 'vue'
import { useApi } from '@/stores/api'

export default {
	components: {},
	setup() {
		const api = useApi()
		const loading = ref([false, false, false, false, false, false])

		const simulateProgress = (e) => {
			loading.value[e] = true
			api.addProgress(e)
			console.log(e)
			setTimeout(() => {
				loading.value[e] = false
			}, 1000)
		}

		return {
			loading,
			simulateProgress,
			api,
		}
	},
}
</script>

<style scoped lang="scss">
/* @import '@/assets/styles/theme.scss'; */
p {
	font-size: 1rem;
}
.error {
	margin-left: 2rem;
}
</style>
