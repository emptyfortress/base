<template lang="pug">
q-table(
	:rows="items"
	:columns="headers2"
	:pagination="pagination"
	:filter="filter"
	no-results-label="Ничего не найдено"
	rows-per-page-label="Показывать:"
	flat
	dense
	row-key="id").izb
	template(v-slot:body-cell-title="props")
		q-td(:props="props").wrap
			.flex
				q-icon(name="mdi-star" color="orange" size="18px")
				.link {{ props.value }}

</template>

<script>
import { headers2, items } from '@/data.js'

export default {
	components: {},
	props: {
		filter: {
			type: String,
			required: false,
		},
	},

	setup() {
		const pagination = {
			page: 1,
			rowsPerPage: 7,
		}
		return {
			headers2,
			items,
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
.flex {
	display: flex;
	justify-content: flex-start;
	align-items: top;
	flex-wrap: nowrap;
	gap: 0.5rem;
}
.q-table--dense .q-table td:first-child {
	padding-left: 0;
}
.q-td.wrap {
	white-space: normal;
}
.q-table__container > div:last-child {
	padding-top: 1rem !important;
}
</style>
