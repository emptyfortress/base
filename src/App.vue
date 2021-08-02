<template lang="pug">
#col(:class="mycolor")
	q-layout(view="hHh LpR fFf" )
		q-header(:reveal="color.reveal" :class="calcHeader")
			q-toolbar
				q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer") 

				q-toolbar-title
					span {{ formattedString }}
					//- span.q-ml-lg.text-caption {{ formattedString }}

				q-btn(dense flat round icon="mdi-magnify")
				q-btn(dense round unelevated color="light-blue-2").q-ml-sm
					q-avatar
						img(src="@/assets/users/user0.svg")
				q-btn(dense flat round icon="mdi-help-circle-outline").q-ml-sm
				q-btn(dense flat round icon="mdi-brightness-4" @click="toggleRightDrawer").q-mx-sm

		Drawer(:show="leftDrawer")
		RDrawer(:show="rightDrawer")

		q-page-container
			router-view(v-slot="{ Component, route }")
				transition(name="slide-right")
					component(:is="Component")

		//- q-footer(bordered).head
			q-toolbar
				q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer") 
				q-space
				q-btn(dense flat round icon="mdi-menu" @click="toggleRightDrawer") 

</template>

<script>
import { ref, computed } from 'vue'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'
import { date } from 'quasar'
import { useColor } from '@/stores/colors'

export default {
	components: { Drawer, RDrawer },
	setup() {
		const leftDrawer = ref(true)
		const rightDrawer = ref(true)

		const mycolor = computed(() => {
			return 'one'
		})

		const color = useColor()

		const calcHeader = computed(() => {
			if (color.toolbar) {
				return 'head-fill'
			} else return 'head'
		})

		const timeStamp = Date.now()
		const formattedString = date.formatDate(timeStamp, 'dddd, D MMMM')

		return {
			color,
			calcHeader,
			mycolor,
			formattedString,
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

.head,
.head-fill {
	height: 64px;
	line-height: 64px;
	border-bottom: 1px solid #fff;
}
.head {
	backdrop-filter: blur(10px);
	background-color: #0000001a;
	color: var(--font-color);
}
.head-fill {
	color: #fff !important;
}
body.body--dark .head {
	background: var(--bg-drawer);
}
</style>
