<template lang="pug">
.all
	p Настройте вывод результатов поиска. Какие колонки и в каком порядке выводить:
	draggable(:list="list" item-key="id")
		template(#item="{ element, index }")
			div
				ColumnItem(:item="element" :index="index" @add="cols.add(element)" @delete="cols.del(element)")

</template>

<script>
import draggable from 'vuedraggable'
import { ref, reactive, watchEffect } from 'vue'
import ColumnItem from '@/components/ColumnItem.vue'
import { useColumns } from '@/stores/columns'

export default {
	components: {
		draggable,
		ColumnItem,
	},
	setup() {
		const cols = useColumns()
		const list = cols.columns

		return { cols, list }
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.all {
	padding-left: 0.7rem;
}
</style>
