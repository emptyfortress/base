<template lang="pug">
.container
	.zag Входящие
	.gridtotal(:class="{ full : grid.fullscreen }")
		.sidebar(v-show="grid.sidebar") sidebar
		.main(:class="{ 'fill' : !grid.sidebar }").shadow-1
			Toolbar
			GridTable(v-if="grid.view")
			p(v-else) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			
	
</template>

<script>
import { ref } from 'vue'
import { useGrid } from '@/stores/grid'
import Toolbar from '@/components/common/Toolbar.vue'
import GridTable from '@/components/common/GridTable.vue'

export default {
	components: {
		Toolbar,
		GridTable,
	},
	setup() {
		const grid = useGrid()
		return {
			grid,
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
