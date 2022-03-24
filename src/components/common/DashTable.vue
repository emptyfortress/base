<template lang="pug">
GridTable(:rows="filteredItems" :columns="headers" :colData="colData" height="600px" :bordered="true" total="12" shown="5" )

.big {{ selection }}
</template>

<script>
import { headers, items } from '@/data.js'
import { ref, reactive, computed } from 'vue'
import GridTable from '@/components/common/GridTable.vue'

export default {
	components: { GridTable },
	setup() {
		const filteredItems = reactive(items)
		const all = ref(false)
		const sel = (val, item) => {
			item.selected = val
		}
		const toggleSel = () => {
			if (all.value === true) {
				filteredItems.map((item) => (item.selected = false))
				all.value = false
			} else {
				filteredItems.map((item) => (item.selected = true))
				all.value = true
			}
		}
		const sortUnread = () => {
			console.log(1)
		}
		const selection = computed(() => {
			const temp = filteredItems.filter((item) => item.selected)
			if (temp.length === 0) {
				return
			} else return temp.length + ' из ' + filteredItems.length
		})

		const colData = (col) => {
			return [...new Set(filteredItems.map((item) => item[col.name]))]
		}
		const popup = computed(() => {
			return 'popup'
		})

		return {
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
