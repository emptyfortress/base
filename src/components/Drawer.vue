<template lang="pug">
q-drawer( v-model="show" side="left" bordered :mini="mini" :width="width" :class="maincolor")
	.pos
		q-list(bordered separator)
			q-item(clickable v-ripple :to="page.url" v-for="page in pages" :key="page.id")
				q-item-section(avatar)
					q-icon(:name="page.icon")
				q-item-section {{ page.title }}
			//- q-item(clickable v-ripple to="/docs" )
			//- 	q-item-section Docss

		q-btn(round flat dense :icon="minitoogle" @click="mini = !mini").mini
		

</template>

<script>
import { ref, computed } from 'vue'
import { maincolor } from '@/utils/utils'

export default {
	props: ['show'],
	setup() {
		const pages = [
			{ id: 1, title: 'Главная', icon: 'mdi-home-roof', url: '/' },
			{ id: 2, title: 'Документы', icon: 'mdi-text-box-outline', url: '/docs' },
			{ id: 3, title: 'Задания', icon: 'mdi-check', url: '/tasks' },
			{
				id: 4,
				title: 'Папки',
				icon: 'mdi-folder-outline',
				url: '/folders',
			},
			// { id: 5, title: 'Hello', icon: 'mdi-folder-outline', url: '/hello' },
		]
		const mini = ref(false)
		const width = 256

		const minitoogle = computed(() => {
			return mini.value ? 'mdi-forwardburger' : 'mdi-backburger'
		})

		return {
			width,
			maincolor,
			mini,
			pages,
			minitoogle,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';
.pos {
	position: relative;
	height: 100%;
}
.mini {
	position: absolute;
	bottom: 1rem;
	left: 0.5rem;
}
.dark {
	background: $dark;
	color: #fff;
}
.doc {
	background: $docolor;
	color: #fff;
}
.task {
	background: $taskcolor;
	color: #fff;
}
</style>
