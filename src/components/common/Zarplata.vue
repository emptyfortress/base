<template lang="pug">
.tb(:class="{ blur : !props.money}")
	.text-bold Начислено:
	.text-bold.text-right 75,000.45
	q-separator
	div Оплата по окладу:
	.text-right 50,000.00
	div Отпуск основной:
	.text-right 20,000.00
	.text-bold Удержано:
	.text-bold.text-right 12,129.15
	div НДФЛ:
	.text-right 12,129.15
	q-separator
	.text-bold Перечислено на карту:
	.text-bold.text-right 63,452.34
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
