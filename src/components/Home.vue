<template lang="pug">
.q-px-xl
	h4 Home
	div
		router-link(to="/") Это линк
	q-toggle(v-model="dark" :color="colors.primary")
	p Count: {{ counter.count }}
	q-btn(@click="add" unelevated color="primary").q-mr-sm primary
	q-btn(@click="add" unelevated color="accent").q-mr-sm accent
	q-btn(@click="add" unelevated color="positive").q-mr-sm positive
	q-btn(@click="add" unelevated color="negative").q-mr-sm negative
	q-btn(@click="add" unelevated color="info").q-mr-sm info
	q-btn(@click="add" unelevated color="warning").q-mr-sm warn
	q-btn(@click="add" unelevated color="dark").q-mr-sm dark

	p Double: {{ counter.doubleCount }}
	p plus: {{ counter.doublePlusOne }}
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
.test {
	height: 300px;
	width: 50%;
}
</style>
