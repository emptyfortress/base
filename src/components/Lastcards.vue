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
			td(@click="item.unread = !item.unread").small
			td {{ item.title }}
			td {{ item.created }}
			td {{ item.changed }}
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'
import SimpleTable from '@/components/common/SimpleTable.vue'
import items from '@/stores/dataHome'

export default {
	components: { SvgIcon, SimpleTable },
	data() {
		return {
			headers: [
				{ id: 0, title: 'Название' },
				{ id: 1, title: 'Создан' },
				{ id: 2, title: 'Дата изменения' },
			],
			items: items
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
