<template lang="pug">
.charts
	div
		.legend Текущая неделя
		apexchart(:options="chartOptions1" :series="series1")
	div
		.legend История по неделям
		apexchart(:options="barOptions" :series="barSeries")
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
	components: {
		apexchart: VueApexCharts,
	},
	setup() {
		const series1 = [67, 84]

		const chartOptions1 = {
			chart: {
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					hollow: {
						size: '40%',
					},
				},
			},
			labels: ['Орлов П.И.', 'Производство'],
			legend: {
				show: true,
				position: 'bottom',
			},
		}

		const chartOptions = {
			chart: {
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					hollow: {
						size: '70%',
					},
				},
			},
			labels: ['Орлов П.И.'],
		}

		const series = [67]

		const barOptions = {
			chart: {
				type: 'area',
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'straight',
			},

			yaxis: {
				opposite: false,
			},
			legend: {
				horizontalAlign: 'left',
			},
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
				],
			},
		}

		const barSeries = [
			{
				name: 'Орлов П.И.',
				data: [55, 57, 65, 70, 77, 80, 67],
			},
			{
				name: 'Производство',
				data: [52, 64, 65, 62, 57, 70, 67],
			},
		]

		return {
			series,
			chartOptions,
			series1,
			chartOptions1,
			barSeries,
			barOptions,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.charts {
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
}
.legend {
	text-align: center;
	font-size: 0.9rem;
}
</style>
