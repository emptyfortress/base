<template lang="pug">
.container
	.dash
		DashBlock(:items="inbox")
		DashBlock(:items="outbox")
		DashBlock(:items="mydoc")
	br
	Lastcards.q-mt-lg
</template>

<script>
import DashBlock from '@/components/DashBlock.vue'
import Lastcards from '@/components/Lastcards.vue'

export default {
	components: { DashBlock, Lastcards },
	data() {
		return {
			inbox: [
				{id: 0, title: 'Входящие', icon: 'mdi-close', url: '/'},
				{id: 1, title: 'В работе', badge: 2 , url: '/'},
				{id: 3, title: 'На контроле', badge: 6 , url: '/'},
				{id: 4, title: 'Ответственное исполнение', badge: 4 , url: '/'},
			],
			outbox: [
				{id: 0, title: 'Исходящие', url: '/'},
				{id: 1, title: 'Делегировано', url: '/'},
				{id: 3, title: 'Завершено', badge: 3 , url: '/'},
			],
			mydoc: [
				{id: 0, title: 'Мои документы', url: '/'},
				{id: 1, title: 'Я - автор', badge: 11, url: '/'},
			],
		}
	},
}
</script>

<style scoped lang="scss">

.container {
	padding-top: 3rem;
	@media screen and (max-width: 1900px) {
		max-width: 1200px;
		margin: 0 auto;
	}
	@media screen and (max-width: 1463px) {
		padding-left: 1rem;
		padding-right: 1rem;
	}
}

.dash {
	display: grid;
	margin: 0 auto;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	@media screen and (max-width: 860px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 630px) {
		grid-template-columns: auto;
		background: green;
	}
	div {
		height: 200px;
	}
}
.tab {
	margin-top: 1rem;
	height: 200px;
	background: #ccc;
}
</style>
