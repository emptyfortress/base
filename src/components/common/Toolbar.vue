<template lang="pug">
.toolbar
	.left
		q-btn(flat round dense @click="grid.switchSidebar")
			q-icon(name="mdi-backburger" v-if="grid.sidebar")
			q-icon(name="mdi-forwardburger" v-else)
		.total Всего:
			span 43
		q-btn(unelevated size="12px") Показать все
	.center()
		q-btn-group(unelevated).group
			q-btn(:flat="!grid.view" dense color="btn-group" icon="mdi-table" size="10px" @click="grid.view = !grid.view")
				q-tooltip(:delay="600" anchor="top middle" self="center middle") Грид
			q-btn(:flat="grid.view" dense color="btn-group" icon="mdi-format-list-bulleted" size="10px" @click="grid.view = !grid.view")
				q-tooltip(:delay="600" anchor="top middle" self="center middle") Лента
	.right
		q-btn(flat round dense v-for="button in buttons")
			q-tooltip(:delay="600" anchor="bottom middle" self="center middle") {{ button.tooltip}}
			SvgIcon(:name="button.icon")
		q-btn(flat round dense v-if="!grid.fullscreen" icon="mdi-fullscreen" @click="grid.switchFullscreen")
			q-tooltip(:delay="600" anchor="bottom middle" self="center middle") Вернуть
		q-btn(flat round dense v-else icon="mdi-fullscreen-exit" @click="grid.switchFullscreen")
			q-tooltip(:delay="600" anchor="bottom middle" self="center middle") Вернуть
</template>

<script>
import { useGrid } from '@/stores/grid'
import SvgIcon from '@/components/SvgIcon.vue'

export default {
	components: {
		SvgIcon,
	},

	setup() {
		const grid = useGrid()

		const buttons = [
			{ id: 0, icon: 'sort-variant', tooltip: 'Сортировка', action: '' },
			{ id: 1, icon: 'readAll', tooltip: 'Прочитать все', action: '' },
			{ id: 2, icon: 'refresh', tooltip: 'Обновить', action: '' },
			{ id: 3, icon: 'xls-export', tooltip: 'Экспорт', action: '' },
			{ id: 4, icon: 'sliders-reload', tooltip: 'Сброс настроек', action: '' },
			{ id: 5, icon: 'sliders-vertical', tooltip: 'Настройки', action: '' },
		]

		return {
			grid,
			buttons,
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
