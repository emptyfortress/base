import { useRoute } from 'vue-router'
import { computed } from 'vue'

const maincolor = computed(() => {
	const route = useRoute()
	const path = computed(() => route.fullPath)
	switch (path.value) {
		case '/':
			return 'dark'
		case '/docs':
			return 'doc'
		case '/tasks':
			return 'task'
		default:
			return 'dark'
	}
})

export { maincolor }
