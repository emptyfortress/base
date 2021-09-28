<template lang="pug">
.multi(:class="{ big : big }")
	.ro
		q-btn(flat round dense icon="mdi-close" @click="clear")
		.tot {{ selected }}
		.arr &rarr;
		q-btn(v-for="bt in btn" unelevated color="primary" size="12px"  @click="bt.action" :key="bt.label").action {{ bt.label }}
		.up
		q-btn(round flat dense icon="mdi-chevron-up" @click="setbig").chev
	.ro.bottom
		q-btn(unelevated size="12px" v-for="n in 4" color="grey" v-show="!delegation" :key="n").action Кнопка действий
		p(v-show="delegation") здесь выбор из справочника сотрудников
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
	height: 48px;
	width: 100%;
	transition: 0.3s ease all;
	.ro {
		width: 100%;
		padding: 0.5rem;
		padding-bottom: 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		&.bottom {
			margin-left: 96px;
		}
	}
	&.big {
		height: 100px;
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
	margin: 0 0.25rem;
}
.up {
	flex-grow: 1;
}
.chev {
	transition: 0.2s ease all;
	.big & {
		transform: rotate(180deg);
	}
}
</style>
