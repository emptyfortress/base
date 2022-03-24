<template lang="pug">
.row
	//- q-chip(v-for="(label,index) in props.block.labels" v-model:selected="desert") {{label}} - {{props.block.seria[index]}}
	q-chip(v-for="(label,index) in props.block.labels" clickable @click="select(props.block.id, index)" :class="chipClass(index)") {{label}} - {{props.block.seria[index]}}
</template>

<script>
import { reactive, computed } from 'vue'
import { useWidget } from '@/stores/widget'

export default {
	props: ['block'],
	components: {},
	setup(props) {
		const desert = reactive({
			ice: false,
			water: false,
			fire: false,
			eath: false,
		})

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
			desert,
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
