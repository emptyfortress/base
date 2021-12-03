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
				q-list(v-show="poisk.model.length > 1 && showComplete" v-click-away="closeComplete").complete
					q-item(v-for="item in completes" :key="item.id" clickable v-ripple)
						q-item-section
							q-item-label Fuck
			q-btn(unelevated color="primary" label="Найти")
//- 			v-list(v-show="query.length > 0 && searchResultsVisible" v-model="history" dense elevation="1").complete
//- 				v-list-item-group
//- 					v-list-item(v-for="(post, index) in searchResults" :key="index"
//- 						href=""
//- 						@mousedown.prevent="searchResultsVisible = true"
//- 						:class="{'selection' : index === highlightedIndex}"
//- 						ref="results"
//- 						@click="goToLink(index)"
//- 						)
//- 						v-list-item-icon
//- 							v-icon(size="20" color="#aaa") mdi-clock-time-two-outline
//- 						v-list-item-content {{ post.item.txt }}
//- 				.noresult(v-show="searchResults.length === 0") Нет предыдущих поисков с '{{ query }}'

</template>

<script>
import { usePoisk } from '@/stores/poisk'
import { useSearch } from '@/stores/search'
import { ref } from 'vue'

export default {
	components: {},
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

		const completes = search.allSearch
		const closeComplete = () => {
			if (showComplete.value) {
				showComplete.value = false
			}
		}

		return {
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
