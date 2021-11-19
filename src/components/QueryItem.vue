<template lang="pug">
.all
	.group
		.scope(@click="$emit('invert')" :class="setClass")
			.add(@click.stop="$emit('add')")
		.cond {{ item.id }}
		.btngr
			q-btn(round dense unelevated icon="mdi-content-copy")
			q-btn(round dense unelevated icon="mdi-nut")
			q-btn(round dense unelevated icon="mdi-trash-can-outline")

</template>

<script>
import { computed } from 'vue'

export default {
	components: {},
	props: {
		item: Object,
	},
	emits: ['invert', 'add'],

	setup(props) {
		const setClass = computed(() => {
			if (props.item.and) return 'and'
			else return 'or'
		})

		return {
			setClass,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.all {
	padding-left: 0.7rem;
	margin-top: 9px;
	&.fuck {
		margin-left: 99px;
		margin-top: -2px;
	}
}
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
	text-align: center;
	line-height: 56px;
	font-size: 0.9rem;
	font-weight: bold;
	text-transform: uppercase;
	color: var(--q-primary-darken-2);
	cursor: pointer;
	letter-spacing: 1px;
	position: relative;
	&:hover .add {
		display: block;
	}
}
/* .divide { */
/* 	/\* height: 8px; *\/ */
/* 	width: 3px; */
/* 	background: #ccc; */
/* 	margin-left: 48px; */
/* } */
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
.add {
	position: absolute;
	left: -0.75rem;
	top: 15px;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	background: #fff;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
	border: 1px solid #ccc;
	z-index: 2;
	display: none;
}
</style>
