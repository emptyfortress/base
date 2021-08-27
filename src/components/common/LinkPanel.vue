<template lang="pug">
.custom-expansions-item
	q-expansion-item(v-model='panels.link' switch-toggle-side :label='`Ссылки (${links.length})`')
		q-card
			q-card-section.q-pt-none
				LinkTable(:links="links")

	.actionBt.gr
		q-btn(round flat dense )
			SvgIcon(name="plus")
		q-btn(round flat dense )
			SvgIcon(name="sliders-vertical")
</template>

<script>
import LinkTable from '@/components/common/LinkTable.vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default {
	props: ['panels', 'links'],
	components: {
		SvgIcon,
		LinkTable,
	},
	setup() {
		return {}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
</style>
