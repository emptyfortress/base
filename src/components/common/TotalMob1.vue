<template lang="pug">
q-card.multi
	.ro
		q-btn(flat round dense icon="mdi-close" @click="clear")
		.tot {{ selected }}
		.arr &rarr;
		span Выбрано элементов
	q-list(separator)
		q-item(clickable v-ripple v-for="item in btn" :key="item.id" @click="clear")
			q-item-section.text-uppercase.text-bold {{ item.label }}
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
		clear() {
			this.$emit('clear')
		},
	},
}
</script>

<style scoped lang="scss">
.multi {
	padding-top: 0.25rem;
	// background: #e5e5e5;
	border-top: 3px solid var(--q-primary);
	text-align: center;
	box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.3);
	.ro {
		padding: 0.5rem;
		padding-bottom: 0;
		display: flex;
		justify-content: center;
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
