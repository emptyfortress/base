<template lang="pug">
.relative-position
	q-expansion-item(v-model='panels.link' switch-toggle-side label='Ссылки')
		q-card
			q-card-section laksjd

	.actionBt.gr
		q-btn(round flat dense )
			SvgIcon(name="plus")
		q-btn(round flat dense )
			SvgIcon(name="sliders-vertical")
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
.actionBt {
	position: absolute;
	top: 7px;
	right: 16px;
	body.body--dark & {
		color: var(--dark-text-color);
	}
	&.gr svg {
		opacity: 0.7;
		&:hover {
			opacity: 1;
		}
	}
}
</style>
