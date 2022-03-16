<template lang="pug">
.row
	q-chip(v-for="(label,index) in props.block.labels") {{label}} - {{props.block.seria[index]}}
</template>

<script>
export default {
	props: ['block'],
	components: {},
	setup(props) {
		return {
			props,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
</style>
