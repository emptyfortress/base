<template lang="pug">
.grid
	q-table(ref="itemTable"
		:rows="rows"
		:columns="columns"
		row-key="id"
		:pagination="pagination"
		hide-bottom flat
		selection="multiple"
		v-model:selected="selected"
		).fixhd
		template(v-slot:header="props")
			q-tr(:props="props")
				q-th(auto-width :key="props.read").small
				q-th(auto-width)
					q-checkbox(v-model="props.selected")
				q-th(v-for="col in props.cols" :props="props" :key="col.name").hov {{ col.label }}
					.sort
						q-btn(v-if="col.sortable" dense flat round @click.stop="mysort(col.name, $event)")
							q-icon(name="mdi-arrow-down")
						q-btn(dense flat round icon="mdi-filter-outline")
		template(v-slot:body="props")
			q-tr(:props="props" :key="props.row.id" :class="{ 'bold' : props.row.unread }")
				q-td(key="read" :class="{ 'unread' : props.row.unread }" @click="toggle(props.row.id)").small
				q-td(auto-width)
					q-checkbox(v-model="props.selected")
				q-td(v-for="col in props.cols" :key="col.name") {{ props.row[col.name] }}

</template>

<script>
import { ref, reactive } from 'vue'
export default {
	setup() {
		const pagination = {
			rowsPerPage: 0,
		}

		const selected = ref([])
		const itemTable = ref(null)

		const toggle = (e) => {
			console.log(e)
			const current = rows.find((b) => b.id === e)
			console.log(current)
			current.unread = !current.unread
		}

		const mysort = (e, event) => {
			itemTable.value.sort(e)
			let classes = event.target.classList
			if (classes.length === 3) {
				classes.add('up')
			} else if (classes.length === 4) {
				classes.add('down')
			} else if (classes.length === 5) {
				classes.remove('up')
				classes.remove('down')
			} 
		}

		const columns = [
			{
				name: 'one',
				label: 'Первый',
				field: 'one',
				align: 'left',
				sortable: false,
			},
			{
				name: 'two',
				label: 'Второй',
				field: 'two',
				align: 'left',
				sortable: true,
			},
			{
				name: 'three',
				label: 'Третий',
				field: 'three',
				align: 'left',
				sortable: true,
			},
		]

		const rows = reactive([
			{ id: 0, unread: false, one: 'fuuuu', two: 0, three: 0 },
			{ id: 1, unread: true, one: 'fuuuu', two: 1, three: 34 },
			{ id: 2, unread: false, one: 'fuuuu', two: 2, three: 34 },
			{ id: 3, unread: false, one: 'fuuuu', two: 3, three: 34 },
			{ id: 4, unread: false, one: 'fuuuu', two: 4, three: 34 },
			{ id: 5, unread: false, one: 'fuuuu', two: 5, three: 34 },
			{ id: 6, unread: false, one: 'fuuuu', two: 6, three: 38 },
			{ id: 7, unread: false, one: 'fuuuu', two: 7, three: 34 },
			{ id: 8, unread: false, one: 'fuuuu', two: 8, three: 34 },
			{ id: 9, unread: false, one: 'fuuuu', two: 9, three: 34 },
		])

		return {
			columns,
			rows,
			pagination,
			selected,
			toggle,
			mysort,
			itemTable,
		}
	},
}
</script>

<style scoped lang="scss">
.full .fixhd {
	height: 100vh;
}
.q-table.fixhd th {
	padding: 4px !important;
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
.q-table tbody td:after {
	background: var(--q-primary-lighten-1);
	opacity: 0.15;
}
.bold {
	font-weight: bold;
	color: var(--text-color-bright);
}
.hov {
	position: relative;
	.sort {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		display: none;
		.q-icon {
			transition: .3s ease all;
			&.up {
				transform: rotate(180deg);
			}
			&.down {
				transform: rotate(0deg);
			}
		}
	}
	&:hover {
		.sort {
			display: flex;
			z-index: 2;
			justify-content: flex-end;
			align-items: center;
			padding-right: 3px;
		}
	}
}
</style>
