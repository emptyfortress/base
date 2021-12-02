<template lang="pug">
transition(name="scale-right" mode="out-in")
	.searchbox(v-if="poisk.searchMode")
		.where
			q-select(v-model="where" :options="scope" dense)
		.place
			q-btn(flat round dense size="10px" icon="mdi-star-outline" :disabled="poisk.model === ''" @click="newSearch").star
			q-input(v-model="poisk.model" outlined dense autofocus clearable @clear="clear" ).sbox
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

		return {
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
		/* border: none; */
		width: 100%;
		background: #fff;
		border-radius: 4px;
		height: 39px;
		margin-right: 8px;
		/* color: #000; */
		/* padding: 0 0.8rem; */
	}
}
.complete {
	position: absolute;
	top: 40px;
	left: 0;
	width: 100%;
	max-height: 300px;
	background: #fff;
	overflow: auto;
}
.noresult {
	padding-left: 1rem;
	color: #aaa;
	/* padding: 1rem; */
}
.closeIcon {
	position: absolute;
	top: 3px;
	right: 1rem;
	font-size: 1.4rem;
	cursor: pointer;
}
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
	margin-right: 1rem;
}
.v-list-item:hover {
	background: #efefef;
}
.selection {
	background: #efefef;
}
.star {
	height: 12px;
	margin-top: 7px;
}
</style>
