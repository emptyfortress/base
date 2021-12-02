<template lang="pug">
.sub
	mySelect(label="Тип" :options="options1").sel
	mySelect(label="Вид" :options="options2").sel
	mySelect(label="Статус" :options="options3").sel
	mySelect(label="Автор" :options="options4").sel
	mySelect(autofocus v-if="showExtra" :label="poisk.extra" :options="options5").sel
	q-btn(v-if="!showExtra" flat dense icon="mdi-plus")
		q-menu(persistent)
			q-list
				q-item
					q-item-section
						q-input(dense)
				q-item(v-for="item in list" clickable v-close-popup @click="toggleExtra(item)")
					q-item-section {{ item.label }}
</template>

<script>
import { ref, computed, watchEffect } from 'vue'
import { names, type, vid, status, values } from '@/data.js'
import mySelect from '@/components/common/mySelect.vue'
import { usePoisk } from '@/stores/poisk'

const nameOptions = names
const typeOptions = type
const vidOptions = vid
const statusOptions = status
const valueOptions = values

export default {
	components: {
		mySelect,
	},
	setup() {
		const options1 = ref(typeOptions)
		const options2 = ref(vidOptions)
		const options3 = ref(statusOptions)
		const options4 = ref(nameOptions)
		const options5 = ref(valueOptions)

		const list = [
			{ id: 0, label: 'Рег. номер', action: '' },
			{ id: 1, label: 'Дата регистрации', action: '' },
			{ id: 2, label: 'Создано', action: '' },
			{ id: 3, label: 'Изменено', action: '' },
			{ id: 4, label: 'Срок исполнения', action: '' },
			{ id: 5, label: 'Контролер', action: '' },
			{ id: 6, label: 'Подготовил', action: '' },
			{ id: 7, label: 'Контрагент', action: '' },
			{ id: 8, label: 'Согласующие', action: '' },
			{ id: 9, label: 'Подписывает', action: '' },
			{ id: 10, label: 'Получатели', action: '' },
		]

		const poisk = usePoisk()

		const showExtra = ref(false)
		const toggleExtra = (e) => {
			poisk.updateExtra(e.label)
			showExtra.value = true
		}

		return {
			poisk,
			list,
			toggleExtra,
			showExtra,
			options1,
			options2,
			options3,
			options4,
			options5,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.sub {
	padding: 0 1rem;
	display: flex;
	justify-content: center;
	gap: 2rem;
}
.sel {
	width: 150px;
	font-size: 0.8rem;
	line-height: 120%;
	/* margin-top: -1px; */
}
</style>
