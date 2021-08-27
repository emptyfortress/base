<template lang="pug">
.fixheight
	.zg
		.lin(@click="reset") Сбросить все
		.lin(@click="expand")
			span(v-if="expanded") Распахнуть все
			span(v-else) Свернуть все
	.common
		section
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
.common {
	height: calc(100vh - 200px);
	border-right: 1px solid silver;
	overflow-y: scroll;
	overflow-x: hidden;
	mask-image: linear-gradient(to top, transparent, black),
		linear-gradient(to left, transparent 17px, black 17px);
	mask-size: 100% 20000px;
	mask-position: left bottom;
	-webkit-mask-image: linear-gradient(to top, transparent, black),
		linear-gradient(to left, transparent 17px, black 17px);
	-webkit-mask-size: 100% 20000px;
	-webkit-mask-position: left bottom;
	transition: mask-position 0.3s, -webkit-mask-position 0.3s;
	&:hover {
		-webkit-mask-position: left top;
	}
}
section {
	.q-card__section {
		padding-top: 0;
		padding-right: 5px;
	}
}
</style>
