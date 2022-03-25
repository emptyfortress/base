<template lang="pug">
.row
	q-chip(v-for="(label,index) in props.block.labels" clickable @click="select(props.block.id, index)" :class="chipClass(index)") {{label}} - {{props.block.seria[index]}}
</template>

<script>
import { useWidget } from '@/stores/widget'

export default {
	props: {
		block: {
			type: Object,
			default: () => ({ id: 0, labels: ['one'], seria: [3] }),
		},
	},
	components: {},
	setup(props) {
		const widget = useWidget()

		const select = (a, e) => {
			widget.select(a, e)
		}

		const chipClass = (e) => {
			if (widget.selected === e) {
				return 'active'
			}
			return ''
		}

		return {
			props,
			select,
			chipClass,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.q-chip--selected {
	background: var(--q-primary);
	color: #fff;
}
.q-chip__icon--left {
	color: #fff;
}
.active {
	background: var(--q-primary);
	color: #fff;
}
</style>
