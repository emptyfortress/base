<template lang="pug">
.zg Предпросмотр результатов
//- Toolbar
q-table(ref="searchTable"
	:rows="rows"
	:columns="columns"
	row-key="id"
	flat
	binary-state-sort
	:pagination="pagination"
	:hide-pagination="true"
	color="primary"
	:loading="loading"
	)
	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(auto-width :key="props.read").small
			q-th(v-for="col in props.cols" :props="props" :key="col.name") {{ col.label}}
	template(v-slot:body="props")
		q-tr(:props="props" :key="props.row.id")
			q-td(key="read" :class="{ 'unread' : props.row.unread }" @click="toggle(props.row.id)").small
			q-td(v-for="col in props.cols" :key="col.id") {{ props.row[col.name] }}
</template>

<script>
import { reactive } from 'vue'
import Toolbar from '@/components/common/Toolbar.vue'
import { items } from '@/stores/data'

export default {
	components: {
		Toolbar,
	},
	setup() {
		const rows = reactive([...items])
		const pagination = {
			page: 1,
			rowsPerPage: 0,
		}
		const toggle = (e) => {
			const current = rows.find((b) => b.id === e)
			current.unread = !current.unread
		}
		const columns = reactive([
			{
				id: 0,
				name: 'typ',
				label: 'Тип',
				field: 'typ',
				align: 'left',
			},
			{
				id: 1,
				name: 'title',
				label: 'Название',
				align: 'left',
			},
		])
		return {
			rows,
			columns,
			pagination,
			toggle,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.zg {
	font-size: 1rem;
	font-weight: bold;
}
.small {
	min-width: 4px;
	padding: 0;
	cursor: pointer;
}
td.small {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAAXNSR0IArs4c6QAAABpJREFUGFdjZEACjCD2jh07/nt4eDCCOTAAAEsRBAT/WuYQAAAAAElFTkSuQmCC);
	&.unread {
		background-color: var(--q-primary);
	}
}
</style>
