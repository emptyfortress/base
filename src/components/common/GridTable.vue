<template lang="pug">
.grid
	q-table(ref="itemTable"
		id="table"
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
		).fixhd
		template(v-slot:header="props")
			q-tr(:props="props" v-click-away="toggleFilter")
				q-th(auto-width :key="props.read").small
				q-th(auto-width)
					q-checkbox(:model-value="all" @update:model-value="toggleSel")
				q-th(v-for="col in props.cols" :props="props" :key="col.name").hov
					span {{ col.label }}
					q-icon(name="mdi-filter" color="negative" v-if="showFilt(col)" @click.stop="clearFilter(col)").filt
					q-icon(name="mdi-filter-outline" @click.stop="toggleFilter(col.id)" v-if="!showFilt(col)").sort
					.resizer

					//- .sort(@click.stop)
					//- 	q-btn(unelevated dense round size="xs" icon="mdi-filter-outline" @click.stop="toggleFilter(col.id)" v-if="!showFilt(col)")

					transition(name="slide-top")
						Filter(:filterByIndex="filterByIndex" :col="col" @close="filterByIndex = null" :data="colData(col)" :datum="col.datum")

		template(v-slot:loading)
			.ld
				q-linear-progress(indeterminate)
		template(v-slot:body="props")
			q-tr(:props="props" :key="props.row.id" :class="rowClass(props.row)")
				q-td(key="read" :class="{ 'unread' : props.row.unread }" @click="toggle(props.row.id)").small
				q-td(auto-width)
					q-checkbox(v-model="props.row.selected" :val="props.row.id")
				q-td(v-for="col in props.cols" :key="col.name") {{ props.row[col.name] }}
		template(v-slot:top).gt-sm
			Toolbar(:total="total" :shown="shown" @readAll="readAll" @toggleLoad="loading = !loading")
		//- template(v-slot:bottom v-if="selected.length")
		//- 	Total(:selected="selected.length" @clear="clearSelected")
	//- q-dialog(v-model="showTotal" seamless position="bottom")
		q-card
			q-linear-progress(:value="1" color="primary")
			q-card-section(class="row items-center no-wrap")
				div
					div(class="text-weight-bold") The Walker
					div(class="text-grey") Fitz & The Tantrums
				q-space
				q-btn(flat round icon="mdi-play")
				q-btn(flat round icon="mdi-pause")
				q-btn(flat round icon="mdi-close" v-close-popup)


</template>

<script>
import { ref, computed, watchEffect } from 'vue'
import Toolbar from '@/components/common/Toolbar.vue'
import Total from '@/components/common/Total.vue'
import Filter from '@/components/common/Filter.vue'
import { useGrid } from '@/stores/grid'

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
		colData: Function,
		total: Number,
	},
	setup(props) {
		const pagination = {
			page: 1,
			rowsPerPage: 0,
		}

		const grid = useGrid()

		// const total = ref(null)
		const all = ref(false)
		const selected = computed(() => {
			return props.rows.filter((item) => item.selected)
		})

		const itemTable = ref(null)
		const loading = ref(false)

		watchEffect(() => {
			if (selected.value.length === 0) {
				all.value = false
				grid.selected = false
			} else if (selected.value.length < props.rows.length) {
				all.value = null
				grid.selected = null
			} else if (selected.value.length === props.rows.length) {
				all.value = true
				grid.selected = true
			}
		})

		const toggleSel = () => {
			if (all.value === true) {
				props.rows.map((item) => (item.selected = false))
				all.value = false
			} else {
				props.rows.map((item) => (item.selected = true))
				all.value = true
			}
		}

		const toggle = (e) => {
			const current = props.rows.find((b) => b.id === e)
			current.unread = !current.unread
		}
		const clearSelected = () => {
			props.rows.map((item) => (item.selected = false))
			all.value = false
		}

		const readAll = () => {
			props.rows.map((row) => (row.unread = false))
		}

		const mysort = (e, event) => {
			itemTable.value.sort(e)
			let classes = event.target.classList
			classes.toggle('up')
		}

		const filterByIndex = ref(null)

		const toggleFilter = (e) => {
			filterByIndex.value === e
				? (filterByIndex.value = null)
				: (filterByIndex.value = e)
		}
		const clearFilter = (col) => {
			grid.clearCheckedColumn(col)
		}
		const showFilt = (col) => {
			if (grid.checked.length) {
				let ids = grid.checked.map((item) => item.id)
				let id = (el) => el === col.id
				return ids.some(id)
			}
			return false
		}

		const rowClass = (row) => {
			if (row.unread && row.selected) return 'both'
			else if (row.selected) return 'bg-primary-selection'
			else if (row.unread) return 'bold'
			else return ''
		}

		const showTotal = computed(() => {
			if (grid.selected != 0) return true
			else return false
		})

		return {
			showTotal,
			rowClass,
			pagination,
			all,
			selected,
			toggleSel,
			toggle,
			mysort,
			itemTable,
			clearSelected,
			readAll,
			loading,
			filterByIndex,
			clearFilter,
			toggleFilter,
			showFilt,
			props,
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
.bold {
	font-weight: bold;
	color: var(--text-color-bright);
}

.both {
	font-weight: bold;
	color: var(--text-color-bright);
	background: var(--q-primary-selection);
}
.hov {
	position: sticky;
	.filt {
		position: absolute;
		right: 12px;
		top: 50%;
		transform: translateY(-50%);
	}
	.sort {
		position: absolute;
		right: 12px;
		top: 50%;
		transform: translateY(-50%);
		display: none;
		body.body--dark & {
			background: var(--bg-dark);
		}
		.q-btn:first-child {
			margin-right: 7px;
		}
		.q-icon {
			transition: 0.3s ease all;
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
	.resizer {
		position: absolute;
		top: 0;
		right: 0;
		width: 8px;
		cursor: col-resize;
		user-select: none;
		&:hover,
		.resizing {
			background: var(--q-primary);
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
/* .test-enter-active, .test-leave-active { */
/* 	transition: all 0.3s ease; */
/* } */
/* .test-enter-from, .test-leave-to { */
/* 	opacity: 0; */
/* 	transform: translateX(30px); */
/* } */
/* .test-move { */
/* 	transition: transform .4s ease; */
/* } */
.list-complete-enter-from,
.list-complete-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

.list-complete-leave-active {
	position: absolute;
}
</style>
