<template lang="pug">
h3 hello

</template>

<script>
import { ref, computed } from 'vue'
import { maincolor } from '@/utils/utils'
import { useColor } from '@/stores/colors'

export default {
	props: ['show'],
	setup() {
		const color = useColor()
		const mini = ref(false)

		const minitoogle = computed(() => {
			return mini.value ? 'mdi-forwardburger' : 'mdi-backburger'
		})

		return {
			color,
			maincolor,
			mini,
			minitoogle,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';
/* .pos { */
/* 	position: relative; */
/* 	height: 100%; */
/* } */
.mini {
	position: absolute;
	bottom: 1rem;
	left: 0.5rem;
	overflow-x: hidden;
}
.bottom {
	border-top: 1px solid var(--my-border-color);
	margin-top: 3rem;
	/* position: absolute; */
	/* bottom: 3rem; */
	/* left: 0; */
	/* width: 100%; */
}
.fill {
	color: #fff !important;
}
.body--dark {
	.fill .q-item {
		color: #fff !important;
	}
	.fill .q-router-link--active {
		color: var(--q-primary-darken-2) !important;
	}
}
.q-item--active,
.q-item.q-router-link--active {
	background: var(--q-selection);
	color: var(--q-primary-darken-2);
}
</style>
