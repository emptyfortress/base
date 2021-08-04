<template lang="pug">
q-btn(color="primary" @click="$emit('back')") Back

</template>

<script>
import { maincolor } from '@/utils/utils'
import { useColor } from '@/stores/colors'

export default {
	emits: ['back'],
	setup() {
		const color = useColor()

		return {
			color,
			maincolor,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
</style>
