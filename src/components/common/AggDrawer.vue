<template lang="pug">
q-drawer(v-model="grid.aggregat" :width="265" side="right" overlay bordered).ztop
	Aggregates(:data="aggregatData")
</template>

<script>
import { inject } from 'vue'
import { useGrid } from '@/stores/grid'
import Aggregates from '@/components/common/Aggregates.vue'

export default {
	props: {},
	components: {
		Aggregates,
	},
	setup() {
		const grid = useGrid()
		const aggregatData = inject('aggregateData')

		return {
			aggregatData,
			grid,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.zg {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	height: 40px;
	padding: 0 0.5rem;
}
.lin {
	font-size: 0.8rem;
	color: var(--q-link);
	cursor: pointer;
}
</style>
