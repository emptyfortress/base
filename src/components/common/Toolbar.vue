<template lang="pug">
.toolbar
	.left
		q-btn(flat round dense @click="grid.switchSidebar")
			q-icon(name="mdi-backburger" v-if="grid.sidebar")
			q-icon(name="mdi-forwardburger" v-else)
		transition(name="slide-top" mode="out-in")
			.total(v-if="shown") Показано:
				span {{ shown }}
				q-btn(unelevated size="12px" @click="showAll") Показать все
			.total(v-else) Всего:
				span {{ total }}
	.center
		q-btn-group(unelevated).group
			q-btn(:flat="grid.lenta" dense color="btn-group" icon="mdi-table" size="10px" @click="grid.showGrid")
				q-tooltip(:delay="600") Грид
			q-btn(:flat="!grid.lenta" dense color="btn-group" icon="mdi-format-list-bulleted" size="10px" @click="grid.showLenta")
				q-tooltip(:delay="600") Лента
	.right
		q-btn(flat round dense v-for="button in buttons" @click="callback(button)" :key="button.id")
			q-tooltip(:delay="600") {{ button.tooltip}}
			SvgIcon(:name="button.icon" :spin="button.spin")
		q-btn(flat round dense v-if="!grid.fullscreen" icon="mdi-fullscreen" @click="grid.switchFullscreen")
			q-tooltip(:delay="600") Полный экран
		q-btn(flat round dense v-else icon="mdi-fullscreen-exit" @click="grid.switchFullscreen")
			q-tooltip(:delay="600") Вернуть
</template>

<script>
import { useGrid } from '@/stores/grid'
import SvgIcon from '@/components/SvgIcon.vue'
import { reactive } from 'vue'

export default {
	props: {
		total: Number,
		shown: Number,
	},
	emits: ['readAll'],
	components: {
		SvgIcon,
	},

	setup(props, context) {
		const grid = useGrid()

		const callback = (e) => {
			if (e.id === 1) {
				context.emit('readAll')
			}
			if (e.id === 2) {
				context.emit('toggleLoad')
				e.spin = true
				setTimeout(() => {
					context.emit('toggleLoad')
					e.spin = false
				},3000)
			}
		}

		const showAll = () => {
			context.emit('showAll')
		}

		const buttons = reactive([
			// { id: 0, icon: 'sort-variant', tooltip: 'Сортировка', action: '', grid: false },
			{ id: 1, icon: 'readAll', tooltip: 'Прочитать все', action: 'clear' },
			{ id: 2, icon: 'refresh', tooltip: 'Обновить', action: 'refresh', spin: false },
			{ id: 3, icon: 'xls-export', tooltip: 'Экспорт', action: '' },
			{ id: 4, icon: 'sliders-reload', tooltip: 'Сброс настроек', action: '' },
			{ id: 5, icon: 'sliders-vertical', tooltip: 'Настройки', action: '' },
		])

		return {
			grid,
			buttons,
			props,
			callback,
			showAll,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.toolbar {
	border-top: 1px solid var(--my-border-color);
	border-bottom: 1px solid var(--my-border-color);
	background: var(--bg-card);
	width: 100%;
	height: 42px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.total {
	/* font-size: 1.0rem; */
	display: inline-block;
	line-height: 42px;
	margin: 0 1rem;
	span {
		font-weight: 600;
		margin-left: 0.5rem;
	}
}
.group {
	/* border: 1px solid var(--my-border-color); */
	border: 1px solid var(--my-border-color);
}
</style>
