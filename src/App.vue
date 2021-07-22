<template lang="pug">
q-layout(view="hHh lpR fFf").bg
	q-header(reveal bordered).head
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer") 

			q-toolbar-title
				q-avatar(square)
					img(src="@/assets/nick.svg").q-mr-md
				span Title

			q-btn(dense flat round icon="mdi-menu" @click="toggleRightDrawer") 

	q-drawer(show-if-above v-model="leftDrawer" side="left" bordered)
		q-list(bordered separator)
			q-item(clickable v-ripple to="/")
				q-item-section Home

			q-item(clickable v-ripple to="/hello")
				q-item-section Hello

		q-toggle( v-model="dark" )

	q-drawer(v-model="rightDrawer" side="right" bordered)

	q-page-container
		router-view 

	q-footer( bordered class="bg-grey-8 text-white" )
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer") 

</template>

<script>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export default {
	setup() {
		const leftDrawer = ref(false)
		const rightDrawer = ref(false)
		const dark = ref(false)
		const $q = useQuasar()

		watch(
			() => dark.value,
			() => {
				$q.dark.toggle()
			}
		)

		return {
			dark,
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
	backdrop-filter: blur(7px);
	background-color: #0000001a;
	color: #333;
}
.q-item {
	color: var(--font-light);
}
.q-btn {
	color: var(--font-light);
}
</style>
