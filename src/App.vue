<template lang="pug">
q-layout(view="hHh lpR fFf").bg
	q-header(reveal :class="maincolor").head
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer") 

			q-toolbar-title
				span Docsvision
				span.q-ml-lg.text-caption {{ formattedString }}

			q-btn(dense flat round icon="mdi-magnify")
			q-btn(dense round color="light-blue-2").q-mx-md
				q-avatar
					img(src="@/assets/users/user0.svg")
			q-btn(dense flat round icon="mdi-help-circle-outline" @click="toggleRightDrawer")

	Drawer(:show="leftDrawer")
	RDrawer(:show="rightDrawer")

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(name="slide-right")
				component(:is="Component")

	//- q-footer( bordered class="bg-grey-8 text-white" )
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer") 
			q-space
			q-btn(dense flat round icon="mdi-menu" @click="toggleRightDrawer") 

</template>

<script>
import { ref } from 'vue'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'
import { date } from 'quasar'
import { maincolor } from '@/utils/utils'

export default {
	components: { Drawer, RDrawer },
	setup() {
		const leftDrawer = ref(true)
		const rightDrawer = ref(false)

		const timeStamp = Date.now()
		const formattedString = date.formatDate(timeStamp, 'dddd, D MMMM')

		return {
			maincolor,
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

.bg {
	background: #efefef;
	/* background: linear-gradient( */
	/* 	to bottom, */
	/* 	var(--bg-light) 0%, */
	/* 	#fef1f1 50%, */
	/* 	var(--bg-light) 100% */
	/* ); */
}
.head {
	/* backdrop-filter: blur(7px); */
	/* background-color: #0000001a; */
	/* background: var(--q-dark); */
	/* background: $dark; */
	/* color: #fff; */
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	height: 64px;
	line-height: 64px;
	transition: 0.3s ease all;
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
.q-item {
	color: var(--font-light);
}
</style>
