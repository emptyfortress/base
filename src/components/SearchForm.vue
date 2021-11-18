<template lang="pug">
br
div(v-for="( item, index ) in conditions" :key="item.id")
	.group
		.scope(@click="invert(index)" :class="setClass(index)")
		.cond
		.btngr
			q-btn(round dense unelevated icon="mdi-content-copy")
			q-btn(round dense unelevated icon="mdi-nut")
			q-btn(round dense unelevated icon="mdi-trash-can-outline")
	.divide
//- .add
	q-btn(unelevated color="blue-grey-3").q-mr-sm Добавить условие
	q-btn(unelevated color="blue-grey-3").q-mr-sm Добавить группу
</template>

<script>
import { reactive, computed } from 'vue'
export default {
	components: [],
	setup() {
		const conditions = reactive([
			{ id: 0, and: true },
			{ id: 1, and: false },
		])

		const setClass = (e) => {
			if (conditions[e].and) return 'and'
			else return 'or'
		}
		const invert = (e) => {
			conditions[e].and = !conditions[e].and
		}

		return {
			conditions,
			setClass,
			invert,
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

/* .dv-riboon-row__cell { */
/* 	padding-top: 1rem; */
/* 	padding-bottom: 1.5rem; */
/* 	padding-left: 2rem; */
/* 	/\* padding-top: 4px ; *\/ */
/* 	/\* padding-bottom: 4px ; *\/ */
/* } */
/* .dv-ribbon-row__cell-heading { */
/* 	margin-bottom: 1rem; */
/* 	line-height: 150%; */
/* } */
/* .dv-checkbox-list-view-row__checkbox { */
/* 	font-size: 1em; */
/* 	-webkit-transform: translateY(-1px); */
/* 	transform: translateY(-1px); */
/* 	margin-right: 0.5rem; */
/* } */
</style>
