<template lang="pug">
.widget(:class="block.classname")
	.hd(@click="showAll") {{ block.title }} - {{block.digit}}
	.charts(v-if="index < 2")
		apexchart(:options="chartOptions" :series="series" v-if="index === 0 || index === 1" @dataPointSelection="dataPointSelection" )
	Mydoc(v-if="index === 4")

q-dialog(v-model="alert" full-width)
	q-card
		q-card-section.row.q-pb-none
			.text-h6 {{ block.title }} - {{ block.digit }}
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)
		q-card-section(class="q-pt-none")
			DashTable(:block="block")

</template>

<script>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import DashTable from '@/components/common/DashTable.vue'
import Mydoc from '@/components/Mydoc.vue'
import { useWidget } from '@/stores/widget'

export default {
	components: {
		apexchart: VueApexCharts,
		DashTable,
		Mydoc,
	},
	props: ['index', 'block'],
	setup(props) {
		const series = ref(props.block.seria)

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

		const widget = useWidget()
		const alert = ref(false)

		const toggle = () => {
			alert.value = !alert.value
		}
		const showAll = () => {
			widget.selected = null
			toggle()
			console.log(props.block)
		}

		const dataPointSelection = (event, chartContext, config) => {
			toggle()
			widget.selected = config.dataPointIndex
		}

		return {
			showAll,
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
	&.long {
		grid-column: 2/4;
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
</style>
