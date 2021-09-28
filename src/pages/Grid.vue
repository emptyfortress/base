<template lang="pug">
.container
	.zag Входящие
	.gridtotal(:class="{ full : grid.fullscreen }")
		.sidebar(v-show="grid.sidebar")
			Aggregates(:data="aggregateData")
		.main(:class="{ 'fill' : !grid.sidebar }")
			GridTable(v-if="!grid.lenta" :columns="columns" :colData="colData" :rows="filteredRows" :total="items.length" :shown="filteredRows.length" )
			.rel(v-else)
				Toolbar(:total="items.length" :lenta="grid.lenta" :shown="filteredRows.length" @readAll="readAll" @toggleLoad="loading = !loading" @selNone="selectNone" @selAll="selectAll")
				Lenta(:items="filteredRows" :total="items.length" :loading="loading")
				.total(v-show="grid.selected != 0")
					Total(:selected="selected.length" @clear="clearSelected")

</template>

<script>
import { ref, computed, provide } from 'vue'
import { useGrid } from '@/stores/grid'
import { items } from '@/stores/data'
import GridTable from '@/components/common/GridTable.vue'
import Toolbar from '@/components/common/Toolbar.vue'
import Aggregates from '@/components/common/Aggregates.vue'
import Lenta from '@/components/common/Lenta.vue'
import Total from '@/components/common/Total.vue'

export default {
	components: {
		GridTable,
		Toolbar,
		Aggregates,
		Lenta,
		Total,
	},
	setup() {
		const grid = useGrid()
		grid.items = [...items]
		const rows = grid.items
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

		const selected = computed( () => {
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

		return {
			// reset,
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
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.main {
	/* height: calc(100vh - 300px); */
	/* overflow: auto; */
}

.gridtotal {
	display: grid;
	grid-template-columns: 260px auto;
	grid-gap: 0rem 0.5rem;
	background: var(--main-bg);
	&.full {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 6000;
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
	background: #e5e5e5;
	transition: 0.3s ease all;
	box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
	body.body--dark & {
		background: var(--my-color-step-150);
	}
 }
</style>
