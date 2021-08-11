<template lang="pug">
.relative-position
	q-expansion-item(v-model='panels.info' switch-toggle-side label="Информация")
		q-card
			q-card-section Детальный план ввода в эксплуатацию автоматизированной информационной системы государственного заказа Санкт-Петербурга на периода март-май 2020 г.
			q-card-section.q-pt-none
				.grid
					.attr
						template(v-for='attribute in attributes' :key="attribute.id")
							.label {{ attribute.label }}:
							.value
								span(v-for='el in attribute.value').q-mr-sm {{ el }}
					div
						//- .attr
							template(v-for='attribute in attributes' :key="attribute.id")
								.label {{ attribute.label }}:
								.value
									span(v-for='el in attribute.value').q-mr-sm {{ el }}

				.prim Ознакомьтесь с приложенным документом.

	.actionBt
		q-btn(round flat dense icon="mdi-unfold-more-horizontal" @click="$emit('toggle')")
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'
// import { onMounted } from 'vue'
// import { setMinWidth } from '@/utils/utils'

export default {
	props: ['panels'],
	emits: ['toggle'],
	components: {
		SvgIcon,
	},
	setup() {
		// onMounted(() => {
		// 	setMinWidth('.label')
		// 	setMinWidth('.value')
		// })

		return {
			attributes: [
				{ id: 0, label: 'Вид', value: ['Входящий'] },
				{ id: 1, label: 'Состояние', value: ['Подготовка'] },
				{ id: 2, label: 'Подготовил', value: ['Порхачева Н.'] },
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
				{ id: 8, label: 'Label', value: ['something'] },
			],
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.actionBt {
	position: absolute;
	top: 7px;
	right: 16px;
	body.body--dark & {
		color: var(--dark-text-color);
	}
	&.gr svg {
		opacity: 0.7;
		&:hover {
			opacity: 1;
		}
	}
}
.grid {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 1rem;
	> div {
		background: pink;
		width: 100%;
	}
}
.one {
	line-height: 100%;
	background: green;
	flex-basis: calc(calc(500px - 100%) * 999);
}
.attr {
	display: grid;
	grid-template-columns: [labels] auto [value] 1fr;
	grid-auto-flow: column;
	grid-gap: 0.5rem 1rem;
}
.attr > .label {
	grid-column: labels;
	grid-row: auto;
	line-height: 100%;
	background: yellow;
}
.attr > .value {
	grid-column: value;
	grid-row: auto;
	line-height: 100%;
	background: #ccc;
}
.attr > .tes {
	grid-column: tes;
	grid-row: auto;
	line-height: 100%;
	background: blue;
}
.prim {
	border: 1px solid var(--my-border-color);
	background: #eee;
	margin-top: 1rem;
	&::before {
		content: 'Примечание: ';
		font-weight: bold;
		padding-left: 1rem;
	}
}
</style>
