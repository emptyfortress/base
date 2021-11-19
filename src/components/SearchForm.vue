<template lang="pug">
draggable(:list="list" item-key="id" @start="begin" @end="end")
	template(#item="{ element }")
		div
			QueryItem(:item="element" @invert="invert(element)" @add="add(element)")

//- #demo(draggable="true" v-dragged="onDragged")
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

		let xStart = 0
		let distance = 0

		const begin = (e) => {
			drag.value = true
			xStart = e.originalEvent.clientX
			e.item.addEventListener('drag', (a) => {
				distance = a.clientX - xStart
			})
		}
		const end = (e) => {
			drag.value = false
			let elem = e.item.querySelector('.all')
			e.item.removeEventListener('drag', () => {})
			if (distance > 100) {
				elem.classList.add('fuck')
			}
			if (distance < -50) {
				elem.classList.remove('fuck')
			}
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
#demo {
	width: 200px;
	height: 200px;
	background: pink;
}
</style>
