<template lang="pug">
transition(name="scale-right" mode="out-in")
	.searchbox(v-if="poisk.searchMode")
		.where
			q-select(v-model="where" :options="scope" dense)
		.place
			q-btn(flat round dense size="10px" icon="mdi-star-outline" :disabled="poisk.model === ''" @click="newSearch").star
			q-input(v-model="poisk.model" outlined dense autofocus clearable
				@clear="clear"
				@keydown="showComplete = true"
				@keydown.esc="showComplete = false"
				ref="searchBox"
				).sbox
				q-list(v-show="poisk.model.length > 0 && showComplete" v-click-away="closeComplete").complete
					q-item(v-for="item in completes" :key="item.id" clickable v-ripple @click="setPoisk(item)")
						q-item-section
							q-item-label
								q-icon(name="mdi-star" size="12px")
								WordHighlighter(:query="poisk.model") {{ item.label }}
					q-item(v-for="item in hist" clickable v-ripple @click="setPoisk(item)")
						q-item-section
							q-item-label
								q-icon(name="mdi-magnify" size="12px")
								WordHighlighter(:query="poisk.model") {{ item }}
			q-btn(unelevated color="primary" label="Найти")

</template>

<script>
import { ref, computed } from 'vue'
import { usePoisk } from '@/stores/poisk'
import { useSearch } from '@/stores/search'
import WordHighlighter from 'vue-word-highlighter'
import { history } from '@/data.js'

export default {
	components: {
		WordHighlighter,
	},
	setup() {
		const poisk = usePoisk()
		const clear = () => {
			poisk.clearModel()
		}

		const search = useSearch()
		const newSearch = () => {
			search.saveSearch(poisk.model)
		}

		const showComplete = ref(true)

		const completes = computed(() => {
			const all = search.allSearch.filter((item) => {
				return item.label.includes(poisk.model)
			})
			return all
		})

		const hist = computed(() => {
			return history.filter((item) => item.includes(poisk.model))
		})

		const closeComplete = () => {
			if (showComplete.value) {
				showComplete.value = false
			}
		}

		const setPoisk = (e) => {
			if (typeof e === 'object' && e !== null) {
				poisk.setModel(e.label)
			} else if (typeof e === 'string' && e !== null) {
				poisk.setModel(e)
			}
		}

		return {
			setPoisk,
			hist,
			completes,
			showComplete,
			closeComplete,
			where: 'Везде',
			scope: ['Везде', 'В текущей папке', 'В моих папках'],
			poisk,
			clear,
			newSearch,
		}
	},
}
</script>

<style scoped lang="scss">
.searchbox {
	width: 100%;
	display: flex;
	align-items: center;
	.where {
		width: 150px;
		margin-right: 1rem;
	}
	.place {
		display: flex;
		width: 100%;
		margin-right: 1rem;
	}
	.sbox {
		position: relative;
		width: 100%;
		background: #fff;
		border-radius: 4px;
		height: 39px;
		margin-right: 8px;
	}
}
.complete {
	position: absolute;
	top: 40px;
	left: 0;
	width: 100%;
	max-height: 70vh;
	background: #fff;
	overflow: auto;
	z-index: 3;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
	color: var(--text-color);
	.q-icon {
		color: #aaa;
		margin-right: 0.5rem;
	}
}
.noresult {
	padding-left: 1rem;
	color: #aaa;
	/* padding: 1rem; */
}
.star {
	height: 12px;
	margin-top: 7px;
}
</style>
