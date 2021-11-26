<template lang="pug">
.zg Предпросмотр результатов
//- Toolbar
q-table(ref="searchTable"
	:rows="rows"
	:columns="colns"
	row-key="id"
	flat
	binary-state-sort
	:pagination="pagination"
	:hide-pagination="true"
	color="primary"
	v-if="columns.length"
	)
	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(auto-width :key="props.read").small
			q-th(v-for="col in props.cols" :props="props" :key="col.name") {{ col.label}}
	template(v-slot:body="props")
		q-tr(:props="props" :key="props.row.id")
			q-td(key="read" :class="{ 'unread' : props.row.unread }" @click="toggle(props.row.id)").small
			q-td(v-for="col in props.cols" :key="col.id") {{ props.row[col.name] }}
.nodata(v-else)
	q-icon(name="mdi-nut")
	div Чтобы увидеть результаты - настройте критерии поиска и задайте хотя бы одну колонку в настройках представления.
</template>

<script>
import { reactive } from 'vue'
import Toolbar from '@/components/common/Toolbar.vue'
import { items } from '@/stores/data'

export default {
	props: {
		columns: Array,
	},
	components: {
		Toolbar,
	},
	setup(props) {
		const rows = reactive([...items])
		const colns = reactive(props.columns)
		const pagination = {
			page: 1,
			rowsPerPage: 0,
		}
		const toggle = (e) => {
			const current = rows.find((b) => b.id === e)
			current.unread = !current.unread
		}

		return {
			rows,
			pagination,
			toggle,
			colns,
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
.nodata {
	width: 50%;
	margin: 1rem auto;
	text-align: center;
	font-size: 1rem;
}
td {
	white-space: normal;
}
</style>
