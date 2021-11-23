<template lang="pug">
.box
	draggable(:list="list" item-key="id" @start="begin" @end="end")
		template(#item="{ element }")
			div
				QueryItem(:item="element" @invert="invert(element)" @add="add(element)" @delete="del(element)" @reset="res" )

</template>

<script>
import draggable from 'vuedraggable'
import { ref, computed, watch } from 'vue'
import QueryItem from '@/components/QueryItem.vue'
import { useSearch } from '@/stores/search'

export default {
	components: {
		draggable,
		QueryItem,
	},
	props: ['id'],
	setup(props) {
		const search = useSearch()

		const list = computed(() => {
			const item = search.allList.find((el) => el.id === props.id)
			if (item) {
				return item.list
			} else return [{ id: 0, and: true, mod1: null, mod2: null, mod3: null }]
		})

		const drag = ref(false)

		const itemIndex = (e) => {
			return list.value.findIndex((item) => item.id === e.id)
		}

		const add = (e) => {
			let index = itemIndex(e)
			let newItem = {}
			newItem.id = new Date()
			newItem.and = true
			list.value.splice(index + 1, 0, newItem)
		}

		const del = (e) => {
			let index = itemIndex(e)
			list.value.splice(index, 1)
		}
		const res = (e) => {
			list.value[e].mod1 = null
			list.value[e].mod2 = null
			list.value[e].mod3 = null
		}

		const invert = (e) => {
			e.and = !e.and
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
			if (distance > 80) {
				elem.classList.add('fuck')
			}
			if (distance < -50) {
				elem.classList.remove('fuck')
			}
		}

		return {
			drag,
			res,
			begin,
			end,
			list,
			invert,
			add,
			del,
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
.box {
	background-image: url(@/assets/img/vert.png);
	background-repeat: repeat-y;
	background-position-x: 48px;
}
</style>
