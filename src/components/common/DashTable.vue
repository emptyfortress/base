<template lang="pug">
q-markup-table(flat square).shadow-0
	thead
		th.small(@click="sortUnread")
		th.small.center
			q-checkbox(dense :model-value="all" @update:model-value="toggleSel")
		th(v-for="head in headers") {{ head.text }}
	tbody
		tr(v-for="item in filteredItems" :class="{ 'new' : item.unread }").link
			td(@click="item.unread = !item.unread").small
			td
				q-checkbox(dense v-model="item.selected" @update:model-value="sel(item.selected, item)")
			td.nwr {{ item.type }}
			td {{ item.title }}
			td.nwr {{ item.executor }}
			td.nwr {{ item.deadline }}
.big 3
</template>

<script>
import { headers, items } from '@/data.js'
import { ref, reactive } from 'vue'

export default {
	components: {},
	setup() {
		// const selection = ref([])
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

		return {
			headers,
			filteredItems,
			// selection,
			all,
			sel,
			toggleSel,
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
	font-size: 2.3rem;
	line-height: 100%;
	margin-top: 1rem;
	color: var(--q-primary);
}
.q-markup-table .q-table thead th.center {
	text-align: center;
}
</style>
