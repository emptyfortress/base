<template lang="pug">
.group
	.scope(@click="invert" :class="setClass")
	.cond {{ item.id }}
	.btngr
		q-btn(round dense unelevated icon="mdi-content-copy")
		q-btn(round dense unelevated icon="mdi-nut")
		q-btn(round dense unelevated icon="mdi-trash-can-outline")
.divide

</template>

<script>
import { computed } from 'vue'

export default {
	components: {},
	props: {
		item: Object,
	},

	setup(props) {
		const setClass = computed(() => {
			if (props.item.and) return 'and'
			else return 'or'
		})
		// const invert = (e) => {
		// 	props.item.and = !props.item.and
		// }
		return {
			setClass,
			// invert,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.group {
	height: 60px;
	width: 100%;
	border: 2px solid #ccc;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background: var(--bg-drawer);
}
.scope {
	width: 100px;
	/* height: 56px; */
	text-align: center;
	line-height: 56px;
	font-size: 0.9rem;
	font-weight: bold;
	text-transform: uppercase;
	color: var(--q-primary-darken-2);
	cursor: pointer;
	letter-spacing: 1px;
}
.divide {
	height: 10px;
	width: 3px;
	background: #ccc;
	margin-left: 48px;
}
.cond {
	flex-grow: 1;
}
.and {
	background: var(--q-primary-lighten-3);
	&::after {
		content: 'and';
	}
}
.or {
	background: var(--q-primary-lighten-1);
	&::after {
		content: 'or';
		color: #fff;
	}
}
</style>
