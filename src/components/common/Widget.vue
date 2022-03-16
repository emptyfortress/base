<template lang="pug">
.widget
	.hd {{ block.title }} - {{block.digit}}
	.charts
		apexchart(:options="chartOptions" :series="series" v-if="index === 0" @dataPointSelection="dataPointSelection")

q-dialog(v-model="alert")
	q-card
		q-card-section.row
			.text-h6 {{ block.title }}
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)
		q-card-section(class="q-pt-none") {{ props.block.title }}
		q-card-actions(align="right")
			q-btn(flat label="OK" color="primary" v-close-popup)
</template>

<script>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

export default {
	components: {
		apexchart: VueApexCharts,
	},
	props: ['index', 'block'],
	setup(props) {
		const series = [5, 3, 4, 2]
		const chartOptions = {
			chart: {
				type: 'donut',
			},
			plotOptions: {
				pie: {
					donut: {
						size: '50%',
						background: 'transparent',
						labels: {
							show: true,
							name: {
								show: false,
							},
							value: {
								show: true,
								fontSize: '27px',
								fontFamily: 'Helvetica, Arial, sans-serif',
								color: undefined,
								formatter: function (val) {
									return val
								},
							},
							total: {
								show: true,
								label: 'Всего',
								color: '#373d3f',
								formatter: function (w) {
									return w.globals.seriesTotals.reduce((a, b) => {
										return a + b
									}, 0)
								},
							},
						},
					},
				},
			},
			tooltip: {
				enabled: false,
			},
			legend: {
				show: true,
			},
			dataLabels: {
				enabled: true,
				formatter: (val) => Math.round((props.block.digit / 100) * val),
			},
			labels: ['Новые', 'В работе', 'На контроле', 'Отв.исполнение'],
			colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
		}

		const alert = ref(false)

		const toggle = (e) => {
			alert.value = !alert.value
			// console.log(e)
		}
		const dataPointSelection = (event, chartContext, config) => {
			toggle()
			console.log(chartContext)
			console.log(config)
		}

		return {
			toggle,
			alert,
			props,
			series,
			chartOptions,
			dataPointSelection,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.widget {
	width: 100%;
	background: var(--bg-card);
	border-radius: 4px;
	border: 1px solid var(--bg-card);
	padding: 0.5rem;
	position: relative;
	cursor: pointer;
	&:hover {
		/* box-shadow: 0 3px 10px #ccc; */
		border: 1px solid var(--my-border-color);
	}
}
.hd {
	font-size: 1.1rem;
	color: var(--q-link);
}
.charts {
	margin-top: 1rem;
	width: 100%;
	/* display: flex; */
	/* justify-content: flex-start; */
}
</style>
