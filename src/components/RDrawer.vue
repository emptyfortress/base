<template lang="pug">
q-drawer(v-model="show" side="right" bordered)
	q-toggle( v-model="dark")
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

		return { dark, props }
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';
.left {
	background: $dark;
	color: #fff;
}
</style>
