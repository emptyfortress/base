<template lang="pug">
.fixheight
	.zg
		.lin(@click="reset") Сбросить все
		.lin(@click="expand")
			span(v-if="expanded") Распахнуть все
			span(v-else) Свернуть все
	q-scroll-area.scroll
		q-expansion-item(v-model="item.model" v-for="item in items" :label="item.name" :header-style="{ fontWeight: 'bold' }")
			Aggregat(:list="item.list" :col="item.col")
</template>

<script>
import {ref, reactive, computed} from 'vue'
import { useGrid } from '@/stores/grid'
import Aggregat from '@/components/common/Aggregat.vue'

export default {
	props: {
		data: Array
	},
	components: {
		Aggregat,
	},

	setup(props) {
		const grid = useGrid()
		const items = reactive(props.data)

		const expanded = computed( () => items.filter( el => el.model ).length <= 1 )

		const expand = () => {
			if (expanded.value) {
				items.map( el => el.model = true )
			} else items.map( item => item.model = false )
		}

		const reset = () => {
			let list = document.querySelectorAll('.reset > .q-checkbox__inner--truthy')
			console.log(list)
			list.forEach( el => {
				el.classList.remove('q-checkbox__inner--truthy')
				el.classList.add('q-checkbox__inner--falsy')
			})
			grid.clearCheckedAll()
		}

		return {
			reset,
			items,
			expand,
			expanded,
		}
	},

}
</script>

<style scoped lang="scss">
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
.scroll {
	height: calc(100vh - 200px);
}
</style>
