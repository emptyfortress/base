<template lang="pug">
.container
	Wave(color="#cdcdcd").fix
	.home
		div(v-for="(block,index) in blocks")
			.widget(@click="toggle(index)" :class="block.active ? 'zind' : ''")
				//- Block(:block="block" :index="index" :focused="focused" @change="toggle(index)")
</template>

<script>
import { ref } from 'vue'
import Wave from '@/components/common/Wave.vue'
import { Flipper, Flipped } from 'vue-flip-toolkit'
import { items, bl } from '@/data.js'
// import Block from '@/components/common/Block.vue'

export default {
	components: {
		Wave,
		// Block,
		Flipper,
		Flipped,
	},
	setup() {
		const blocks = bl
		const focused = ref(null)

		const toggle = (e) => {
			blocks.map((item) => (item.active = false))
			blocks[e].active = true
			if (focused.value !== null) {
				focused.value = null
			} else focused.value = e
			console.log(focused.value)
		}

		return {
			blocks,
			toggle,
			focused,
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
.widget {
	width: 100%;
	background: var(--bg-card);
	border-radius: 4px;
	border: 1px solid (--bg-card);
	padding: 1rem;
	position: relative;
	padding-bottom: 30px;
	cursor: pointer;
	&:hover {
		box-shadow: 0 3px 10px #ccc;
		border: 1px solid var(--my-border-color);
		background: #fff;
	}
}
</style>
