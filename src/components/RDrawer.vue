<template lang="pug">
q-drawer(v-model="show" side="right" bordered )
	q-item
		q-toggle( v-model="dark" label="Темная тема" color="primary")
	q-separator
	q-item-label(header) Выберите основной цвет:
	.q-mx-md
		q-btn(round unelevated :color="swatch.color" v-for="swatch in swatches" @click="setColor(swatch.color)").swatch
			q-icon(name="mdi-check" v-if="swatch.icon")

</template>

<script>
import { ref, reactive, watch } from 'vue'
import { useQuasar } from 'quasar'
// import { useColor } from '@/stores/colors'

export default {
	props: ['show'],
	setup(props) {
		const dark = ref(false)
		const $q = useQuasar()
		// const color = useColor()

		const swatches = reactive([
			{ id: 1, color: 'one', icon: true },
			{ id: 2, color: 'two', icon: false },
			{ id: 3, color: 'three', icon: false },
			{ id: 4, color: 'four', icon: false },
		])

		const setColor = (e) => {
			document.querySelector('#col').className = ''
			document.querySelector('#col').classList.add(e)
			swatches.map((item) => (item.icon = false))
			let active = swatches.find((item) => item.color === e)
			active.icon = true
		}

		watch(
			() => dark.value,
			() => {
				$q.dark.toggle()
			}
		)

		return { dark, props, swatches, setColor }
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';
.left {
	background: $dark;
	color: #fff;
}
.q-item__label {
	color: var(--my-text-color);
}
.swatch {
	margin-right: 0.5rem;
	font-size: 1rem;
}
</style>
