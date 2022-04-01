<template lang="pug">
.container
	.zag Входящие
	.gridtotal(:class="{ full : grid.fullscreen }")
		.sidebar(v-if="grid.sidebar").gt-sm
			Aggregates(:data="aggregateData")
		.main(:class="{ 'fill' : !grid.sidebar }")
			GridTable(v-if="!grid.lenta" :columns="columns" usefilter :colData="colData" :rows="filteredRows" :total="items.length" :shown="filteredRows.length" toolbar @sort="sort")
			.rel(v-else)
				Toolbar(:total="items.length" :lenta="grid.lenta" :shown="filteredRows.length" @readAll="readAll" @toggleLoad="loading = !loading" @selNone="selectNone" @selAll="selectAll")
				Lenta(:items="filteredRows" :total="items.length" :loading="loading")

q-dialog(v-model="showTotal" full-width seamless position="bottom").sm
	TotalMob(:selected="selected.length" @clear="clearSelected")
q-dialog(v-model="showTotal" full-width seamless position="bottom").xs
	TotalMob1(:selected="selected.length" @clear="clearSelected")
AggDrawer(:show="grid.aggregat")

</template>

<script>
import { ref, reactive, computed, provide, watchEffect } from 'vue'
import { useGrid } from '@/stores/grid'
import { items } from '@/stores/data'
import GridTable from '@/components/common/GridTable.vue'
import Toolbar from '@/components/common/Toolbar.vue'
import Aggregates from '@/components/common/Aggregates.vue'
import Lenta from '@/components/common/Lenta.vue'
import Total from '@/components/common/Total.vue'
import TotalMob from '@/components/common/TotalMob.vue'
import TotalMob1 from '@/components/common/TotalMob1.vue'
import AggDrawer from '@/components/common/AggDrawer.vue'

export default {
	components: {
		GridTable,
		Toolbar,
		Aggregates,
		Lenta,
		Total,
		TotalMob,
		TotalMob1,
		AggDrawer,
	},
	setup() {
		const grid = useGrid()
		grid.items = [...items]
		const rows = reactive(items)
		const loading = ref(false)

		const filteredRows = computed(() => {
			if (grid.checked.length) {
				let filter = {}
				let temp = Object.values(grid.checked)
				for (let el of temp) {
					filter[el.col] = el.items
				}

				return rows.filter((item) => {
					for (let [key, value] of Object.entries(filter)) {
						const cool = (element) => element === item[key]
						if (item[key] === undefined) return false
						if (!value.some(cool)) return false
					}
					return true
				})
			}
			return rows
		})

		provide('filteredRows', filteredRows)

		const selected = computed(() => {
			return filteredRows.value.filter((item) => item.selected === true)
		})

		const colData = (col) => {
			return [...new Set(filteredRows.value.map((item) => item[col.name]))]
		}

		const aggregateData = computed(() => {
			let agg = []
			const iteration = ['typ', 'vid', 'status', 'author']
			iteration.forEach((it) => {
				const block = [...new Set(filteredRows.value.map((item) => item[it]))]
				const blockname = (it) => {
					switch (it) {
						case 'typ':
							return 'Тип карточки'
						case 'vid':
							return 'Вид документа'
						case 'author':
							return 'Автор'
						case 'status':
							return 'Состояние'
						default:
							return 'Остальное'
					}
				}

				const list = block.map((el) => {
					const length = items.filter((item) => item[it] === el).length
					return {
						title: el,
						value: false,
						badge: length,
					}
				})

				list.sort((a, b) => b.badge - a.badge)
				const list1 = list.filter((item) => item.title !== undefined)

				const blocks = {}
				blocks.col = it
				blocks.name = blockname(it)
				blocks.model = true
				blocks.list = list1

				agg.push(blocks)
			})

			return agg
		})

		provide('aggregateData', aggregateData)

		const columns = [
			{
				id: 0,
				name: 'typ',
				label: 'Тип',
				field: 'typ',
				align: 'left',
				sortable: true,
			},
			{
				id: 1,
				name: 'title',
				label: 'Название',
				field: 'title',
				align: 'left',
				sortable: true,
			},
			{
				id: 2,
				name: 'author',
				label: 'Автор',
				field: 'author',
				align: 'left',
				sortable: true,
			},
			{
				id: 3,
				name: 'changed',
				label: 'Изменено',
				field: 'changed',
				align: 'left',
				sortable: true,
				datum: true,
			},
		]

		const readAll = () => {
			filteredRows.value.map((row) => (row.unread = false))
		}

		const selectNone = () => {
			filteredRows.value.map((row) => (row.selected = false))
		}
		const selectAll = () => {
			filteredRows.value.map((row) => (row.selected = true))
		}
		const clearSelected = () => {
			filteredRows.value.map((item) => (item.selected = false))
			grid.selected = false
		}

		const showTotal = computed(() => {
			return grid.selected != 0
		})

		const fullwidth = ref(false)

		watchEffect(() => {
			if (window.innerWidth < 1024) {
				grid.sidebar = false
			} else return false
		})

		const sorted = ref(false)
		const sort = () => {
			function compare(a, b) {
				if (a.unread < b.unread) {
					return 1
				}
				if (a.unread > b.unread) {
					return -1
				}
				return 0
			}
			if (!sorted.value) {
				rows.sort(compare)
				sorted.value = !sorted.value
			} else {
				rows.reverse()
				sorted.value = !sorted.value
			}
		}
		return {
			showTotal,
			fullwidth,
			colData,
			grid,
			columns,
			rows,
			items,
			filteredRows,
			aggregateData,
			readAll,
			selectNone,
			selectAll,
			selected,
			clearSelected,
			loading,
			sort,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.main {
	position: relative;
	overflow: hidden;
}

.gridtotal {
	display: grid;
	grid-template-columns: 260px auto;
	grid-gap: 0rem 0.5rem;
	background: var(--main-bg);
	@media screen and (max-width: 1023px) {
		grid-template-columns: 1fr;
	}
	&.full {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 3000;
	}
}
.sidebar {
	background: var(--bg-card);
}
.fill {
	grid-column: 1/3;
}
.rel {
	position: relative;
	overflow: hidden;
}
.total {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	border-radius: 12px 12px 0px 0px;
	border-top: 3px solid var(--q-primary);
	background: #e5e5e5;
	transition: 0.3s ease all;
	box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
	body.body--dark & {
		background: var(--my-color-step-150);
	}
	@media screen and (max-width: 1023px) {
		display: none;
	}
}
.dia {
	background: #e5e5e5;
	box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
	body.body--dark & {
		background: var(--my-color-step-150);
	}
}

.temp {
	width: 220px;
	height: 100px;
	background: red;
}
</style>
