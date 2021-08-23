<template lang="pug">
q-card.quick.shadow-3(v-show="filterByIndex === col" @click.stop)
	template(v-if="datum")
		q-btn(icon="mdi-event" round color="primary")
			q-popup-proxy(transition-show="scale" transition-hide="scale")
				q-date(v-model="proxyDate")
	template(v-else)
		q-card-section.q-pb-none.q-pt-xs
			q-input(dense square
				input-class="filter-input"
				v-model="filter"
				autofocus
				clearable
				)
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")
		q-list(v-if="filteredItems.length")
			q-item(tag="label" v-ripple)
				q-item-section(side top)
					q-checkbox(v-model="all" @update:model-value="toggle" color="grey")
				q-item-section
					q-item-label
						|Выбрано
						span.q-ml-md ({{ checked.length }} / {{ filteredItems.length }})

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
		q-btn(flat round size="12px" icon="mdi-trash-can-outline" color="negative" @click="clearAll")
			q-tooltip Очистить и закрыть
		q-btn(flat size="12px" color="primary" @click="$emit('close')") Применить
</template>

<script>
import WordHighlighter from 'vue-word-highlighter'
import { ref, computed, watchEffect } from 'vue'

export default {
	props: ['filterByIndex', 'col', 'data', 'datum' ],
	components: {
		WordHighlighter,
	},
	setup(props, context) {

		let checked = ref([])
		const filter = ref('')
		const all = ref(false)

		const date = ref('2019/03/01')
		const proxyDate = ref('2019/03/01')

		const toggle = () => {
			if (checked.value.length < filteredItems.value.length) {
				checked.value = filteredItems.value
			} else checked.value = []
		}
		const clearAll = () => {
			checked.value = []
			context.emit('close')
		}
		const filteredItems = computed( () => {
			return props.data.filter( row => {
				if (filter.value) {
					return row.toLowerCase().includes(filter.value.toLowerCase())
				}
				return props.data
			})
		})
		watchEffect(() => {
			if (checked.value.length < props.data.length && checked.value.length !== 0) {
				all.value = null
			}
			if (checked.value.length === props.data.length) {
				all.value === true
			}
			if (checked.value.length === 0) {
				all.value = false
			}
		})

		return {
			checked,
			filter,
			all,
			toggle,
			clearAll,
			filteredItems,
			date,
			proxyDate,
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
