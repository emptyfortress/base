<template lang="pug">
q-drawer(show-if-above v-model="show" side="left" bordered)
	q-list(bordered separator)
		q-item(clickable v-ripple to="/")
			q-item-section Home

		q-item(clickable v-ripple to="/hello")
			q-item-section Hello

	q-toggle( v-model="dark" )
</template>

<script>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export default {
	props: ['show'],
	setup(props) {
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
			props,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';
</style>
