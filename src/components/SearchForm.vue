<template lang="pug">
draggable(:list="list" item-key="id" @start="begin" @end="end" )
	template(#item="{ element }")
		div
			QueryItem(:item="element" @invert="invert(element)" @add="add(element)")

#demo demo
</template>

<script>
import draggable from 'vuedraggable'
import { reactive, ref } from 'vue'
import QueryItem from '@/components/QueryItem.vue'

export default {
	components: {
		draggable,
		QueryItem,
	},
	setup() {
		const list = reactive([{ id: 0, and: true }])

		const drag = ref(false)

		const itemIndex = (e) => {
			return list.findIndex((item) => item.id === e.id)
		}

		const add = (e) => {
			let index = itemIndex(e)
			console.log(index)
			let newItem = {}
			newItem.id = list.length
			newItem.and = true
			list.splice(index + 1, 0, newItem)
		}

		const invert = (e) => {
			let index = itemIndex(e)
			list[index].and = !list[index].and
		}

		const begin = () => {
			drag.value = true
		}
		const end = () => {
			drag.value = false
			console.log('end')
		}

		return {
			drag,
			begin,
			end,
			list,
			invert,
			add,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.group {
	height: 60px;
	width: 100%;
	border: 2px solid #ccc;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background: var(--bg-drawer);
}
</style>
