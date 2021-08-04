<template lang="pug">
.zag
	span Последние карточки
	.group
		q-btn(dense flat)
			svgIcon(name="1-line" )
		q-btn(dense flat)
			svgIcon(name="2-line")
</template>

<script>
import svgIcon from '@/components/svgIcon.vue'

export default {
	components: {svgIcon}
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.zag {
	color: var(--q-link);
	font-size: 1.1rem;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid black;
}
.group {
	svg {
		width: 2rem;
		height: 2rem;
	}
}
</style>
