<template lang="pug">
.container
	.zag Входящие
	.gridtotal(:class="{ full : grid.fullscreen }")
		.sidebar(v-show="grid.sidebar") sidebar
		.main(:class="{ 'fill' : !grid.sidebar }").shadow-1
			GridTable(v-if="!grid.lenta" :columns="columns" :rows="rows" :shown="shown" )
			div(v-else)
				Toolbar(:total="rows.length" :shown="shown" @readAll="readAll")
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			
	
</template>

<script>
import { ref, reactive } from 'vue'
import { useGrid } from '@/stores/grid'
import { items } from '@/stores/data'
import GridTable from '@/components/common/GridTable.vue'
import Toolbar from '@/components/common/Toolbar.vue'

export default {
	components: {
		GridTable,
		Toolbar,
	},
	setup() {
		const grid = useGrid()
		grid.items = [...items]
		const rows = reactive(grid.items)

		const shown = ref(0)

		const columns = [
			{ id: 0, name: 'typ', label: 'Тип', field: 'typ', align: 'left', sortable: true, },
			{ id: 1, name: 'title', label: 'Название', field: 'title', align: 'left', sortable: true, },
			{ id: 2, name: 'author', label: 'Автор', field: 'author', align: 'left', sortable: true, },
			{ id: 3, name: 'changed', label: 'Изменено', field: 'changed', align: 'left', sortable: true, },
		]

		return {
			grid,
			columns,
			shown,
			rows,
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
.main {
}
.fill {
	grid-column: 1/3;
}
</style>
