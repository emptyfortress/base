<template lang="pug">
q-item-label(header) Основной цвет:
q-item
	.q-mx-md
		q-btn(round unelevated :color="swatch.color" v-for="swatch in swatches" :key="swatch.id" :id="swatch.id" @click="setColor(swatch.id, swatch.color)").swatch
			q-icon(name="mdi-check" v-if="swatch.icon")
.patch
	input(type="color" id="colorPatch" :value="patch" @input="changeColor")
	.q-ml-md Настроить основной цвет
br
q-separator
.patch
	input(type="color" id="linkPatch" :value="patch1" @input="changeLinkColor")
	.q-ml-md Настроить цвет линков
br
q-separator
</template>

<script>
import { ref } from 'vue'
import { colors } from 'quasar'

export default {
	props: {
		swatches: Array,
		title: String,
	},

	setup(props) {
		let patch = ref('#2196f3')
		let patch1 = ref('#2196f3')

		function RGBToHex(rgb) {
			let sep = rgb.indexOf(',') > -1 ? ',' : ' '
			rgb = rgb.substr(4).split(')')[0].split(sep)
			let r = (+rgb[0]).toString(16),
				g = (+rgb[1]).toString(16),
				b = (+rgb[2]).toString(16)
			if (r.length == 1) r = '0' + r
			if (g.length == 1) g = '0' + g
			if (b.length == 1) b = '0' + b
			return '#' + r + g + b
		}

		function hexToRGB(h) {
			let r = 0,
				g = 0,
				b = 0
			// 3 digits
			if (h.length == 4) {
				r = '0x' + h[1] + h[1]
				g = '0x' + h[2] + h[2]
				b = '0x' + h[3] + h[3]
				// 6 digits
			} else if (h.length == 7) {
				r = '0x' + h[1] + h[2]
				g = '0x' + h[3] + h[4]
				b = '0x' + h[5] + h[6]
			}
			return 'rgb(' + +r + ',' + +g + ',' + +b + ')'
		}

		const setColor = (id, e) => {
			document.querySelector('#col').className = ''
			document.querySelector('#col').classList.add(e)
			props.swatches.map((item) => (item.icon = false))
			let active = props.swatches.find((item) => item.color === e)
			active.icon = true
			let myBt = document.getElementById(id)
			let currentColor = window.getComputedStyle(myBt).backgroundColor
			patch.value = RGBToHex(currentColor)
		}
		const changeColor = () => {
			let currentColorName = props.swatches.find((item) => item.icon).color
			let newColor = document.getElementById('colorPatch').value
			let colorRgb = hexToRGB(newColor)
			let combineName = '--' + currentColorName
			document.body.style.setProperty(combineName, colorRgb)
		}
		const changeLinkColor = () => {
			let newColor = document.getElementById('linkPatch').value
			document.body.style.setProperty('--q-link', newColor)
		}

		return {
			patch,
			patch1,
			setColor,
			changeColor,
			changeLinkColor,
		}
	},
}
</script>

<style scoped lang="scss">
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
	color: var(--text-color);
	input {
		width: 50px;
		height: 50px;
		margin-left: 1rem;
	}
}
body.body--dark .q-item__label {
	color: var(--text-color);
}
</style>
