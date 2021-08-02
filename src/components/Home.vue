<template lang="pug">
.q-px-xl
	h4 Палитра цветов
	.palitra
		div
			q-btn(unelevated color="primary").full-width primary
			q-btn(unelevated color="primary-lighten-1" text-color="primary-darken-2").full-width lighten-1
			q-btn(unelevated color="primary-lighten-2" text-color="primary-darken-2").full-width lighten-2
			q-btn(unelevated color="primary-lighten-3" text-color="primary-darken-2").full-width lighten-3
		div
			q-btn(unelevated color="primary").full-width primary
			q-btn(unelevated color="primary-darken-1" ).full-width darken-1
			q-btn(unelevated color="primary-darken-2" ).full-width darken-2
			q-btn(unelevated color="primary-darken-3" ).full-width darken-3


	p
		span.q-mr-md Основной цвет
		q-btn(@click="add" unelevated color="primary") primary
	p
		span.q-mr-md Темный вариант
		q-btn(@click="add" unelevated color="primary-darken-1" ).q-mr-sm darken-1
		q-btn(@click="add" unelevated color="primary-darken-2" ).q-mr-sm darken-2
		q-btn(@click="add" unelevated color="primary-darken-3" ).q-mr-sm darken-3
	q-btn(@click="add" unelevated color="accent").q-mr-sm accent
	q-btn(@click="add" unelevated color="positive").q-mr-sm positive
	q-btn(@click="add" unelevated color="negative").q-mr-sm negative
	q-btn(@click="add" unelevated color="info").q-mr-sm info
	q-btn(@click="add" unelevated color="warning").q-mr-sm warn
	q-btn(@click="add" unelevated color="dark").q-mr-sm dark
	div
		router-link(to="/") Это линк
		q-toggle(v-model="dark" :color="colors.primary")

	//- p Count: {{ counter.count }}
	//- p Double: {{ counter.doubleCount }}
	//- p plus: {{ counter.doublePlusOne }}
	br
	br
	q-card.test
		p lakjs dlk
	br
	br
	p(v-for="n in 17") Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.


</template>

<script>
import { useCounter } from '@/stores/counter'
import { useColor } from '@/stores/colors'
import { ref } from 'vue'

export default {
	setup() {
		const counter = useCounter()

		const add = () => {
			counter.increment()
		}
		const dark = ref(false)

		const colors = useColor()

		return {
			colors,
			add,
			counter,
			dark,
		}
	},
}
</script>

<style lang="scss">
.palitra {
	display: grid;
	grid-template-columns: repeat(2, 200px);
	gap: 1rem;
	margin-bottom: 2rem;
	.color {
		height: 50px;
		width: 100%;
	}
}
.test {
	height: 300px;
	width: 50%;
}
</style>
