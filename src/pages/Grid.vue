<template lang="pug">
.container
	.zag Входящие
	.gridtotal(:class="{ full : grid.fullscreen }")
		.sidebar(v-show="grid.sidebar") sidebar
		.main(:class="{ 'fill' : !grid.sidebar }").shadow-1
			GridTable(v-if="grid.view" :columns="columns" :rows="rows")
			div(v-else)
				Toolbar(:total="rows.length" @readAll="readAll")
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			
	
</template>

<script>
import { ref, reactive } from 'vue'
import { useGrid } from '@/stores/grid'
import GridTable from '@/components/common/GridTable.vue'
import Toolbar from '@/components/common/Toolbar.vue'

export default {
	components: {
		GridTable,
		Toolbar,
	},
	setup() {
		const grid = useGrid()
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
			{ id: 0, unread: false, one: 'fuuuu', two: 1, three: 0 },
			{ id: 1, unread: true,  one: 'fuuuu', two: 2, three: 34 },
			{ id: 2, unread: false, one: 'fuuuu', two: 3, three: 34 },
			{ id: 3, unread: false, one: 'fuuuu', two: 4, three: 34 },
			{ id: 4, unread: false, one: 'fuuuu', two: 5, three: 34 },
			{ id: 5, unread: false, one: 'fuuuu', two: 6, three: 34 },
			{ id: 6, unread: false, one: 'fuuuu', two: 7, three: 38 },
			{ id: 7, unread: false, one: 'fuuuu', two: 8, three: 34 },
			{ id: 8, unread: false, one: 'fuuuu', two: 9, three: 34 },
			{ id: 9, unread: false, one: 'fuuuu', two: 10, three: 34 },
			{ id: 10, unread: false, one: 'fuuuu', two: 11, three: 34 },
			{ id: 11, unread: false, one: 'fuuuu', two: 12, three: 34 },
			{ id: 12, unread: false, one: 'fuuuu', two: 13, three: 34 },
			{ id: 13, unread: false, one: 'fuuuu', two: 14, three: 34 },
			{ id: 14, unread: false, one: 'fuuuu', two: 15, three: 34 },
			{ id: 15, unread: false, one: 'fuuuu', two: 16, three: 34 },
			{ id: 16, unread: false, one: 'fuuuu', two: 17, three: 34 },
			{ id: 17, unread: false, one: 'fuuuu', two: 18, three: 34 },
			{ id: 18, unread: false, one: 'fuuuu', two: 19, three: 34 },
			{ id: 19, unread: false, one: 'fuuuu', two: 20, three: 34 },
			{ id: 20, unread: false, one: 'fuuuu', two: 21, three: 34 },
			{ id: 21, unread: false, one: 'fuuuu', two: 22, three: 34 },
			{ id: 22, unread: false, one: 'fuuuu', two: 23, three: 34 },
			{ id: 23, unread: false, one: 'fuuuu', two: 24, three: 34 },
			{ id: 24, unread: false, one: 'fuuuu', two: 25, three: 34 },
			{ id: 25, unread: false, one: 'fuuuu', two: 26, three: 34 },
			{ id: 26, unread: false, one: 'fuuuu', two: 27, three: 34 },
			{ id: 27, unread: false, one: 'fuuuu', two: 28, three: 34 },
			{ id: 28, unread: false, one: 'fuuuu', two: 29, three: 34 },
			{ id: 29, unread: false, one: 'fuuuu', two: 30, three: 34 },
		])
		return {
			grid,
			columns,
			rows
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
