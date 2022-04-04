import { computed } from 'vue'
import { useGrid } from '@/stores/grid'

const grid = useGrid()

const filteredRows = computed(() => {
	if (grid.checked.length) {
		let filter = {}
		let temp = Object.values(grid.checked)
		for (let el of temp) {
			filter[el.col] = el.items
		}

		return rows.filter((item) => {
			for (let [key, value] of Object.entries(filter)) {
				const cool = (element) => element === item[key]
				if (item[key] === undefined) return false
				if (!value.some(cool)) return false
			}
			return true
		})
	}
	return rows
})

export { filteredRows }
