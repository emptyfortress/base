<template lang="pug">
q-list(dense).q-mb-sm
	q-item(v-for="( item, index ) in props.list" v-ripple tag="label" v-show="show(index, more)" :disable="disable(item)")
		q-item-section(side)
			q-checkbox(dense v-model="item.value" @update:model-value="addAggregat(item.value,item.title)" ).reset
		q-item-section {{ item.title }}
		q-item-section(avatar) {{ item.badge }}

	.more(v-if="list.length > 4" @click="more = !more")
		span(v-if="more") Меньше
		span(v-else) Еще
			
</template>

<script>
import {ref, inject} from 'vue'
import { useGrid } from '@/stores/grid'
export default {
	props: {
		list: Array,
		col: String,
	},
	setup(props) {

		const grid = useGrid()
		const more = ref(false)

		const filteredRows = inject('filteredRows')

		const addAggregat = (value, title) => {
			if (value) {
				grid.addAggregat(props.col, title)
			} else {
				grid.removeAggregat(props.col, title)
			}
		}

		const show = (e) => {
			if (e < 4 && !more.value) { return true }
			if (more.value) { return true }
			return false
		}

		const disable = (el) => {
			const length = filteredRows.value.filter( item => item[props.col] === el.title ).length
			if (length) return false
			return true
		}

		return {
			more,
			show,
			props,
			addAggregat,
			filteredRows,
			disable,
		}
	},

}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.q-icon {
	/* transform: translateY(7px); */
}
.more {
	font-size: 0.8rem;
	color: var(--q-link);
	cursor: pointer;
	margin: 4px 15px;
}
</style>
