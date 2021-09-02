<template lang="pug">
.container
	.zag Кнопки
	.lab Форма:
	.bl
		div
			q-btn(unelevated ).q-mr-sm default
			q-btn(unelevated outline color="primary" ).q-mr-sm outline
			q-btn(unelevated outline rounded color="primary").q-mr-sm rounded
			q-btn(unelevated color="white" text-color="black").q-mr-sm flat
			q-btn(unelevated color="primary" text-color="white").q-mr-sm flat
			q-btn(glossy color="primary").q-mr-sm glossy
			q-btn(unelevated push color="primary").q-mr-sm push
	.lab Цвет:
	.bl
		div
			q-btn(unelevated color="white" text-color="black").q-mr-sm Белый
			q-btn(unelevated color="grey-5" text-color="black").q-mr-sm Серый
			q-btn(unelevated color="primary").q-mr-sm Primary
			q-btn(unelevated color="accent").q-mr-sm Accent
			q-btn(unelevated color="positive").q-mr-sm Positive
			q-btn(unelevated color="warning").q-mr-sm Warn
			q-btn(unelevated color="negative").q-mr-sm Negative
			q-btn(unelevated color="info").q-mr-sm Info
			q-btn(unelevated color="dark").q-mr-sm Dark
	.lab Иконки:
	.bl
		div
			q-btn(flat round color="primary" icon="mdi-crosshairs-gps").q-mr-sm
			q-btn(flat color="primary" icon="mdi-heart" label="Слева").q-mr-sm
			q-btn(unelevated color="primary" icon="mdi-heart" label="Слева").q-mr-sm
			q-btn(unelevated color="primary" icon-right="mdi-heart" label="Справа").q-mr-sm
			q-btn(unelevated color="primary" icon="mdi-heart" icon-right="mdi-heart" label="Вокруг").q-mr-sm
			q-btn(unelevated color="primary" icon="mdi-heart" stack label="Вверху").q-mr-sm
	.flexi
		div
			.lab FAB:
			.bl
				div
					q-btn(round color="primary" icon="mdi-crosshairs-gps").q-mr-sm
					q-btn(round color="warning" icon="mdi-map-marker").q-mr-sm
		div
			.lab Обрезка:
			.bl
				div
					q-btn(unelevated color="primary" style="width: 200px;")
						.ellipsis Очень длинный, длинный, длинный текст
		div
			.lab Loading:
			.bl
				div
					q-btn(unelevated color="primary" :loading="loading" @click="simulateProgress") Кнопка
	.lab Размер:
	.bl
		div
			q-btn(unelevated color="primary" size="xs" text-color="white").q-mr-sm size xs
			q-btn(unelevated color="primary" size="sm" text-color="white").q-mr-sm size sm
			q-btn(unelevated color="primary" size="md" text-color="white").q-mr-sm size md
			q-btn(unelevated color="primary" size="lg" text-color="white").q-mr-sm size lg
			q-btn(unelevated color="primary" size="xl" text-color="white").q-mr-sm size xl
			q-btn(unelevated round color="primary" size="xs" text-color="white" icon="mdi-heart").q-mr-sm
			q-btn(unelevated round color="primary" size="sm" text-color="white" icon="mdi-heart").q-mr-sm
			q-btn(unelevated round color="primary" size="md" text-color="white" icon="mdi-heart").q-mr-sm
			q-btn(unelevated round color="primary" size="lg" text-color="white" icon="mdi-heart").q-mr-sm
			q-btn(unelevated round color="primary" size="xl" text-color="white" icon="mdi-heart").q-mr-sm
			q-btn(unelevated color="primary" size="50px" text-color="white").q-mr-sm Custom size
</template>

<script>
export default {
	data() {
		return {
			loading: false
		}
	},
	methods: {
		simulateProgress() {
			this.loading = true
			setTimeout( () => {
				this.loading = false
			},3000 )
			
		}
	}

}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.container {
	padding-bottom: 2rem;
}
.bl {
	border: 1px solid var(--my-border-color);
	justify-content: flex-start;
	padding: 1rem;
	background: var(--bg-drawer);
}
.lab {
	font-size: 1.0rem;
	margin-top: 2rem;
	font-weight: bold;
}
.flexi {
	width: 100%;
	display: flex;
	gap: 1rem;
	& > div {
		width: 36%;
	}
}
</style>
