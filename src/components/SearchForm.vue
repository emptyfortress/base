<template lang="pug">
br
draggable(:list="list" item-key="id" @start="drag = true" @end="drag = false")
	template(#item="{ element }")
		div
			QueryItem(:item="element")

</template>

<script>
import draggable from 'vuedraggable'
import { reactive, ref } from 'vue'
import QueryItem from '@/components/QueryItem.vue'

export default {
	components: {
		draggable,
		QueryItem,
	},
	setup() {
		const list = reactive([
			{ id: 0, and: true },
			{ id: 1, and: false },
		])

		const drag = ref(false)

		return {
			drag,
			list,
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
</style>
