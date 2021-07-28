<template lang="pug">
q-drawer(v-model="show" side="right" bordered )
	Color(:swatches="maincolor")
	q-item
		q-toggle( v-model="color.toolbar" label="Контрастный тулбар" color="primary")
	q-item
		q-toggle( v-model="color.panel" label="Контрастная панель" color="primary")

	q-separator
	q-item
		q-toggle( v-model="dark" label="Темная тема" color="primary")
</template>

<script>
import { ref, reactive, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useColor } from '@/stores/colors'
import Color from '@/components/Color.vue'

export default {
	props: ['show'],
	components: { Color },
	setup(props) {
		const dark = ref(false)
		const toolbar = ref(false)
		const panel = ref(false)
		const $q = useQuasar()
		const color = useColor()

		const maincolor = reactive([
			{ id: 'one', color: 'one', icon: true },
			{ id: 'two', color: 'two', icon: false },
			{ id: 'three', color: 'three', icon: false },
			{ id: 'four', color: 'four', icon: false },
		])
		const link = reactive([])

		watch(
			() => dark.value,
			() => {
				$q.dark.toggle()
			}
		)

		return {
			dark,
			toolbar,
			panel,
			color,
			props,
			maincolor,
			link,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';
.left {
	background: $dark;
	color: #fff;
}
.q-item__label {
	color: var(--my-text-color);
}
</style>
