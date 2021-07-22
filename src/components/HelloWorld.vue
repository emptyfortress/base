<template lang="pug">
q-page( class="flex flex-center" )
	img(alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px")
	SvgIcon(name="bin")
	q-icon(name="mdi-account")
	p Path: {{ path }}
</template>

<script>
// import { useRoute } from 'vue-router'
import SvgIcon from '@/components/SvgIcon.vue'
export default {
	name: 'HelloWorld',
	components: { SvgIcon },
	data() {
		return {}
	},
	computed: {
		path() {
			return this.$route.fullPath
		},
	},
	// setup() {
	// 	console.log(useRoute())
	// 	return {}
	// },
}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';
</style>
