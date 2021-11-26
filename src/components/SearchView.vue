<template lang="pug">
.all
	p Настройте вывод результатов поиска. Какие колонки и в каком порядке выводить:
	draggable(:list="list" item-key="id")
		template(#item="{ element, index }")
			div
				ColumnItem(:item="element" :index="index" @add="add(element, index)" @delete="del(index)" @update="updateItem")

</template>

<script>
import draggable from 'vuedraggable'
import { reactive } from 'vue'
import ColumnItem from '@/components/ColumnItem.vue'
import { useColumns } from '@/stores/columns'

export default {
	components: {
		draggable,
		ColumnItem,
	},
	setup() {
		const cols = useColumns()
		const list = reactive([...cols.columns])

		const add = (e, index) => {
			let item = {}
			Object.assign(item, e)
			item.id = e.id + list.length
			list.splice(index, 0, item)
			cols.addtemp(item, index)
		}

		const del = (index) => {
			list.splice(index, 1)
		}
		const updateItem = (val, ind) => {
			// console.log(val)
			// console.log(ind)
			cols.update(val, ind)
		}

		return { list, add, del, updateItem }
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.all {
	padding-left: 0.7rem;
}
</style>
