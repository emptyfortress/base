<template lang="pug">
q-select(dense :model-value="model"  emit-value  use-input hide-selected fill-input input-debounce="0" :label="label" :options="opt" @filter="filterFn" @update:model-value="update")
	template(v-slot:no-option)
		q-item
			q-item-section(class="text-grey") Ничего не найдено
</template>

<script>
import { ref } from 'vue'
import { usePoisk } from '@/stores/poisk'

export default {
	components: {},
	props: ['label', 'options', 'index'],

	setup(props, context) {
		const stringOptions = [...props.options]
		const opt = ref(stringOptions)

		const filterFn = (val, update) => {
			if (val === '') {
				update(() => {
					opt.value = stringOptions
				})
				return
			}

			update(() => {
				const needle = val.toLowerCase()
				opt.value = stringOptions.filter(
					(v) => v.toLowerCase().indexOf(needle) > -1
				)
			})
		}

		const model = ref(null)
		const poisk = usePoisk()

		const update = (e) => {
			model.value = e
			poisk.updateModel(props.label, e)
			setTimeout(() => {
				model.value = null
			}, 100)
		}

		return {
			model,
			update,
			opt,
			filterFn,
		}
	},
}
</script>

<style scoped lang="scss">
q-select {
	font-size: 0.8rem;
}
</style>
