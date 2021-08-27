<template lang="pug">
.fixheight
	.zg
		.lin(@click="reset") Сбросить все
		.lin(@click="expand")
			span(v-if="expanded") Распахнуть все
			span(v-else) Свернуть все
	q-scroll-area.scroll
		q-expansion-item(v-model="item.model" v-for="item in items" :label="item.label" :header-style="{ fontWeight: 'bold' }")
			Aggregat(:list="item.list" :block="item.id")
</template>

<script>
import {ref, reactive, computed} from 'vue'
import Aggregat from '@/components/common/Aggregat.vue'
export default {
	props: {
		data: Array
	},
	components: {
		Aggregat,
	},

	setup() {
		const panel = ref([])

		const items = reactive([
			{id: 0, label: 'Тип карточки', model: true,
				list: [
					{label: 'Документ', value: false, badge: ''},
					{label: 'Задание', value: false, badge: ''},
					{label: 'Группа заданий', value: false, badge: ''},
				]
			},
			{id: 1, label: 'Вид документа', model: true,
				list: [
					{label: 'Приказ', value: false, badge: ''},
					{label: 'Договор', value: false, badge: ''},
					{label: 'Служебная записка', value: false, badge: ''},
					{label: 'Заявление', value: false, badge: ''},
				]
			},
			{id: 2, label: 'Вид задания', model: false,
				list: [
					{label: 'На согласование', value: false, badge: ''},
					{label: 'На исполнение', value: false, badge: ''},
					{label: 'На ознакомление', value: false, badge: ''},
				]
			},
			{id: 3, label: 'Дата регистрации', model: false,
				list: [
					{label: 'Прошлый месяц', value: false, badge: ''},
					{label: 'Прошлая неделя', value: false, badge: ''},
					{label: 'Текущая неделя', value: false, badge: ''},
					{label: 'Текущий месяц', value: false, badge: ''},
				]
			},
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
