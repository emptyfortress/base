<template lang="pug">
q-list(dense).q-mb-sm
	q-item(v-for="( item, index ) in props.list" v-ripple tag="label" v-show="show(index, more)" :class="disable(item)")
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
		const temp = ref(0)

		const filteredRows = inject('filteredRows')

		const addAggregat = (value, title) => {
			if (value) {
				grid.addAggregat(props.col, title)
				grid.disable++
				temp.value++
			} else {
				grid.removeAggregat(props.col, title)
				grid.disable--
				temp.value--
			}
		}

		const show = (e) => {
			if (e < 4 && !more.value) { return true }
			if (more.value) { return true }
			return false
		}

		const disable = (el) => {
			const length = filteredRows.value.filter( item => item[props.col] === el.title ).length
			if (length || ( grid.disable <= 1 && temp.value > 0)) return ''
			return 'dis'
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
.more {
	font-size: 0.8rem;
	color: var(--q-link);
	cursor: pointer;
	margin: 4px 15px;
}
.dis {
	opacity: .6;
}
</style>
