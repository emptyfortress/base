<template lang="pug">
.container
	Wave(color="#cdcdcd").fix
	.home
		Widget1(v-for="(block,index) in blocks" :index="index" :block="block")

</template>

<script>
import Wave from '@/components/common/Wave.vue'
import Widget1 from '@/components/common/Widget1.vue'
import { bl1 } from '@/data.js'
// import Block from '@/components/common/Block.vue'

export default {
	components: {
		Wave,
		Widget1,
	},
	setup() {
		const blocks = bl1

		return {
			blocks,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.fix {
	position: fixed;
	bottom: -330px;
	left: 0;
	z-index: -1;
}
.home {
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}
</style>
