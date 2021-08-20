<template lang="pug">
q-card.quick.shadow-3(v-show="filterByIndex === col" @click.stop )
	q-card-section.q-pb-none.q-pt-xs
		q-input(dense square input-class="filter-input")
	q-list().list
		q-item(v-for="(dat, index) in data" :key="index" clickable v-ripple)
			q-item-section(side top)
				q-checkbox(v-model="checked" :val="dat")
			q-item-section
				q-item-label {{ dat }}
	q-separator
	pre {{ checked }}
	q-card-actions(align="between")
		q-btn(flat round size="12px" icon="mdi-trash-can-outline" color="negative" @click="$emit('close')")
		q-btn(flat size="12px" color="primary" @click="$emit('close')") Применить
</template>

<script>
export default {
	props: ['filterByIndex', 'col', 'data' ],
	data() {
		return {
			checked: [],
		}
	},
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
	}
}
</style>
