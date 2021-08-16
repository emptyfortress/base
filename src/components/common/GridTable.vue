<template lang="pug">
.grid
	q-table(:rows="rows" :fullscreen="fullscreen" :columns="columns" row-key="name" :pagination="pagination" hide-bottom flat)
</template>

<script>
import {ref} from 'vue'
export default {
	setup() {

		const pagination = {
			rowsPerPage: 0
		}

		const columns = [
			{ name: 'one', label: 'Первый', field: 'name', reqired: true, align: 'left', sortable: true, },
			{ name: 'two', label: 'Второй', field: 'two',  align: 'left', sortable: true, },
			{ name: 'three', label: 'laksj', field: 'three',  align: 'left', sortable: true, },
		]

		const rows = [
			{ name: 'laksjd', two: 0, three: 34 },
			{ name: 'laksjd', two: 1, three: 34 },
			{ name: 'laksjd', two: 2, three: 34 },
			{ name: 'laksjd', two: 3, three: 34 },
			{ name: 'laksjd', two: 4, three: 34 },
			{ name: 'laksjd', two: 5, three: 34 },
			{ name: 'laksjd', two: 6, three: 34 },
			{ name: 'laksjd', two: 7, three: 34 },
			{ name: 'laksjd', two: 8, three: 34 },
			{ name: 'laksjd', two: 9, three: 34 },
			{ name: 'laksjd', two: 10, three: 34 },
		]

		return {
			columns,
			rows,
			fullscreen: ref(false),
			pagination,
		}
	},

}
</script>

<style scoped lang="scss">
</style>
