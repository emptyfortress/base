<template lang="pug">
.container
	.zag Входящие
	.gridtotal(:class="{ full : grid.fullscreen }")
		.sidebar(v-show="grid.sidebar")
			Aggregates(:data="aggregateData")
		.main(:class="{ 'fill' : !grid.sidebar }").shadow-1
			GridTable(v-if="!grid.lenta" :columns="columns" :colData="colData" :rows="filteredRows" :total="items.length" :shown="filteredRows.length" )
			div(v-else)
				Toolbar(:total="items.length" :shown="shown" @readAll="readAll")
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			
	
</template>

<script>
import {computed } from 'vue'
import { useGrid } from '@/stores/grid'
import { items } from '@/stores/data'
import GridTable from '@/components/common/GridTable.vue'
import Toolbar from '@/components/common/Toolbar.vue'
import Aggregates from '@/components/common/Aggregates.vue'

export default {
	components: {
		GridTable,
		Toolbar,
		Aggregates,
	},
	setup() {
		const grid = useGrid()
		grid.items = [...items]
		const rows = grid.items

		const filteredRows = computed( () => {
			if (grid.checked.length) {

				let filter = {}
				let temp = Object.values(grid.checked)
				for (let el of temp) {
					filter[el.col] = el.items
				}

				console.log(filter)

				return rows.filter( item => {
					for (let [key, value] of Object.entries(filter)) {
						const cool = (element) => element === item[key]
						if (item[key] === undefined) 
							return false
						if (!value.some(cool))
							return false
					}
					return true
				})
			}
			return rows
		})

		const colData = (col) => {
			return [...new Set(filteredRows.value.map( item => item[col.name] ))]
		}

		const aggregateData = computed( () => {
			let agg = []
			const iteration = [ 'typ', 'vid', 'status', 'author' ]
			iteration.forEach( it => {
				const block = [...new Set(filteredRows.value.map( item => item[it] ))]
				const blockname = ( (it) => {
					switch (it) {
						case 'typ': return 'Тип карточки'
						case 'vid': return 'Вид документа'
						case 'author': return 'Автор'
						case 'status': return 'Состояние'
						default: return 'Остальное'
					}
				} )

				const list = block.map( el => {
					const length = filteredRows.value.filter( item => item[it] === el ).length
					return {
						title: el,
						value: false,
						badge: length
					}
				})

				list.sort( (a,b) => b.badge - a.badge )
				const list1 = list.filter( item => item.title !== undefined )

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
			{ id: 0, name: 'typ', label: 'Тип', field: 'typ', align: 'left', sortable: true, },
			{ id: 1, name: 'title', label: 'Название', field: 'title', align: 'left', sortable: true, },
			{ id: 2, name: 'author', label: 'Автор', field: 'author', align: 'left', sortable: true, },
			{ id: 3, name: 'changed', label: 'Изменено', field: 'changed', align: 'left', sortable: true, datum: true },
		]

		return {
			colData,
			grid,
			columns,
			rows,
			items,
			filteredRows,
			aggregateData,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

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
</style>
