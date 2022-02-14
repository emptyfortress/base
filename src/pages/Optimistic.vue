<template lang="pug">
.container
	.zag Optimistic UI
	p Кнопки представляют различные действия пользователя, требующие взаимодействия с API.
	.col
		div(v-for="button in buttons" :key="button.id")
			q-btn(unelevated color="primary" :loading="loading[button.id]" @click="simulateProgress(button)") {{button.text}}
			span(v-if="api.err && button.id === 1").hint Произошла ошибка, попробуйте еще раз.
		br
		br
		q-btn(unelevated @click="restart") Рестарт
</template>

<script>
import { ref } from 'vue'
import { useApi } from '@/stores/api'

export default {
	components: {},
	setup() {
		const api = useApi()
		const loading = ref([false, false, false, false, false, false])
		const buttons = [
			{ id: 0, text: 'Завершить' },
			{ id: 1, text: 'Делегировать' },
			{ id: 2, text: 'В работу' },
			{ id: 3, text: 'Согласовать' },
			{ id: 4, text: 'Отклонить' },
			{ id: 5, text: 'Запрос к api' },
		]

		const simulateProgress = (e) => {
			loading.value[e] = true
			api.addProgress(e)
			setTimeout(() => {
				loading.value[e] = false
			}, 1000)
		}
		const restart = () => {
			api.err = false
			api.progress = []
		}

		return {
			loading,
			simulateProgress,
			api,
			restart,
			buttons,
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
.col {
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 4px;
}
.hint {
	margin-left: 1rem;
	color: var(--q-negative);
}
</style>
