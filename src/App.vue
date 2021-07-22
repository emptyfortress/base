<template lang="pug">
q-layout(view="hHh lpR fFf").bg
	q-header(reveal).head
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer") 

			q-toolbar-title
				span Docsvision

			q-btn(dense flat round icon="mdi-magnify")
			q-btn(dense round color="light-blue-2").q-mx-md
				q-avatar
					img(src="@/assets/users/user0.svg")
			q-btn(dense flat round icon="mdi-help-circle-outline")

	Drawer(:show="leftDrawer")

	q-drawer(v-model="rightDrawer" side="right" bordered)

	q-page-container
		router-view 

	q-footer( bordered class="bg-grey-8 text-white" )
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer") 
			q-space
			q-btn(dense flat round icon="mdi-menu" @click="toggleRightDrawer") 

</template>

<script>
import { ref } from 'vue'
import Drawer from '@/components/Drawer.vue'

export default {
	components: { Drawer },
	setup() {
		const leftDrawer = ref(false)
		const rightDrawer = ref(false)

		return {
			leftDrawer,
			toggleLeftDrawer() {
				leftDrawer.value = !leftDrawer.value
			},

			rightDrawer,
			toggleRightDrawer() {
				rightDrawer.value = !rightDrawer.value
			},
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';

.bg {
	background: linear-gradient(
		to bottom,
		var(--bg-light) 0%,
		#fef1f1 50%,
		var(--bg-light) 100%
	);

	/* background: var(--bg-light); */
}
.head {
	/* backdrop-filter: blur(7px); */
	/* background-color: #0000001a; */
	background: $dark;
	color: #fff;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	height: 64px;
	line-height: 64px;
}
.q-item {
	color: var(--font-light);
}
</style>
