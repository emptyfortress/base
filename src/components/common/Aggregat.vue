<template lang="pug">
q-list(dense)
	q-item(v-for="item in list" v-ripple tag="label")
		q-item-section(side)
			q-checkbox(dense v-model="item.value")
		q-item-section {{ item.label }}
		q-item-section(avatar) {{ item.badge }}
			
</template>

<script>
export default {
	props: {
		list: Array,
	},

	setup() {
		return {
			
		}
	},

}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
</style>
