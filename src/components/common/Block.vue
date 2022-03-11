<template lang="pug">
Flipped(:flipId="`box-${index}`" v-if="focused === index" @on-start="handleStart")
	.block
		v-btn(fab color="dark" dark small @click="toggle(index)").close
			v-icon mdi-close
		Flipped(:inverseFlipId="`box-${index}`")
			div
				.hd
					Flipped(:flipId="`hd-${index}`")
						.txt {{ block.title }}
					Flipped(:flipId="`dig-${index}`" v-if="block.digit")
						.dig(:class="block.down ? '' : 'red--text'")
							span(v-if="block.down") &darr;
							span(v-else) &uarr;
							span {{ block.digit }}

				listTable(v-if="index === 0 && tasks.length")
				Urgent(v-if="index === 1")
				controlTable(v-if="index === 2")
				Soglas(v-if="index === 3")

				Flipped(:flipId="`big-${index}`" v-if="index === 3")
					.big 3

				Flipped(flipId="graf" v-if="index === 4")
					.charts
						div
							apexchart(type="radialBar" height="260" :options="chartOptions" :series="series")
							.legend Текущая неделя
						div
							apexchart(type="bar" height="250" width="600" :options="barOptions" :series="barSeries")
							.legend Дисциплина отдела "Производство" по неделям

				Flipped(flipId="people" v-if="index === 5")
					.charts
						.us
							UserLoad
						.us
							Donut

				v-slide-x-transition(mode="out-in")
					.empty(v-if="!tasks.length" @click="toggle(index)")
						img(src="@/assets/img/man.svg")
						div Нет новых заданий

				.d-flex.align-center.mt-5(v-if="index < 3")
					Flipped(:flipId="`big-${index}`")
						.big
							span(v-if="selected !== 0") {{ selected }}
							span(v-if="selected !== 0").iz из
							span {{ total(index) }}
					v-slide-x-transition(mode="out-in")
						v-btn(depressed v-if="selected !== 0" @click="read").ml-6 {{ block.but }}
					v-slide-x-transition(mode="out-in")
						v-btn(depressed  v-if="selected !== 0").ml-2 {{ block.but1}}

</template>

<script>
import { Flipper, Flipped } from 'vue-flip-toolkit'
// import listTable from '@/components/listTable'
// import controlTable from '@/components/controlTable'
// import Urgent from '@/components/Urgent'
// import VueApexCharts from 'vue-apexcharts'
// import UserLoad from '@/components/UserLoad'
// import Donut from '@/components/Donut'
// import Soglas from '@/components/Soglas'

import anime from 'animejs'
// import { mapGetters } from 'vuex'

export default {
	props: ['block', 'index', 'focused'],
	data() {
		return {
			series: [70],
			chartOptions: {
				chart: {
					height: 250,
					type: 'radialBar',
				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '70%',
						},
					},
				},
				labels: ['Производство'],
			},
			barOptions: {
				xaxis: {
					categories: [23, 24, 25, 26, 27, 28, 29, 30],
				},
			},
			barSeries: [
				{
					name: 'series-1',
					data: [72, 77, 74, 66, 49, 82, 70, 73],
				},
			],
		}
	},
	computed: {
		...mapGetters(['tasks']),
		selected() {
			return this.tasks.filter((item) => item.selected).length
		},
	},
	components: {
		Flipper,
		Flipped,
		listTable,
		controlTable,
		Urgent,
		apexchart: VueApexCharts,
		UserLoad,
		Donut,
		Soglas,
	},
	methods: {
		total(e) {
			switch (e) {
				case 0:
					return this.tasks.length
				case 1:
					return this.tasks.filter((item) => item.urgent).length
				case 2:
					return this.tasks.filter((item) => item.control).length
				default:
					return 0
			}
		},
		read() {
			let temp = this.tasks.filter((item) => !item.selected)
			this.$store.commit('setTasks', temp)
		},
		toggle(e) {
			this.$emit('change', e)
		},
		handleStart({ el }) {
			const squares = el.querySelectorAll('.slide')
			anime({
				targets: squares,
				translateY: [30, 0],
				opacity: [0, 1],
				delay: anime.stagger(120, { start: 500, easing: 'easeInQuad' }),
			})
			const close = el.querySelector('.close')
			anime({
				targets: close,
				opacity: 1,
				duration: 200,
				rotate: 360,
				scale: [0, 1],
				delay: 700,
			})
		},
	},
	created() {
		const escapeHandler = (e) => {
			if (e.key === 'Escape' && this.focused === this.index) {
				this.toggle(this.index)
			}
		}
		document.addEventListener('keydown', escapeHandler)
		this.$once('hook:destroyed', () => {
			document.removeEventListener('keydown', escapeHandler)
		})
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.block {
	position: absolute;
	left: 0;
	top: 100px;
	background: #fff;
	width: 100%;
	border-radius: 4px;
	padding: 2rem;
	z-index: 7;
	box-shadow: 0 3px 10px #ccc;
	border: 1px solid #dedede;
	.hd {
		display: flex;
		justify-content: space-between;
	}
	.dig {
		margin-top: 5px;
	}
	.txt {
		font-size: 1.3rem;
		margin-right: 2rem;
	}
	.close {
		position: absolute;
		top: -20px;
		right: -20px;
		opacity: 0;
	}
}
.charts {
	display: flex;
	justify-content: space-around;
	.us {
		width: 50%;
	}
}
.big {
	font-size: 2.3rem;
	line-height: 100%;
	margin-top: 0.5rem;
	color: $accent;
}
.txt .v-icon {
	transform: translateY(-3px);
	margin-right: 0.5rem;
}
.dig {
	color: green;
}
.iz {
	margin: 0 0.5rem;
	font-size: 1rem;
}
.empty {
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 400px;
	margin-top: 2rem;
	img {
		width: 150px;
		display: block;
	}
}
.legend {
	text-align: center;
	font-size: 0.9rem;
}
/* .chart { */
/* 	width: 50%; */
/* } */
</style>
