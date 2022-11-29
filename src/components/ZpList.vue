<template lang="pug">
.zpgrid
	template(v-for="item in list")
		.bl
			.month {{item}}, 2022
			component(:is="Zarplata" money)
</template>

<script setup>
import Zarplata from '@/components/common/Zarplata.vue'

const list = [
	'январь',
	'февраль',
	'март',
	'апрель',
	'май',
	'июнь',
	'июль',
	'август',
	'сентябрь',
	'октябрь',
]
</script>

<style scoped lang="scss">
.zpgrid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	.bl {
		background: #efefef;
		padding: 0.3rem 0.7rem;
	}
}
.month {
	text-transform: capitalize;
	font-weight: bold;
	color: var(--q-accent);
}
</style>
