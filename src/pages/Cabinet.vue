<template lang="pug">
q-page(padding)
	.row.justify-between.items-center
		.flex.items-center
			q-avatar(size="80px" color="deep-purple-3").q-mr-md
				img(src="@/assets/img/users/user0.svg")
			.zag Орлов Петр Иванович
		.overline Таб.№ 0002l34-m&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Водитель
	.mygrid
		.blo.money
			.hd
				|Зарплата
				span октябрь 2022
					q-menu
						q-list
							q-item(clickable v-close-popup)
								q-item-section laskj
			component(:is="SvgIcon" name="money" @click.stop="toggleMoney").mon
			.tb(:class="{ blur : money}")
				.text-bold Начислено:
				.text-bold.text-right 75,000.45
				q-separator
				div Оплата по окладу:
				.text-right 50,000.00
				div Отпуск основной:
				.text-right 20,000.00
				.text-bold Удержано:
				.text-bold.text-right 12,129.15
				div НДФЛ:
				.text-right 12,129.15
				q-separator
				.text-bold Наличные
				.text-bold.text-right 63,452.34

		.blo
			div
				.hd Отпуск
					q-badge(align="top") 1
				component(:is="SvgIcon" name="beach" style="font-size:1.5rem; top:4px; right: 2px").mon
				.q-mt-md 😀 Очередной отпуск через 23 дня.
				.tb
					q-separator
					div 12.08.22 - 24.08.22
					.text-right отгулял
					div 04.12.22 - 24.12.22
					.text-right план
					q-separator
					div Отгулы
					.text-right 3
			.buttons
				q-btn(dense flat color="primary" size="12px").q-mr-md График
				q-btn(dense flat color="primary" size="12px").q-mr-md Заявление на отпуск
				q-btn(dense flat color="primary" size="12px") Взять отгул
		.blo
			div
				.hd Больничные листы
				component(:is="SvgIcon" name="crest" style="font-size:1.4rem; top:9px; right:2px").mon
				.q-mt-md Нет больничных.
			.buttons
				q-btn(dense flat color="primary" size="12px").q-mr-md Сообщить о болезни
		.blo
			.hd Командировки
			component(:is="SvgIcon" name="plane" style="font-size:2.7rem; top: -10px").mon
			.buttons
				q-btn(dense flat color="primary" size="12px").q-mr-md Оформить командировку
				q-btn(dense flat color="primary" size="12px") Сдать отчет
		.blo
			.hd Справки
			component(:is="SvgIcon" name="zayav" style="font-size:1.3rem;top: 8px" ).mon
			.buttons
				q-btn(dense flat color="primary" size="12px").q-mr-md Справка о доходах
				q-btn(dense flat color="primary" size="12px") форма 3-НДФЛ
		.blo
			.hd Замещения
			component(:is="SvgIcon" name="zamest" style="font-size:1.3rem;top: 8px; right: 5px" ).mon
			.buttons
				q-btn(dense flat color="primary" size="12px").q-mr-md Назначить заместителя
				q-btn(dense flat color="primary" size="12px") Я - заместитель
		.blo.full
			.hd Документы
				q-badge(align="top") 3
			component(:is="SvgIcon" name="docs" style="font-size:1.3rem;top: 8px" ).mon

</template>

<script setup>
import { ref, reactive } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

const money = ref(false)
const toggleMoney = () => {
	money.value = !money.value
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.text-overline {
	line-height: 100%;
}
.mygrid {
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.5rem;
	.blo {
		background: #fff;
		min-height: 90px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 4px;
		border: 1px solid transparent;
		cursor: pointer;
		position: relative;
		&.money {
			padding-bottom: 1rem;
			display: block;
		}
		&.full {
			grid-column: 1/-1;
		}
		&:hover {
			border: 1px solid var(--q-primary);
		}
		.buttons {
			margin-top: 1rem;
		}
	}
	.hd {
		position: relative;
		font-size: 1.2rem;
		color: var(--text-color);
		span {
			margin-left: 1rem;
			font-size: 0.8rem;
			color: var(--q-link);
		}
	}
}
.tb {
	margin-top: 1rem;
	display: grid;
	grid-template-columns: auto 1fr;
	column-gap: 1rem;
	transition: 0.2s ease all;
	.q-separator {
		grid-column: 1/-1;
	}
	&.blur {
		filter: blur(7px);
	}
}
@media screen and (max-width: 900px) {
	.mygrid {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media screen and (max-width: 680px) {
	.mygrid {
		grid-template-columns: repeat(1, 1fr);
	}
}

.search {
	width: 350px;
	font-size: 1.1rem;
	margin-bottom: 1rem;
	:deep(.q-field--prepend),
	:deep(.q-field--append) {
		transform: translateY(5px);
	}
}
.overline {
	font-size: 1rem;
	letter-spacing: 1px;
}
.mon {
	position: absolute;
	top: 0;
	right: -5px;
	font-size: 1.8rem;
	fill: #888;
}
</style>
