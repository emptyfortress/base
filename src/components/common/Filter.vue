<template lang="pug">
q-card.quick.shadow-3(v-show="filterByIndex === col" @click.stop)
	template(v-if="datum")
		.q-pa-sm
			.q-gutter-sm
				q-radio(v-model="dateView" val="shab" label="Шаблон")
				q-radio(v-model="dateView" val="jur" label="Журнал")
				q-radio(v-model="dateView" val="cal" label="Дата")
		q-separator
		q-tab-panels(v-model="dateView" animated)
			q-tab-panel(name="shab")
				p laksjd
			q-tab-panel(name="jur")
				p laksj
			q-tab-panel(name="cal")
				.cal
					q-date(v-model="mydate" flat range today-btn)
	template(v-else)
		Journal(:data="data")
	q-separator
	q-card-actions(align="between")
		q-btn(flat round size="12px" icon="mdi-trash-can-outline" color="negative" @click="clearAll")
			q-tooltip Очистить и закрыть
		q-btn(flat size="12px" color="primary" @click="$emit('close')") Применить
</template>

<script>
import { ref } from 'vue'
import Journal from '@/components/common/Journal.vue'

export default {
	props: ['filterByIndex', 'col', 'data', 'datum' ],
	components: {
		Journal,
	},
	setup() {

		const mydate = ref({from: '2021/08/01', to: '2021/08/07'})

		const dateView = ref('shab')

		return {
			mydate,
			dateView,
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
	min-width: 230px;
	padding: .5rem .25rem 0;
	border-radius: 0 0 6px 6px;
}
.cal {
	white-space: normal;
}
</style>
