<template lang="pug">
Chips(:block="props.block").q-mt-md.q-mb-sm
GridTable(:rows="filteredItems" :columns="headers" :colData="colData" height="600px" :bordered="true")

.big {{ selection }}
</template>

<script>
import { headers, items } from '@/data.js'
import { ref, reactive, computed } from 'vue'
import Chips from '@/components/common/Chips.vue'
import GridTable from '@/components/common/GridTable.vue'
import { useWidget } from '@/stores/widget'

export default {
	props: ['block'],
	components: { Chips, GridTable },
	setup(props) {
		const widget = useWidget()

		const loadedItems = reactive(items)

		const filteredItems = computed(() => {
			switch (widget.selected) {
				case 0:
					return loadedItems.filter((item) => item.unread)
				case 1:
					return loadedItems.filter((item) => item.status === 'В работе')
				case 2:
					return loadedItems.filter((item) => item.status === 'Делегировано')
				case 3:
					return loadedItems.filter((item) => item.status === 'Просрочено')
				default:
					return loadedItems
			}
		})
		const all = ref(false)
		const sel = (val, item) => {
			item.selected = val
		}
		const toggleSel = () => {
			if (all.value === true) {
				loadedItems.map((item) => (item.selected = false))
				all.value = false
			} else {
				loadedItems.map((item) => (item.selected = true))
				all.value = true
			}
		}
		const sortUnread = () => {
			console.log(1)
		}
		const selection = computed(() => {
			const temp = loadedItems.filter((item) => item.selected)
			if (temp.length === 0) {
				return
			} else return temp.length + ' из ' + loadedItems.length
		})

		const colData = (col) => {
			return [...new Set(loadedItems.map((item) => item[col.name]))]
		}
		const popup = computed(() => {
			return 'popup'
		})

		return {
			props,
			headers,
			filteredItems,
			all,
			sel,
			toggleSel,
			sortUnread,
			selection,
			colData,
			popup,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.q-markup-table .q-table tbody td.nwr {
	white-space: nowrap;
}
.big {
	min-height: 2.3rem;
	font-size: 2.3rem;
	line-height: 100%;
	margin-top: 1rem;
	color: var(--q-primary);
}
.q-markup-table .q-table thead th.center {
	text-align: center;
}
th.brd {
	border-right: 1px solid var(--th-border-color) !important;
	cursor: pointer;
}
</style>
