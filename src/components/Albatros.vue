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
					.card.flow(v-for="attribute in attributes")
						.text-bold {{ attribute.label }}
						.value {{ attribute.value }}
					 
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
			attributes: [
				{ id: 0, label: 'Вид', value: ['Входящий'] },
				{ id: 1, label: 'Состояние', value: ['Подготовка'] },
				{ id: 2, label: 'Подготовил', value: ['Константинопольский А.'] },
				{ id: 3, label: 'Рег.№', value: ['Вх-1234'] },
				{ id: 4, label: 'Дата регистрации', value: ['19.08.2021'] },
				{
					id: 5,
					label: 'Согласующие',
					value: ['Волков А.', 'Карачева О.', 'Скворцов Г.'],
				},
				{ id: 6, label: 'Подписывает', value: ['Воробьев С.'] },
				{
					id: 7,
					label: 'Получатели',
					value: ['Гусев П.', 'Уткин А.', 'Скворцов Г.', 'Смирнов С.'],
				},
				{ id: 8, label: 'Метка', value: ['значение'] },
			],
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
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	.flow {
		flex-basis: 300px;
		flex-grow: 1;
		display: flex;
		gap: 1rem;

	}
}
</style>
