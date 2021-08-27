<template lang="pug">
q-list(dense)
	q-item(v-for="item in list" v-ripple tag="label")
		q-item-section(side)
			q-checkbox(dense v-model="item.value")
		q-item-section {{ item.label }}
		q-item-section(avatar) {{ item.badge }}
	.q-px-md.q-pb-md
		q-input(v-if="block === 3" placeholder="Период" v-model="period" clearable) 
			template(v-slot:prepend)
				q-icon(name="mdi-calendar-range")
		
			
</template>

<script>
import {ref} from 'vue'
export default {
	props: {
		list: Array,
		block: Number
	},

	setup() {
		const period = ref('')
		return {
			period
			
		}
	},

}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.q-icon {
	/* transform: translateY(7px); */
}
</style>
