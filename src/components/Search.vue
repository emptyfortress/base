<template lang="pug">
.container
	.zag.q-mb-lg Настройка поисков и представлений
	q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei" @update:model-value="split")
		template(v-slot:before)
			q-scroll-area.list
				q-form.quick
					q-card-section.q-pt-xs
						q-input(dense
							v-model="query"
							autofocus
							clearable
							@clear="clearFilter"
							placeholder="filter"
							).query
							template(v-slot:prepend)
								q-icon(name="mdi-magnify")
				q-expansion-item(v-model="firstItem" header-class="text-bold")
					template(v-slot:header)
						q-item-section(avatar)
							q-icon(name="mdi-star-outline")
						q-item-section Мои поиски
						q-item-section(side) ({{mySearch.length}})

					q-list(dense).q-mb-lg
						q-item(v-for="item in mySearch" :key="item.id" tag="label" v-ripple :active="item.active" active-class="selected" @click.prevent="setActive(item.id)" )
							q-item-section(side top)
								q-btn(dense unelevated round icon="mdi-star" size="10px" @click.stop="setStar(item.id)")
							q-item-section
								q-item-label
									WordHighlighter(:query="query") {{ item.label }}
							q-item-section(v-show="commentList")
								div
									WordHighlighter(:query="query") {{ item.comment }}



				q-expansion-item(v-model="secondItem" header-class="text-bold")
					template(v-slot:header)
						q-item-section(avatar)
							q-icon(name="mdi-cloud-search-outline")
						q-item-section Другие поиски
						q-item-section(side) ({{otherSearch.length}})
					q-list(dense).q-mb-lg
						q-item(v-for="item in otherSearch" :key="item.id" tag="label" v-ripple :active="item.active" active-class="selected" @click.prevent="setActive(item.id)" )
							q-item-section(side top)
								q-btn(dense unelevated round icon="mdi-star-outline" size="10px" @click.stop="setStar(item.id)")
							q-item-section
								q-item-label
									WordHighlighter(:query="query") {{ item.label }}
		template(v-slot:after)
			.main
				.row.items-center.justify-between
					q-btn(flat round dense @click="switchSidebar")
						q-icon(name="mdi-forwardburger" v-if="splitterModel === 0")
						q-icon(name="mdi-backburger" v-else)
					#zg(contenteditable @blur="update") {{ sel.label }}
					.btngroup
						q-btn(outline size="10px" color="primary" @click="duble").q-mr-xs Дублировать
						q-btn(round flat icon="mdi-plus" dense color="primary" @click="addSearch")
				#comment(contenteditable @blur="updatecomment") {{sel.comment}}
				br
				q-tabs(v-model="tab" align="justify" inline-label dense active-color="primary-darken-2").tabs
					q-tab(name="query" icon="mdi-toy-brick-search-outline" label="Настройка критериев поиска")
					q-tab(name="mail" icon="mdi-monitor-dashboard" label="Настройка представления")
				q-tab-panels(v-model="tab" animated)
					q-tab-panel(name="query")
						p.q-ml-md Добавляйте критерии и настраивайте условия
						SearchForm(:id="sel.id")
					q-tab-panel(name="mail")
						p laksjdlakj
				.action
					q-btn(flat icon="mdi-trash-can-outline" label="Удалить поиск" color="primary" @click="deleteSearch")
					div
						q-btn(flat icon="mdi-share-variant" label="Поделиться" color="primary")
						q-btn(unelevated color="primary" icon="mdi-content-save-outline" label="Сохранить")
</template>

<script>
import { ref, reactive, computed, watch } from 'vue'
import WordHighlighter from 'vue-word-highlighter'
import SearchForm from '@/components/SearchForm.vue'
import { useSearch } from '@/stores/search'

export default {
	components: {
		WordHighlighter,
		SearchForm,
	},
	setup() {
		const search = useSearch()
		const allSearch = search.allSearch

		const firstItem = ref(true)
		const secondItem = ref(false)
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

		const setStar = (e) => {
			const index = allSearch.findIndex((item) => item.id === e)
			allSearch[index].star = !allSearch[index].star
		}

		const duble = () => {
			const listt = search.allList[sel.value.id].list
			const item = allSearch.filter((item) => item.active === true)[0]
			const oldlabel = item.label
			const newItem = {}
			newItem.label = oldlabel + ' (копия)'
			newItem.star = item.star
			newItem.active = true
			newItem.comment = item.comment
			newItem.id = allSearch.length
			allSearch.map((item) => (item.active = false))
			allSearch.push(newItem)
			search.allList.push({
				id: newItem.id,
				list: listt,
			})
		}

		const setActive = (e) => {
			const index = allSearch.findIndex((item) => item.id === e)
			allSearch.map((item) => {
				item.active = false
			})
			allSearch[index].active = true
		}

		const filteredItems = computed(() => {
			return allSearch.filter((row) => {
				if (query.value) {
					return (
						row.label.toLowerCase().includes(query.value.toLowerCase()) ||
						row.comment.toLowerCase().includes(query.value.toLowerCase())
					)
				}
				return allSearch
			})
		})

		const mySearch = computed(() => {
			return filteredItems.value.filter((item) => {
				return item.star
			})
		})
		const otherSearch = computed(() => {
			return filteredItems.value.filter((item) => {
				return !item.star
			})
		})
		const sel = computed(() => {
			return allSearch.filter((item) => item.active)[0]
		})

		const clearFilter = () => {
			query.value = ''
		}

		watch(query, (val) => {
			if (val !== null) {
				secondItem.value = true
				firstItem.value = true
			} else return
		})

		const update = () => {
			const zag = document.getElementById('zg')
			const text = zag.innerHTML
			const index = allSearch.findIndex((item) => item.active)
			allSearch[index].label = text
		}
		const updatecomment = () => {
			const comm = document.getElementById('comment')
			const text = comm.innerHTML
			const index = allSearch.findIndex((item) => item.active)
			allSearch[index].comment = text
		}

		const addSearch = () => {
			allSearch.map((item) => (item.active = false))
			let item = {}
			item.id = allSearch.length
			item.star = true
			item.active = true
			item.comment = 'Введите комментарий к поиску'
			item.label = 'Новый поиск'
			allSearch.push(item)
			search.allList.push({
				id: item.id,
				list: [{ id: 0, and: true, mod1: null, mod2: null, mod3: null }],
			})
		}

		const deleteSearch = () => {
			const index = allSearch.findIndex((item) => item.active)
			allSearch.splice(index, 1)
			allSearch[0].active = true
		}

		const commentList = ref(false)
		const split = (val) => {
			console.log(val)
			if (val > 44) {
				commentList.value = true
			} else commentList.value = false
		}

		return {
			split,
			commentList,
			switchSidebar,
			splitterModel,
			hei,
			sidebar,
			query,
			firstItem,
			secondItem,
			mySearch,
			otherSearch,
			filteredItems,
			setActive,
			setStar,
			sel,
			addSearch,
			deleteSearch,
			update,
			updatecomment,
			duble,
			clearFilter,
			tab: ref('query'),
			// calcList,
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
	height: calc(100vh - 195px);
}
.main {
	border: 1px solid var(--my-border-color);
	margin-left: 0.5rem;
	background: var(--bg-card);
	padding: 1rem;
	padding-top: 0.25rem;
}
.query {
	font-size: 1rem;
	flex-grow: 1;
}
.quick .q-field--dense .q-field__control,
.q-field--dense .q-field__marginal {
	height: 28px !important;
}
.selected {
	color: var(--q-primary-darken-2);
	background: var(--q-selection);
	.q-btn {
		color: var(--q-primary-darken-2);
	}
}
.fle {
	display: flex;
	gap: 1rem;
}
#zg {
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 600;
	padding: 0.5rem;
	padding-bottom: 0;
	&:hover {
		background: var(--bg-light);
	}
	&:focus {
		outline: none;
		border-bottom: 1px dotted var(--q-primary);
		background: var(--bg-light);
	}
}
.btngroup {
	margin-right: -0.5rem;
}
#comment {
	font-size: 0.9rem;
	margin-top: 1rem;
	padding: 0.5rem;
	padding-bottom: 0;
	/* text-align: center; */
	&:hover {
		background: var(--bg-light);
	}
	&:focus {
		outline: none;
		border-bottom: 1px dotted var(--q-primary);
		background: var(--bg-light);
	}
}
.tabs {
	background: #eee;
}
.action {
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;
}
</style>
