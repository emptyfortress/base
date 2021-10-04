<template lang="pug">
.ld(v-if="loading")
	q-linear-progress(indeterminate)
.lenta
	q-card(v-for="item in items" flat square bordered :key="item.id" :class="setClass(item)").listitem
		.read(@click="toggle(item.id)")
		.flex
			q-checkbox(:model-value="item.selected" @update:model-value="setItems(item)")
			div
				.top0
					.typ {{ item.typ}}
					.status {{ item.status}}
				.title
					span {{ item.title}}
				.top
					.autor Автор: {{ item.author}}
					.srok Дата: {{ item.changed }}
					.srok(v-if="item.num") Вложения: {{ item.num }}
				.descr {{ item.digest}}
</template>

<script>
import { computed, watchEffect } from 'vue'
import { useGrid } from '@/stores/grid'

export default {
	components: [],
	props: {
		items: {
			type: Array,
			required: true,
		},
		total: {
			type: Number,
			default: 0,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	},

	setup(props) {
		const grid = useGrid()

		const toggle = (e) => {
			const current = props.items.find((b) => b.id === e)
			current.unread = !current.unread
		}
		const selected = computed(() => {
			return props.items.filter((item) => item.selected === true)
		})

		const setItems = (item) => {
			item.selected = !item.selected
			if (selected.value.length === 0) {
				grid.selected = false
			} else if (selected.value.length < props.items.length) {
				grid.selected = null
			} else if (selected.value.length === props.items.length) {
				grid.selected = true
			}
		}

		const setClass = (row) => {
			if (row.unread && row.selected) return 'both'
			else if (row.selected) return 'bg-primary-selection'
			else if (row.unread) return 'bold'
			else return ''
		}

		return {
			toggle,
			setItems,
			setClass,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.lenta {
	position: relative;
	height: calc(100vh - 200px);
	overflow: auto;
	.full & {
		height: calc(100vh - 42px);
	}
	@media screen and (max-width: 1023px) {
		height: calc(100vh - 150px);
	}
}
.listitem {
	margin: 0.5rem 0;
	position: relative;
	padding: 1rem;
	&.unread {
		font-weight: bold;
	}
	.title {
		span {
			font-size: 1.1rem;
			cursor: pointer;
			color: var(--q-link);
		}
	}
}
.flex {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: nowrap;
	gap: 1rem;
	@media screen and (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
	}
}

.top0 {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
}
.top {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	@media screen and (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
	}
}
.ld {
	width: 100%;
	left: 0;
	height: 3px;
	z-index: 2;
}
.bold {
	font-weight: bold;
	color: var(--text-color-bright);
}

.both {
	font-weight: bold;
	color: var(--text-color-bright);
	background: var(--q-primary-selection);
	.read {
		background-color: var(--q-primary);
	}
}
.read {
	width: 8px;
	height: 100%;
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAAXNSR0IArs4c6QAAABpJREFUGFdjZEACjCD2jh07/nt4eDCCOTAAAEsRBAT/WuYQAAAAAElFTkSuQmCC);
}
.bold .read {
	background-color: var(--q-primary);
}
</style>
