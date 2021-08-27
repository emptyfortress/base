<template lang="pug">
.fixheight
	.zg
		.lin(@click="reset") Сбросить все
		.lin(@click="expand")
			span(v-if="expanded") Распахнуть все
			span(v-else) Свернуть все
	q-scroll-area.scroll
		q-expansion-item(v-model="item.model" v-for="item in items" :label="item.label")
			Aggregat()
</template>

<script>
import {ref, reactive, computed} from 'vue'
import Aggregat from '@/components/common/Aggregat.vue'
export default {
	components: {
		Aggregat,
	},

	setup() {
		const panel = ref([])

		const items = reactive([
			{id: 0, label: 'Тип карточки', model: false},
			{id: 1, label: 'Вид документа', model: true},
			{id: 2, label: 'Вид задания', model: false},
			{id: 3, label: 'Дата регистрации', model: false},
		])

		const expanded = computed( () => items.filter( el => el.model ).length <= 1 )

		const expand = () => {
			if (expanded.value) {
				items.map( el => el.model = true )
			} else items.map( item => item.model = false )
		}

		return {
			panel,
			items,
			expand,
			expanded,
		}
	},

}
</script>

<style scoped lang="scss">
.zg {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	height: 40px;
	padding: 0 0.5rem;
}
.lin {
	font-size: 0.8rem;
	color: var(--q-link);
	cursor: pointer;
}
section {
	.q-card__section {
		padding-top: 0;
		padding-right: 5px;
	}
}
.scroll {
	height: calc(100vh - 200px);
}
</style>
