<template lang="pug">
component(:is="GridTable" :rows="filteredItems" :columns="headers2" :colData="colData" :bordered="false" @sort="sort" wrap)

</template>

<script setup>
import { ref, reactive, computed, provide } from 'vue'
import GridTable from '@/components/common/GridTable.vue'
import { headers2, items2 } from '@/data.js'

const loadedItems = reactive(items2)

const filteredItems = computed(() => {
	return loadedItems
})

provide('bon', ['Завершить', 'Делегировать', 'Открыть'])

const selectedArray = computed(() => {
	return items.value.filter((item) => item.selected)
})
const colData = (col) => {
	return [...new Set(filteredItems.value.map((item) => item[col.name]))]
}
const sorted = ref(false)
const sort = () => {
	function compare(a, b) {
		if (a.unread < b.unread) {
			return 1
		}
		if (a.unread > b.unread) {
			return -1
		}
		return 0
	}
	if (!sorted.value) {
		loadedItems.sort(compare)
		sorted.value = !sorted.value
	} else {
		loadedItems.reverse()
		sorted.value = !sorted.value
	}
}
</script>

<style scoped lang="scss">
.fixhd {
	height: inherit;
}
</style>
