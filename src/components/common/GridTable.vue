<template lang="pug">
.grid
	q-table(:rows="rows"
		:columns="columns"
		row-key="id"
		:pagination="pagination"
		hide-bottom flat
		selection="multiple"
		v-model:selected="selected"
		).fixhd
		template(v-slot:header="props")
			q-tr(:props="props")
				q-th(auto-width :key="props.read").read
				q-th(auto-width)
					q-checkbox(v-model="props.selected")
				q-th(v-for="col in props.cols" :props="props" :key="col.name") {{ col.label }}
		template(v-slot:body="props")
			q-tr(:props="props" :key="props.row.id")
				q-td(key="read").read
				q-td(auto-width)
					q-checkbox(v-model="props.selected")
				q-td(v-for="col in props.cols" :key="col.name") {{ props.row[col.name] }}

</template>

<script>
import {ref} from 'vue'
export default {
	setup() {

		const pagination = {
			rowsPerPage: 0
		}

		const selected = ref([])

		const columns = [
			{ name: 'one', label: 'Первый', field: 'one',  align: 'left', sortable: true, },
			{ name: 'two', label: 'Второй', field: 'two',  align: 'left', sortable: true, },
			{ name: 'three', label: 'Третий', field: 'three',  align: 'left', sortable: true, },
		]

		const rows = [
			{ id: 0, read: false, one: 'fuuuu', two: 0, three: 31 },
			{ id: 1, read: true,  one: 'fuuuu', two: 1, three: 34 },
			{ id: 2, read: false, one: 'fuuuu', two: 2, three: 34 },
			{ id: 3, read: false, one: 'fuuuu', two: 3, three: 34 },
			{ id: 4, read: false, one: 'fuuuu', two: 4, three: 34 },
			{ id: 5, read: false, one: 'fuuuu', two: 5, three: 34 },
			{ id: 6, read: false, one: 'fuuuu', two: 6, three: 34 },
			{ id: 7, read: false, one: 'fuuuu', two: 7, three: 34 },
			{ id: 8, read: false, one: 'fuuuu', two: 8, three: 34 },
			{ id: 9, read: false, one: 'fuuuu', two: 9, three: 34 },
		]

		return {
			columns,
			rows,
			pagination,
			selected,
		}
	},

}
</script>

<style scoped lang="scss">
.full .fixhd {
	height: 100vh;
}
.q-table.fixhd th {
	padding: 4px !important;
}
.read {
	min-width: 4px;
	padding: 0;
}
</style>
