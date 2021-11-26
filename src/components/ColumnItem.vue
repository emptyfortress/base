<template lang="pug">
.group
	.add(@click.stop="$emit('add')")
		q-icon(name="mdi-plus")
	.myrow
		.cond
			.num {{ index + 1 }}.
			q-select(dense v-model="field" use-input hide-selected fill-input input-debounce="0" label="Поле" :options="options" @filter="filterFn").norm
			.check
				q-checkbox(dense label="Сортировка" v-model="item.sort")
		.btngr
			q-btn(round dense unelevated icon="mdi-reload" @click="reset").invert
			q-btn(round dense unelevated icon="mdi-nut" @click="showExtra = !showExtra").invert
			q-btn(round dense unelevated icon="mdi-trash-can-outline" @click="$emit('delete')")
	.hid(v-if="showExtra") Здесь сложная настройка конкатенации полей
</template>

<script>
import { ref } from 'vue'

export default {
	props: {
		item: Object,
		index: Number,
	},
	components: {},
	setup(props) {
		const field = ref(props.item.label)
		const showExtra = ref(false)
		const options = null
		const reset = () => {
			console.log(1)
		}
		const filterFn = () => {
			console.log(1)
		}

		return {
			field,
			showExtra,
			reset,
			filterFn,
			options,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.myrow {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 1rem;
	gap: 1rem;
}
.group {
	border: 1px solid #ccc;
	background: var(--bg-drawer);
	position: relative;
	margin-bottom: 2px;
	&:hover {
		border: 2px solid var(--q-primary);
		z-index: 4;
	}
	&:hover .add {
		display: block;
	}
}
.cond {
	display: flex;
	justify-content: justify-between;
	align-items: center;
	flex-grow: 1;
	padding: 0.25rem;
}
.btngr {
	white-space: nowrap;
	margin-right: 0.5rem;
	.invert {
		transform: scaleX(-1);
	}
}
.add {
	position: absolute;
	left: -0.75rem;
	top: 50%;
	transform: translateY(-50%);
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	background: #fff;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
	border: 1px solid var(--q-primary);
	z-index: 2;
	text-align: center;
	display: none;
}
.num {
	font-weight: bold;
	margin-right: 1rem;
}
.norm {
	margin-right: 2rem;
}
.hid {
	padding: 1rem;
	color: red;
}
</style>
