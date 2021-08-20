<template lang="pug">
q-card.quick.shadow-3(v-show="filterByIndex === col" @click.stop )
	q-card-section.q-pb-none.q-pt-xs
		q-input(dense square
			input-class="filter-input"
			v-model="filter"
			autofocus
			clearable
			)
	q-list(v-if="filteredItems.length")
		q-item(v-for="(dat, index) in filteredItems" :key="index" tag="label" v-ripple ).q-pa-none
			q-item-section(side top)
				q-checkbox(v-model="checked" :val="dat")
			q-item-section
				q-item-label
					WordHighlighter(:query="filter") {{ dat }}
	.empty(v-else)
		q-icon(name="mdi-circle-off-outline")
		span Нет совпадений
	q-separator
	q-card-actions(align="between")
		q-btn(flat round size="12px" icon="mdi-trash-can-outline" color="negative" @click="$emit('close')")
		q-btn(flat size="12px" color="primary" @click="$emit('close')") Применить
</template>

<script>
import WordHighlighter from 'vue-word-highlighter'

export default {
	props: ['filterByIndex', 'col', 'data' ],
	components: {
		WordHighlighter,
	},
	data() {
		return {
			checked: [],
			filter: '',
		}
	},
	computed: {
		filteredItems() {
			return this.data.filter( row => {
				if (this.filter) {
					return row.toLowerCase().includes(this.filter.toLowerCase())
				}
				return this.data
			})
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.fixhd thead tr:first-child th:last-child .quick {
	left: initial;
	right: 0;
}
.quick {
	position: absolute;
	top: 36px;
	left: 0;
	width: 100%;
	min-width: 230px;
	padding: .5rem .25rem 0;
	border-radius: 0 0 6px 6px;
	.q-list {
		max-height: 300px;
		overflow: auto;
		font-size: 0.8rem;
		font-weight: 400;
		.q-item {
			min-height: 36px;
			padding: 5px 10px;
		}
	}
}
.empty {
	padding: .7rem 1rem;
	color: grey;
	font-size: 0.8rem;
	min-height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	.q-icon {
		font-size: 1.0rem;
		margin-right: .5rem;
	}
}
</style>
