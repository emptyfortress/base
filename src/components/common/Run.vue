<template lang="pug">
.run
	q-circular-progress(v-if="api.active" indeterminate size="35px" :thickness=".1" color="primary").circ
	q-icon(name="mdi-run" v-if="api.active").man
	q-icon(name="mdi-human-male" v-if="check1").man
	q-badge(color="primary" v-if="check2").badge {{api.progress.length}}
	q-badge(color="negative" v-if="api.err").badge 1

	q-menu( v-model="showing" )
		q-list
			q-item(v-for="button in api.progress")
				q-item-section {{ button.text }}
				q-item-section(avatar clickable @click="repeat(button)").pointer
					q-icon(name="mdi-rotate-left")
				q-item-section(avatar clickable @click="reset").pointer
					q-icon(name="mdi-trash-can-outline")
</template>

<script>
import { useApi } from '@/stores/api'
import { ref, computed } from 'vue'
export default {
	components: {},
	setup() {
		const api = useApi()
		const showing = ref(false)

		const check = computed(() => {
			if (api.progress.length > 0 && !api.err) return true
			else return false
		})
		const check1 = computed(() => {
			if (api.err && !api.active) return true
			else return false
		})
		const check2 = computed(() => {
			if (api.progress.length > 1) return true
			else return false
		})
		const reset = () => {
			api.err = false
			api.progress = []
		}
		const repeat = (e) => {
			api.progress = []
			api.addProgress(e)
		}

		return {
			api,
			check,
			check1,
			check2,
			showing,
			reset,
			repeat,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

.run {
	cursor: pointer;
	position: relative;
	width: 2rem;
	height: 2rem;
	text-align: center;
	margin-right: 2.5rem;
	.circ {
		position: absolute;
		top: 0;
		left: 0;
	}
	.man {
		font-size: 1.6rem;
		position: absolute;
		top: 5px;
		left: 5px;
	}
	.badge {
		position: absolute;
		top: 9px;
		right: -24px;
	}
}
.pointer {
	cursor: pointer;
}
</style>
