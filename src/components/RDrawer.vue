<template lang="pug">
q-drawer(v-model="show" side="right" bordered )
	q-item-label(header) Основной цвет:
	q-item
		.q-mx-md
			q-btn(round unelevated :color="swatch.color" v-for="swatch in swatches" :key="swatch.id" :id="swatch.id" @click="setColor(swatch.id, swatch.color)").swatch
				q-icon(name="mdi-check" v-if="swatch.icon")
	.patch
		.label Настроить цвет:
		input(type="color" id="colorPatch" :value="patch" @input="changeColor")
		
	br
	q-separator
	q-item
		q-toggle( v-model="color.toolbar" label="Контрастный тулбар" color="primary")
	q-item
		q-toggle( v-model="color.panel" label="Контрастная панель" color="primary")

	q-separator
	q-item
		q-toggle( v-model="dark" label="Темная тема" color="primary")
</template>

<script>
import { ref, reactive, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useColor } from '@/stores/colors'

export default {
	props: ['show'],
	setup(props) {
		const dark = ref(false)
		const toolbar = ref(false)
		const panel = ref(false)
		const $q = useQuasar()
		const color = useColor()
		let patch = ref('#ff0000')

		onMounted(() => {
			let myBt = document.getElementById('one')
			let temp = window.getComputedStyle(myBt).backgroundColor
			let hex = RGBToHex(temp)
			patch.value = hex
		})

		function RGBToHex(rgb) {
			// Choose correct separator
			let sep = rgb.indexOf(',') > -1 ? ',' : ' '
			// Turn "rgb(r,g,b)" into [r,g,b]
			rgb = rgb.substr(4).split(')')[0].split(sep)

			let r = (+rgb[0]).toString(16),
				g = (+rgb[1]).toString(16),
				b = (+rgb[2]).toString(16)

			if (r.length == 1) r = '0' + r
			if (g.length == 1) g = '0' + g
			if (b.length == 1) b = '0' + b

			return '#' + r + g + b
		}

		const swatches = reactive([
			{ id: 'one', color: 'one', icon: true },
			{ id: 'two', color: 'two', icon: false },
			{ id: 'three', color: 'three', icon: false },
			{ id: 'four', color: 'four', icon: false },
		])

		const setColor = (id, e) => {
			document.querySelector('#col').className = ''
			document.querySelector('#col').classList.add(e)
			swatches.map((item) => (item.icon = false))
			let active = swatches.find((item) => item.color === e)
			active.icon = true
			let myBt = document.getElementById(id)
			let currentColor = window.getComputedStyle(myBt).backgroundColor
			patch.value = RGBToHex(currentColor)
		}
		const changeColor = () => {
			let currentColorName = swatches.find((item) => item.icon).color
			let newColor = document.getElementById('colorPatch').value
			let combineName = '--q-' + currentColorName
			document.body.style.setProperty(combineName, newColor)
			console.log(newColor)
			console.log(combineName)
		}

		watch(
			() => dark.value,
			() => {
				$q.dark.toggle()
			}
		)

		return {
			patch,
			dark,
			toolbar,
			panel,
			color,
			props,
			swatches,
			setColor,
			changeColor,
		}
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
.patch {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-left: 1rem;
	margin-top: 1rem;
	input {
		width: 50px;
		height: 50px;
		margin-left: 1rem;
	}
}
</style>
