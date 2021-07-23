<template lang="pug">
.q-px-xl
	h4 Home
	p Count: {{ counter.count }}
	q-btn(@click="add") Add
	p Double: {{ counter.doubleCount }}
	p plus: {{ counter.doublePlusOne }}
</template>

<script>
import { useCounter } from '@/stores/counter'

export default {
	setup() {
		const counter = useCounter()
		const add = () => counter.increment()
		return {
			add,
			counter,
		}
	},
}
</script>

<style lang="scss"></style>
