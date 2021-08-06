<template lang="pug">
q-markup-table(flat).shadow-1
	slot

p {{ test }}
</template>

<script>
import { computed } from 'vue'
export default {
	setup() {
		const test = computed(() => {
			return 'fuck'
		})
		return {
			test,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
</style>
