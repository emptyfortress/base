<template lang="pug">
.relative-position
	q-expansion-item(v-model='panels.link' switch-toggle-side label="Ссылки")
		q-card
			q-card-section laksjd
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'

export default {
	props: ['panels'],
	components: {
		SvgIcon,
	},
	setup() {
		return {}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
</style>
