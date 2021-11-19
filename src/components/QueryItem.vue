<template lang="pug">
.all
	.group
		.scope(@click="$emit('invert')" :class="setClass")
			.add(@click.stop="$emit('add')")
		.cond
			.myrow
				q-select(outlined dense v-model="model1" use-input input-debounce="0" :options="options1" @filter="filterFn1" ).norm
					template(v-slot:no-option)
						q-item
							q-item-section(class="text-grey") No results
				q-select(outlined dense v-model="model2" use-input input-debounce="0" :options="options2" @filter="filterFn2" ).norm
					template(v-slot:no-option)
						q-item
							q-item-section(class="text-grey") No results
				q-select(outlined dense v-model="model3" use-input input-debounce="0" :options="options3" @filter="filterFn3" ).norm
					template(v-slot:no-option)
						q-item
							q-item-section(class="text-grey") No results
		.btngr
			//- q-btn(round dense unelevated icon="mdi-content-copy")
			q-btn(round dense unelevated icon="mdi-nut")
			q-btn(round dense unelevated icon="mdi-trash-can-outline" @click="$emit('delete')")

</template>

<script>
import { ref, computed } from 'vue'
import { fields, conditions, values } from '@/data.js'

// const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
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
		const options1 = ref(stringOptions1)
		const options2 = ref(stringOptions2)
		const options3 = ref(stringOptions3)

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
			model1: ref('Поле'),
			model2: ref('Условие'),
			model3: ref('Значение'),
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
.myrow {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 1rem;
}
.norm {
	/* width: 150px; */
	background: #fff;
	margin-left: 4px;
}
.btngr {
	white-space: nowrap;
}
.q-field-input {
	width: 30px;
}
</style>
