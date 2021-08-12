<template lang="pug">
.toolbar
	.left
		q-btn(flat round dense @click="grid.switchSidebar")
			q-icon(name="mdi-backburger" v-if="grid.sidebar")
			q-icon(name="mdi-forwardburger" v-else)
	.right
		q-btn(flat round dense )
			SvgIcon(name="sort-variant")
		q-btn(flat round dense )
			SvgIcon(name="readAll")
		q-btn(flat round dense )
			SvgIcon(name="refresh")
		q-btn(flat round dense )
			SvgIcon(name="xls-export")
		q-btn(flat round dense )
			SvgIcon(name="sliders-reload")
		q-btn(flat round dense )
			SvgIcon(name="sliders-vertical")
		q-btn(flat round dense )
			SvgIcon(name="pen")
</template>

<script>
import { useGrid } from '@/stores/grid'
import SvgIcon from '@/components/SvgIcon.vue'

export default {
	components: {
		SvgIcon,
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

.toolbar {
	padding: 8px;
	border-top: 1px solid var(--my-border-color);
	border-bottom: 1px solid var(--my-border-color);
	/* background: #fff; */
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;

}
</style>
