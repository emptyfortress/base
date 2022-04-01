<template lang="pug">
q-table(:rows="items"
	:columns="headers2"
	row-key="name"
	hide-pagination="false"
	:pagination="pagination"
	:wrap-cells="false"
	flat
	dense
	).izb
</template>

<script>
import { ref, reactive, computed, provide } from 'vue'
import { headers2, items } from '@/data.js'
// import GridTable from '@/components/common/GridTable.vue'

export default {
	components: {
		// GridTable,
	},
	setup() {
		const pagination = {
			page: 1,
			rowsPerPage: 6,
		}
		return {
			items,
			headers2,
			pagination,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.izb {
	margin-top: 1rem;
}
</style>
