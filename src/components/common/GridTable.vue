<template lang="pug">
.grid
	q-table(ref="itemTable"
		:rows="rows"
		:columns="columns"
		row-key="id"
		:pagination="pagination"
		flat
		binary-state-sort
		:hide-pagination="true"
		selection="multiple"
		color="primary"
		:loading="loading"
		v-model:selected="selected"
		).fixhd
		template(v-slot:header="props")
			q-tr(:props="props" v-click-away="toggleFilter")
				q-th(auto-width :key="props.read").small
				q-th(auto-width)
					q-checkbox(v-model="props.selected")
				q-th(v-for="col in props.cols" :props="props" :key="col.name").hov {{ col.label }}
					.sort(@click.stop)
						q-btn(v-if="col.sortable" dense flat round @click.stop="mysort(col.name, $event)")
							q-icon(name="mdi-arrow-down")
						q-btn(dense flat round icon="mdi-filter-outline" @click.stop="toggleFilter(col.id)")
					
					transition(name="slide-top")
						Filter(:filterByIndex="filterByIndex" :col="col" @close="filterByIndex = null" :data="colData(col)" :datum="col.datum")

		template(v-slot:loading)
			.ld
				q-linear-progress(indeterminate)
		template(v-slot:body="props")
			q-tr(:props="props" :key="props.row.id" :class="{ 'bold' : props.row.unread }")
				q-td(key="read" :class="{ 'unread' : props.row.unread }" @click="toggle(props.row.id)").small
				q-td(auto-width)
					q-checkbox(v-model="props.selected")
				q-td(v-for="col in props.cols" :key="col.name") {{ props.row[col.name] }}
		template(v-slot:top)
			Toolbar(:total="rows.length" :shown="shown" @readAll="readAll" @toggleLoad="loading = !loading")
		template(v-slot:bottom v-if="selected.length")
			Total(:selected="selected.length" @clear="clearSelected")

</template>

<script>
import { ref } from 'vue'
import Toolbar from '@/components/common/Toolbar.vue'
import Total from '@/components/common/Total.vue'
import Filter from '@/components/common/Filter.vue'

export default {
	components: {
		Toolbar,
		Total,
		Filter,
	},
	props: {
		columns: Array,
		rows: Array,
		shown: Number,
	},
	setup(props) {
		const pagination = {
			page: 1,
			rowsPerPage: 0,
		}

		const total = ref(null)
		const selected = ref([])
		const itemTable = ref(null)
		const loading = ref(false)

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

		const colData = (col) => {
			return [...new Set(props.rows.map( item => item[col.name] ))]
		}

		const mysort = (e, event) => {
			itemTable.value.sort(e)
			let classes = event.target.classList
			classes.toggle('up')
		}

		const filterByIndex = ref(null)

		const toggleFilter = (e) => {
			filterByIndex.value === e ? filterByIndex.value = null : filterByIndex.value = e
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
			loading,
			filterByIndex,
			toggleFilter,
			colData,
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
	position: sticky;
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
.ld {
	position: absolute;
	top: 76px;
	width: 100%;
	left: 0;
	height: 3px;
	z-index: 2;
}
</style>
