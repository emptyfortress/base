<template lang="pug">
.tb
	.text-bold Начислено:
	.text-bold.text-right(v-if="props.money") 75,000.45
	.text-right(v-else) ******
	q-separator
	div Оплата по окладу:
	.text-right(v-if="props.money") 50,000.00
	.text-right(v-else) ******
	div Отпуск основной:
	.text-right(v-if="props.money") 20,000.00
	.text-right(v-else) ******
	.text-bold Удержано:
	.text-bold.text-right(v-if="props.money") 12,129.15
	.text-right(v-else) ******
	div НДФЛ:
	.text-right(v-if="props.money") 12,129.15
	.text-right(v-else) ******
	q-separator
	.text-bold Перечислено на карту:
	.text-bold.text-right(v-if="props.money") 63,452.34
	.text-right(v-else) ******
</template>

<script setup lang="ts">
const props = defineProps({
	money: {
		type: Boolean,
		default: false,
	},
})
</script>

<style scoped lang="scss">
.tb {
	display: grid;
	grid-template-columns: auto 1fr;
	column-gap: 1rem;
	transition: 0.2s ease all;
	.q-separator {
		grid-column: 1/-1;
	}
	&.blur {
		filter: blur(7px);
	}
}
</style>
