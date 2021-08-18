<template lang="pug">
.grid
	q-table(ref="itemTable"
		:rows="rows"
		:columns="columns"
		row-key="id"
		:pagination="pagination"
		flat
		:hide-pagination="true"
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
		template(v-slot:top)
			Toolbar(:total="rows.length" @readAll="readAll")
		template(v-slot:bottom v-if="selected.length")
			Total(:selected="selected.length" @clear="clearSelected")

</template>

<script>
import { ref } from 'vue'
import Toolbar from '@/components/common/Toolbar.vue'
import Total from '@/components/common/Total.vue'

export default {
	components: {
		Toolbar,
		Total,
	},
	props: {
		columns: Array,
		rows: Array
	},
	setup(props) {
		const pagination = {
			page: 1,
			rowsPerPage: 0,
		}

		const total = ref(null)
		const selected = ref([])
		const itemTable = ref(null)

		const toggle = (e) => {
			const current = props.rows.find((b) => b.id === e)
			current.unread = !current.unread
		}
		const clearSelected = () => {
			selected.value = []
		}
		const readAll = () => {
			props.rows.map( (row) => row.unread = false )
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


		return {
			pagination,
			selected,
			toggle,
			mysort,
			itemTable,
			total,
			clearSelected,
			readAll,
		}
	},
}
</script>

<style scoped lang="scss">
.full .fixhd {
	height: calc(100vh - 42px);
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
