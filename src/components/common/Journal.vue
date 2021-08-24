<template lang="pug">
q-card-section.q-pb-none.q-pt-xs
	q-input(dense square
		input-class="filter-input"
		v-model="query"
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
				WordHighlighter(:query="query") {{ dat }}
.empty(v-else)
	q-icon(name="mdi-circle-off-outline")
	span Нет совпадений
</template>

<script>
import { ref, computed, watchEffect } from 'vue'
import WordHighlighter from 'vue-word-highlighter'
// import { useGrid } from '@/stores/grid'

export default {
	props: ['data', 'trigger'],
	emits: ['close'],
	components: {
		WordHighlighter,
	},

	setup(props, context) {
		// const grid = useGrid()

		const all = ref(false)
		const query = ref('')
		let checked = ref([])

		const filteredItems = computed( () => {
			return props.data.filter( row => {
				if (query.value) {
					return row.toLowerCase().includes(query.value.toLowerCase())
				}
				return props.data
			})
		})
		const toggle = () => {
			if (checked.value.length < filteredItems.value.length) {
				checked.value = filteredItems.value
			} else checked.value = []
		}

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
			if (props.trigger === true) {
				checked.value = []
				context.emit('close')
			}
		})

		return {
			filteredItems,
			toggle,
			query,
			checked,
			all,
			
		}
	},

}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

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
