<template lang="pug">
.widget(:class="block.classname")
	.hd(@click="showAll")
		q-icon(v-if="index === 4" name="mdi-star-outline" size="sm").q-mr-sm
		span {{ block.title }} - {{block.digit}}
		.charts(v-if="index < 2")
		apexchart(:options="chartOptions" :series="series" v-if="index === 0 || index === 1" @dataPointSelection="dataPointSelection" )
	.charts(v-if="index === 2" @click="showDisc")
		//- apexchart(type="radialBar" :options="chartOptions1" :series="series1")
		apexchart(type="area" :options="chartOptions2" :series="series2")
	Mydoc(v-if="index === 3")

q-dialog(v-model="alert" :full-width="calcWidth")
	q-card
		q-card-section.row.q-pb-none
			.text-h6 {{ block.title }} - {{ block.digit }}
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup @click="clear")
		q-card-section(class="q-pt-none" style="overflow: hidden;")
			DashTable(:block="block" v-if="block.id < 2")
			Discipline(v-if="index === 2")

</template>

<script>
import { ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import DashTable from '@/components/common/DashTable.vue'
import Mydoc from '@/components/Mydoc.vue'
import Discipline from '@/components/Discipline.vue'
import { useWidget } from '@/stores/widget'

export default {
	components: {
		apexchart: VueApexCharts,
		DashTable,
		Mydoc,
		Discipline,
	},
	props: ['index', 'block'],
	setup(props) {
		const series = ref(props.block.seria)
		const series1 = [67]

		const series2 = [
			{
				name: 'Дисциплина',
				data: [55, 57, 65, 70, 77, 80, 67],
			},
		]

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
								showAlways: true,
								// label: 'Всего',
								// color: '#373d3f',
								// color: 'red',
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
			labels: props.block.labels,
			colors: ['#2E93fA', '#66DA26', '#E91E63', '#546E7A', '#FF9800'],
		}

		const chartOptions1 = {
			chart: {
				type: 'radialBar',
				offsetY: -32
			},
			plotOptions: {
				radialBar: {
					startAngle: -90,
					endAngle: 90,
					dataLabels: {
						name: {
							fontSize: '16px',
							color: 'black',
							offsetY: 30
						},
						value: {
							offsetY: -31,
							fontSize: '26px',
							color: undefined,
							formatter: function (val) {
								return val + '%'
							}
						}
					}
				}
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'dark',
					shadeIntensity: 0.15,
					inverseColors: false,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 50, 65, 91]
				},
			},
			stroke: {
				dashArray: 2
			},
			labels: ['Орлов П.И.'],
		}

		const chartOptions2 = {
			xaxis: {
				type: 'datetime',
				categories: [
					'2022-03-04',
					'2022-03-11',
					'2022-03-18',
					'2022-03-24',
					'2022-04-01',
					'2022-04-08',
					'2022-04-14',
				]
			},
			chart: {
				type: 'area',
				// height: 350,
				zoom: {
					enabled: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'straight'
			},

			title: {
				text: 'Орлов П.И.',
				align: 'left'
			},
			subtitle: {
				text: 'По неделям',
				align: 'left'
			},
			// labels: series.monthDataSeries1.dates,
			yaxis: {
				opposite: true
			},
			legend: {
				horizontalAlign: 'left'
			}
		}

		const widget = useWidget()
		const alert = ref(false)

		const showDisc = () => {
			widget.block = 2
			alert.value = true
		}

		const calcWidth = computed(() => {
			if (props.block.id !== 2) {
				return true
			} else return false
		})

		const toggle = () => {
			alert.value = !alert.value
		}
		const showAll = () => {
			widget.selected = null
			if (props.index < 2) {
				toggle()
			}
		}
		const clear = () => {
			setTimeout(() => {
				widget.block = null
				widget.chip = null
			}, 500)
		}

		const dataPointSelection = (event, chartContext, config) => {
			toggle()
			widget.chip = config.dataPointIndex
		}

		return {
			showDisc,
			calcWidth,
			clear,
			showAll,
			toggle,
			alert,
			props,
			series,
			series1,
			series2,
			chartOptions,
			chartOptions1,
			chartOptions2,
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
	&.long {
		grid-column: 1/-1;
	}
	&:hover {
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
}
.q-dialog__inner--minimized>div {
	min-width: 700px;
}
</style>
