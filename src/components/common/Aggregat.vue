<template lang="pug">
q-list(dense).q-mb-sm
	q-item(v-for="( item, index ) in props.list" v-ripple tag="label" v-show="show(index, more)" )
		q-item-section(side)
			q-checkbox(dense v-model="item.value" @update:model-value="addAggregat(item.value,item.title)" ).reset
		q-item-section {{ item.title }}
		q-item-section(avatar) {{ item.badge }}

	.more(v-if="list.length > 4" @click="more = !more")
		span(v-if="more") Меньше
		span(v-else) Еще
	//- .q-px-md.q-pb-md
		q-input(v-if="block === 3" placeholder="Период" v-model="period" clearable) 
			template(v-slot:prepend)
				q-icon(name="mdi-calendar-range")
		
			
</template>

<script>
import {ref} from 'vue'
import { useGrid } from '@/stores/grid'
export default {
	props: {
		list: Array,
		col: String,
	},
	setup(props) {

		const grid = useGrid()
		const more = ref(false)

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

		return {
			more,
			show,
			props,
			addAggregat,
		}
	},


	// data() {
	// 	return {
	// 		more: false
	// 	}
	// },
	// methods: {
	// 	addChecked (e) {
	// 		console.log(e)
	// 		console.log(this.col)
	// 	},
	// 	show (e) {
	// 		if (e < 4 && !this.more) {
	// 			return true
	// 		}
	// 		if (this.more) {
	// 			return true
	// 		}
	// 	}
	// }

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
