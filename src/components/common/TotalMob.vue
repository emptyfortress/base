<template lang="pug">
q-card.multi
	.ro
		q-btn(flat round dense icon="mdi-close" @click="clear")
		.tot {{ selected }}
		.arr &rarr;
		.ro
			q-btn(v-for="bt in btn" unelevated color="primary" size="md" @click="bt.action" :key="bt.label").action {{ bt.label }}
</template>

<script>
export default {
	props: ['selected'],

	data() {
		return {
			big: false,
			delegation: false,
			btn: [
				{ label: 'Делегировать', action: this.deleg },
				{ label: 'Прочитать', action: this.clear },
				{ label: 'Завершить', action: this.clear },
			],
		}
	},
	methods: {
		setbig() {
			this.delegation = false
			this.big = !this.big
		},
		empty() {
			return
		},
		deleg() {
			this.big = !this.big
			this.delegation = !this.delegation
		},
		clear() {
			this.$emit('clear')
		},
	},
}
</script>

<style scoped lang="scss">
.multi {
	padding: 1rem;
	padding-top: 0.25rem;
	background: #e5e5e5;
	border-top: 3px solid var(--q-primary);
	.ro {
		padding: 0.5rem;
		padding-bottom: 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		// flex-wrap: wrap;
		&.bottom {
			margin-left: 96px;
		}
	}
}
.tot {
	font-size: 1.1rem;
	font-weight: bold;
}
.arr {
	font-size: 1.2rem;
	margin: 0 1rem;
}
.action {
	margin: 4px;
}
.up {
	flex-grow: 1;
}
.chev {
	transition: 0.2s ease all;
}
</style>
