<template lang="pug">
q-drawer(:model-value="show" side="left" :mini="colors.mini" :width="width" bordered :class="{ fill : colors.panel }" @update:model-value="$emit('toggle')")
	q-list
		q-item(clickable v-ripple :to="page.url" v-for="page in pages" :key="page.id" )
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section {{ page.title }}

		//- q-item.bottom
		//- 	q-item-section(avatar)
		//- 		q-icon(name="mdi-bookshelf")
		//- 	q-item-section БИБЛИОТЕКА
		//- q-item(v-for="item in lib" :key="item.id" :to="item.url" clickable v-ripple)
		//- 	q-item-section(avatar)
		//- 		q-icon(:name="item.icon")
		//- 	q-item-section {{ item.title }}

	q-btn(round flat dense :icon="minitoogle" @click="colors.mini = !colors.mini").mini.gt-sm

</template>

<script>
import { computed } from 'vue'
import { useColor } from '@/stores/colors'
import SvgIcon from '@/components/SvgIcon.vue'

export default {
	props: ['show'],
	components: { SvgIcon },
	setup() {
		const colors = useColor()
		const pages = [
			// { id: 1, title: 'Цвета', icon: 'mdi-palette', url: '/' },
			// { id: 2, title: 'Главная', icon: 'mdi-home-roof', url: '/dash' },
			// { id: 3, title: 'Документ', icon: 'mdi-text-box-outline', url: '/doc' },
			{
				id: 4,
				title: 'Грид - доработки',
				icon: 'mdi-file-table-box-outline',
				url: '/grid',
			},
		]
		const lib = [
			{ id: 1, title: 'Кнопки', icon: 'mdi-puzzle-outline', url: '/btn' },
			{ id: 2, title: 'Меню', icon: 'mdi-puzzle-outline', url: '/menu' },
		]
		const width = 256

		const minitoogle = computed(() => {
			return colors.mini ? 'mdi-forwardburger' : 'mdi-backburger'
		})

		return {
			colors,
			width,
			lib,
			pages,
			minitoogle,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.mini {
	position: absolute;
	bottom: 1rem;
	left: 0.5rem;
	overflow-x: hidden;
}
.bottom {
	border-top: 1px solid var(--my-border-color);
	margin-top: 3rem;
}
.fill {
	color: #fff !important;
	.q-item--active,
	.q-item.q-router-link--active {
		color: #fff;
	}
}
.body--dark {
	.fill .q-item {
		color: #fff !important;
	}
	.fill .q-router-link--active {
		color: var(--q-primary-darken-2) !important;
	}
}
.q-item--active,
.q-item.q-router-link--active {
	background: var(--q-selection);
	color: var(--q-primary-darken-2);
}
</style>
