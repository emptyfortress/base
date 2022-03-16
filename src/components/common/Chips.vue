<template lang="pug">
.row
	q-chip(v-for="chip in chips") {{ chip }}
</template>

<script>
export default {
	props: ['chips'],
	components: {},
	setup() {
		return {}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
</style>
