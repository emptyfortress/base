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

const setMinWidth = (elClass) => {
	const nodeList = document.querySelectorAll(elClass)
	const listToArray = [...nodeList]
	const widthArray = listToArray.map( el => el.clientWidth ) 
	console.log(widthArray)
	const maxWidth = Math.max.apply(null, widthArray)
	nodeList.forEach( el => el.style = `min-width: ${maxWidth + 1}px;` )
}

export { maincolor, setMinWidth }
