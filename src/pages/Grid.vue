<template lang="pug">
.container
	.zag Входящие
	.gridtotal
		.sidebar(v-show="grid.sidebar")
		.main(:class="{ 'fill' : !grid.sidebar }")
			Toolbar

			p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			
	
</template>

<script>
import { ref } from 'vue'
import { useGrid } from '@/stores/grid'
import Toolbar from '@/components/common/Toolbar.vue'

export default {
	components: {
		Toolbar,
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
}
.sidebar {
	background: #ccc;
}
.main {
}
.fill {
	grid-column: 1/3;
}
</style>
