<template lang="pug">
q-drawer(v-model="show" side="right" bordered )
	q-item
		q-toggle( v-model="dark" label="dark" :color="color.primary")
</template>

<script>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useColor } from '@/stores/colors'

export default {
	props: ['show'],
	setup(props) {
		const dark = ref(false)
		const $q = useQuasar()
		const color = useColor()

		watch(
			() => dark.value,
			() => {
				$q.dark.toggle()
			}
		)

		return { dark, props, color }
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
