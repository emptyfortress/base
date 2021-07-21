<template lang="pug">
q-layout(view="hHh lpR fFf").test
	q-header(reveal bordered class="bg-primary text-white")
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer") 

			q-toolbar-title
				q-avatar
					img(src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg")
				span Title

			q-btn(dense flat round icon="mdi-menu" @click="toggleRightDrawer") 

	q-drawer(show-if-above v-model="leftDrawer" side="left" bordered)
		router-link(to="/") home
		router-link(to="/hello") hello

	q-drawer(v-model="rightDrawer" side="right" bordered)

	q-page-container
		router-view 

	q-footer( bordered class="bg-grey-8 text-white" )
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer") 

</template>

<script>
import { ref } from 'vue'

export default {
	setup () {
		const leftDrawer = ref(false)
		const rightDrawer = ref(false)

		return {
			leftDrawer,
			toggleLeftDrawer () {
				leftDrawer.value = !leftDrawer.value
			},

			rightDrawer,
			toggleRightDrawer () {
				rightDrawer.value = !rightDrawer.value
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/styles/quasar.scss';

.test {
	background: #e2e2e2;
}
</style>
