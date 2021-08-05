<template lang="pug">
.zag Последние карточки
	.group
		q-btn(outline color="primary")
			svgIcon(name="1-line" color="grey" )
		q-btn(flat)
			svgIcon(name="2-line" color="grey" )
q-markup-table(flat).shadow-1
	thead
		th.small
		th Название
		th Создан
		th Дата изменения
	tbody
		tr.new.link
			td.small
			td laksj
			td laksj
			td laksj
		tr
			td.small
			td laksj
			td laksj
			td laksj
</template>

<script>
import svgIcon from '@/components/svgIcon.vue'

export default {
	components: { svgIcon },
	data() {
		return {}
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
.q-table tbody .link td {
	color: var(--q-link);
	cursor: pointer;
}
</style>
