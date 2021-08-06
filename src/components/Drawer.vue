<template lang="pug">
q-drawer(v-model="show" side="left" :mini="colors.mini" :width="width" bordered :class="{ fill : colors.panel }")
	q-list(v-if="!lib")
		q-item(show-if-above clickable v-ripple :to="page.url" v-for="page in pages" :key="page.id")
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section {{ page.title }}

		q-item(clickable v-ripple @click="goToLib" to="/lib").bottom
			q-item-section(avatar)
				q-icon(name="mdi-bookshelf")
				//- q-icon(name="mdi-puzzle-outline")
			q-item-section Библиотека
	Lib(v-else @back="lib=false")

	q-btn(round flat dense :icon="minitoogle" @click="colors.mini = !colors.mini").mini

</template>

<script>
import { ref, computed } from 'vue'
import { useColor } from '@/stores/colors'
import Lib from '@/components/Lib.vue'
import svgIcon from '@/components/svgIcon.vue'

export default {
	props: ['show'],
	components: {Lib, svgIcon},
	setup() {
		const colors = useColor()
		const pages = [
			{ id: 1, title: 'Цвета', icon: 'mdi-palette', url: '/' },
			{ id: 2, title: 'Главная', icon: 'mdi-home-roof', url: '/dash' },
			{ id: 3, title: 'Документ', icon: 'mdi-text-box-outline', url: '/doc' },
			{ id: 4, title: 'Грид', icon: 'mdi-file-table-box-outline', url: '/grid' },
			// { id: 4, title: 'Папки', icon: 'mdi-folder-outline', url: '/folders', },
			// { id: 5, title: 'Hello', icon: 'mdi-folder-outline', url: '/hello' },
		]
		// const mini = ref(false)
		const width = 256
		const lib = ref(false)

		const goToLib = () => {
			console.log('test')
			lib.value = !lib.value
		}

		const minitoogle = computed(() => {
			return colors.mini ? 'mdi-forwardburger' : 'mdi-backburger'
		})

		return {
			goToLib,
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
/* .pos { */
/* 	position: relative; */
/* 	height: 100%; */
/* } */
.mini {
	position: absolute;
	bottom: 1rem;
	left: 0.5rem;
	overflow-x: hidden;
}
.bottom {
	border-top: 1px solid var(--my-border-color);
	margin-top: 3rem;
	/* position: absolute; */
	/* bottom: 3rem; */
	/* left: 0; */
	/* width: 100%; */
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
