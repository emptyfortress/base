<template lang="pug">
.all
	.group
		.scope(@click="$emit('invert')" :class="setClass")
			.add(@click.stop="$emit('add')")
				q-icon(name="mdi-plus")
		.cond
			.myrow
				q-select(dense v-model="model1" use-input hide-selected fill-input input-debounce="0" label="Поле" :options="options1" @filter="filterFn1").norm
					template(v-slot:no-option)
						q-item
							q-item-section(class="text-grey") No results
				q-select(dense v-model="model2" use-input hide-selected fill-input input-debounce="0" label="Условие" :options="options2" @filter="filterFn2" ).norm
					template(v-slot:no-option)
						q-item
							q-item-section(class="text-grey") No results
				q-select(dense v-model="model3" use-input hide-selected fill-input input-debounce="0" label="Значение" :options="options3" @filter="filterFn3" ).norm
					template(v-slot:no-option)
						q-item
							q-item-section(class="text-grey") No results
		.btngr
			q-btn(round dense unelevated icon="mdi-autorenew")
			q-btn(round dense unelevated icon="mdi-trash-can-outline" @click="$emit('delete')")

</template>

<script>
import { ref, computed } from 'vue'
import { fields, conditions, values, names } from '@/data.js'

const stringOptions1 = fields
const stringOptions2 = conditions
const stringOptions3 = values

export default {
	components: {},
	props: {
		item: Object,
	},
	emits: ['invert', 'add'],

	setup(props) {
		const model1 = ref(null)
		const model2 = ref(null)
		const model3 = ref(null)
		const options1 = ref(stringOptions1)
		const options2 = ref(stringOptions2)
		// const options3 = ref(stringOptions3)

		const options3 = computed(() => {
			if (model1.value === 'Автор') {
				return names
			} else return values
		})

		const setClass = computed(() => {
			if (props.item.and) return 'and'
			else return 'or'
		})

		const filterFn1 = (val, update) => {
			if (val === '') {
				update(() => {
					options1.value = stringOptions1
				})
				return
			}

			update(() => {
				const needle = val.toLowerCase()
				options1.value = stringOptions1.filter(
					(v) => v.toLowerCase().indexOf(needle) > -1
				)
			})
		}
		const filterFn2 = (val, update) => {
			if (val === '') {
				update(() => {
					options2.value = stringOptions2
				})
				return
			}

			update(() => {
				const needle = val.toLowerCase()
				options2.value = stringOptions2.filter(
					(v) => v.toLowerCase().indexOf(needle) > -1
				)
			})
		}
		const filterFn3 = (val, update) => {
			if (val === '') {
				update(() => {
					options3.value = stringOptions3
				})
				return
			}

			update(() => {
				const needle = val.toLowerCase()
				options3.value = stringOptions3.filter(
					(v) => v.toLowerCase().indexOf(needle) > -1
				)
			})
		}

		return {
			setClass,
			options1,
			options2,
			options3,
			model1,
			model2,
			model3,
			filterFn1,
			filterFn2,
			filterFn3,
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
	/* height: 60px; */
	width: 100%;
	border: 2px solid #ccc;
	display: flex;
	justify-content: justify-between;
	align-items: center;
	background: var(--bg-drawer);
	position: relative;
}
.scope {
	width: 80px;
	/* height: 100%; */
	text-align: center;
	font-size: 0.9rem;
	font-weight: bold;
	text-transform: uppercase;
	color: var(--q-primary-darken-2);
	cursor: pointer;
	letter-spacing: 1px;
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
	padding: 0.5rem;
	margin-left: 80px;
}
.and {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 80px;
	background: var(--q-primary-lighten-3);
	display: flex;
	justify-content: center;
	align-items: center;
	&::after {
		content: 'and';
	}
}
.or {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--q-primary-lighten-1);
	&::after {
		content: 'or';
		color: #fff;
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
	display: none;
}
.myrow {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding-left: 1rem;
	flex-wrap: wrap;
}
.norm {
	font-size: 0.8rem;
	width: 30%;
	min-width: 120px;
}
.btngr {
	white-space: nowrap;
}
</style>
