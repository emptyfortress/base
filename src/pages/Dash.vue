<template lang="pug">
.container
	.dash
		div
		div
		div
	.tab
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';

.container {
	padding-top: 3rem;
	@media screen and (max-width: 1900px) {
		max-width: 1200px;
		margin: 0 auto;
	}
	@media screen and (max-width: 1463px) {
		margin: 0 auto;
		padding-left: 1rem;
		padding-right: 1rem;
	}
}

.dash {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	@media screen and (max-width: 860px) {
		grid-template-columns: repeat(2, 1fr);
		background: green;
	}
	@media screen and (max-width: 630px) {
		grid-template-columns: auto;
		background: green;
	}
	div {
		height: 200px;
		background: #ccc;
	}
}
	.tab {
		margin-top: 1rem;
		height: 200px;
		background: #ccc;
	}
</style>
