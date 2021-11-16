<template lang="pug">
.container
	.zag.q-mb-lg Настройка поисков и представлений
	q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei")
		template(v-slot:before)
			.list
				q-form.quick
					q-card-section.q-pt-xs
						q-input(dense
							v-model="query"
							autofocus
							clearable
							placeholder="filter"
							).query
							template(v-slot:prepend)
								q-icon(name="mdi-magnify")
				q-expansion-item(:model-value="temp" icon="mdi-star-outline" label="Мои поиски" )
					q-list(dense).q-mb-lg
						q-item(v-for="(item, index) in filteredItems" :key="index" tag="label" v-ripple ).q-pa-none
							//- q-item-section(side top)
							//- 	q-checkbox(v-model="checked" :val="dat")
							q-item-section
								q-item-label
									WordHighlighter(:query="query") {{ item.label }}
						//- q-item(tag="label" v-ripple v-for="item in mySearch")
						//- 	q-item-section
						//- 		q-item-label {{ item.label }}

				q-expansion-item( icon="mdi-cloud-search-outline" label="Общие поиски" )
					q-card laksjgl
		template(v-slot:after)
			.main
				q-btn(flat round dense @click="switchSidebar")
					q-icon(name="mdi-forwardburger" v-if="splitterModel === 0")
					q-icon(name="mdi-backburger" v-else)
</template>

<script>
import { ref, reactive, computed } from 'vue'
import WordHighlighter from 'vue-word-highlighter'

export default {
	components: {
		WordHighlighter,
	},
	setup() {
		const temp = ref(true)
		const sidebar = ref(true)
		const query = ref('')
		const splitterModel = ref(30)
		const hei = computed(() => {
			return 'height: ' + (window.innerHeight - 190) + 'px;'
		})
		const switchSidebar = () => {
			if (splitterModel.value > 0) {
				splitterModel.value = 0
			} else splitterModel.value = 30
		}

		const filteredItems = computed(() => {
			return mySearch.filter((row) => {
				if (query.value) {
					return row.label.toLowerCase().includes(query.value.toLowerCase())
				}
				return mySearch
			})
		})

		const mySearch = [
			{ id: 0, label: 'Договора с Алросой' },
			{ id: 1, label: 'Документы к конференции' },
			{ id: 2, label: 'Мои просроченные задания' },
			{ id: 3, label: 'Отчет за 3 квартал' },
			{ id: 4, label: 'Отчет за 2 квартал' },
			{ id: 5, label: 'Я - автор' },
		]

		return {
			switchSidebar,
			splitterModel,
			hei,
			sidebar,
			query,
			temp,
			mySearch,
			filteredItems,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.list {
	border: 1px solid var(--my-border-color);
	background: var(--bg-drawer);
	padding: 0.5rem;
	margin-right: 0.5rem;
}
.main {
	border: 1px solid var(--my-border-color);
	margin-left: 0.5rem;
	height: 200px;
	background: var(--bg-card);
}
.query {
	font-size: 1rem;
}
.quick .q-field--dense .q-field__control,
.q-field--dense .q-field__marginal {
	height: 28px !important;
}
</style>
