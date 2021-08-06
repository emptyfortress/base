<template lang="pug">
.zag Последние карточки
	.group
		q-btn(flat )
			SvgIcon(name="1-line" color="grey" )
		q-btn(outline color="primary")
			SvgIcon(name="2-line" color="grey" )
SimpleTable
	thead
		th.small
		th(v-for="head in headers") {{ head.title }}
	tbody
		//- tr(v-for="item in items").new.link
		tr(v-for="item in items" :class="{ 'new' : item.unread }").link
			td.small
			td {{ item.title }}
			td {{ item.created }}
			td {{ item.changed }}
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'
import SimpleTable from '@/components/common/SimpleTable.vue'

export default {
	components: { SvgIcon, SimpleTable },
	data() {
		return {
			headers: [
				{ id: 0, title: 'Название' },
				{ id: 1, title: 'Создан' },
				{ id: 2, title: 'Дата изменения' },
			],
			items: [
				{id: 0, unread: true, title: 'Об эксплуатации автоматизированной информационной системы государственного заказа Санкт-Петербурга', created: '20.08.2021', changed: '22.08.2021' },
				{id: 1, unread: true, title: 'О вводе в действие Перечня товаров, работ, услуг закупки которых осуществляются только у субъектов малого и среднего предпринимательства', created: '20.08.2021', changed: '22.08.2021' },
				{id: 2, title: 'О согласовании финансового плана Автобазы на 2019 год', created: '20.08.2021', changed: '22.08.2021' },
				{id: 3, title: 'Протокол совещания по вопросу выполнения третьей очереди работ по созданию ГИС СПб 27.09.2018 № ***', created: '20.08.2021', changed: '22.08.2021' },
				{id: 4, title: 'О восстановлении работоспособности системы подогрева приточной вентиляции', created: '20.08.2021', changed: '22.08.2021' },
				{id: 5, title: 'О вызове представителя', created: '20.08.2021', changed: '22.08.2021' },
			]
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.zag {
	color: var(--q-link);
	fill: var(--q-link);
	font-size: 1.1rem;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 0.5rem;
}
.group {
	.q-btn {
		padding: 0 3px;
		min-height: 32px;
	}
	svg.icon {
		margin-right: 0;
		width: 2rem;
		height: 2rem;
	}
}
</style>
