<template lang="pug">
.zag
	span Последние карточки
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
		tr
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
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.q-table tbody td {
	font-size: 0.9rem;
	position: relative;
	color: var(--text-color);
}
thead {
	background-color: #0000001a;
	th {
		font-size: 0.7rem;
		text-align: left;
		border: 1px solid #fff;
		border-right: none;
	}
	th:first-child {
		border-right: none;
	}
	th:nth-child(2) {
		border-left: none;
	}
	th:last-child {
		border-right: 1px solid #fff;
	}
}

.zag {
	color: var(--q-link);
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
.small {
	margin: 0;
	padding: 0;
	width: 5px;
}
td.small {
	background: red;
	cursor: pointer;
}
</style>
