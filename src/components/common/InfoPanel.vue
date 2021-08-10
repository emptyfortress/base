<template lang="pug">
.relative-position
	q-expansion-item(v-model='panels.info' switch-toggle-side label="Информация")
		q-card
			q-card-section Детальный план ввода в эксплуатацию автоматизированной информационной системы государственного заказа Санкт-Петербурга на периода март-май 2020 г.
			q-card-section.q-pt-none
				.attr
					.attribute(v-for='attribute in attributes' :key="attribute.id")
						.label {{ attribute.label }}:
						.value
							div(v-for='el in attribute.value').q-mr-sm {{ el }}


	.actionBt
		q-btn(round flat dense icon="mdi-unfold-more-horizontal" @click="$emit('toggle')")
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'
import { onMounted } from 'vue'
import { setMinWidth } from '@/utils/utils'

export default {
	props: ['panels'],
	emits: ['toggle'],
	components: {
		SvgIcon,
	},
	setup() {
		onMounted(() => {
			setMinWidth('.label')
			setMinWidth('.value')
		})

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
.attr {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	justify-content: flex-start;
	gap: 0 1rem;
}
.attribute {
	display: flex;
	align-items: flex-start;
	gap: 10px;
	padding-bottom: 10px;
	/* margin-bottom: 10px; */
	line-height: 100%;
	/* flex-basis: calc(calc(280px - 100%) * 999); */
	/* flex-grow: 0; */
	border-right: 1px dotted var(--my-border-color);
	/* padding: 10px 0; */
	.label {
		white-space: nowrap;
		opacity: 0.8;
		/* background: yellow; */
	}
	.value {
		/* background: green; */
		white-space: normal;
		/* padding-right: 1rem; */
	}
}
</style>
