<template lang="pug">
.all
	p Настройте вывод результатов поиска. Какие колонки и в каком порядке выводить:
	draggable(:list="list" item-key="id" @end="upd")
		template(#item="{ element, index }")
			div
				ColumnItem(:item="element" :index="index" @add="add(index)" @delete="del(index)" @update="updateItem")

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

		const add = (index) => {
			let item = {}
			item.id = new Date()
			item.name = null
			item.label = null
			item.sort = false
			item.align = 'left'
			list.splice(index + 1, 0, item)
			cols.addtemp(item, index)
		}

		const del = (index) => {
			list.splice(index, 1)
			cols.deltemp(index)
		}
		const updateItem = (val, ind) => {
			cols.update(val, ind)
		}
		const upd = () => {
			cols.updateTemp(list)
		}

		return { list, add, del, updateItem, upd }
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.all {
	padding-left: 0.7rem;
}
</style>
