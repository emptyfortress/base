<template lang="pug">
.myrow
	p Настройте вывод результатов поиска.
</template>

<script>
import { ref, computed, watchEffect } from 'vue'

export default {
	components: {},
	setup() {
		return {}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.myrow {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	p {
		padding-top: 1rem;
	}
}
</style>
