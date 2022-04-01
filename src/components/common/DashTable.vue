<template lang="pug">
Chips(:block="props.block").q-mt-md.q-mb-sm.slide
GridTable(:rows="filteredItems" usefilter :columns="cols" :colData="colData" height="600px" :bordered="true" @sort="sort")

</template>

<script>
import { ref, reactive, computed, provide } from 'vue'
import { headers, headers1, items } from '@/data.js'
import Chips from '@/components/common/Chips.vue'
import GridTable from '@/components/common/GridTable.vue'
import { useWidget } from '@/stores/widget'

export default {
	props: {
		block: {
			type: Object,
			required: true,
		},
	},

	components: { Chips, GridTable },
	setup(props) {
		provide('bon', props.block.buttons)

		const widget = useWidget()

		const loadedItems = reactive(items)

		const filteredItems = computed(() => {
			if (props.block.id === 0) {
				let temp = loadedItems.filter((item) => item.doc === 'in')
				switch (widget.chip) {
					case 0:
						return temp.filter((item) => item.unread)
					case 1:
						return temp.filter((item) => item.status === 'В работе')
					case 2:
						return temp.filter((item) => item.status === 'Делегировано')
					case 3:
						return temp.filter((item) => item.status === 'Просрочено')
					default:
						return temp
				}
			} else if (props.block.id === 1) {
				let temp = loadedItems.filter((item) => item.doc === 'out')
				switch (widget.chip) {
					case 0:
						return temp.filter((item) => item.status === 'На контроле')
					case 1:
						return temp.filter((item) => item.status === 'Завершено')
					case 2:
						return temp.filter((item) => item.status === 'Просрочено')
					default:
						return temp
				}
			}
			return []
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

		const cols = computed(() => {
			if (props.block.id === 0) {
				return headers
			} else if (props.block.id === 1) {
				return headers1
			}
			return []
		})

		const colData = (col) => {
			return [...new Set(loadedItems.map((item) => item[col.name]))]
		}
		const popup = computed(() => {
			return 'popup'
		})

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

		//- const show = anime({
		//- 	targets: '.tt',
		//- 	translateX: 350,
		//- 	duration: 500,
		//- 	delay: 500,
		//- 	autoplay: false,
		//- })

		//- const play = () => {
		//- 	const animation = anime({
		//- 		targets: '.tt',
		//- 		translateX: 200,
		//- 		autoplay: false,
		//- 	})
		//- 	animation.play()
		//- 	console.log('play')
		//- }

		// onMounted(() => {
		// 	anime({
		// 		targets: '.slide',
		// 		translateY: [30, 0],
		// 		opacity: [0, 1],
		// 		delay: 1000
		// 	})
		// })

		return {
			cols,
			props,
			headers,
			filteredItems,
			all,
			sel,
			toggleSel,
			colData,
			popup,
			sort,
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
	display: flex;
	justify-content: flex-start;
	gap: 2rem;
}
.q-markup-table .q-table thead th.center {
	text-align: center;
}
th.brd {
	border-right: 1px solid var(--th-border-color) !important;
	cursor: pointer;
}
.tt {
	width: 50px;
	height: 50px;
	background: #ccc;
}
</style>
