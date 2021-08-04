<template lang="pug">
.container
	.dash
		div
		div
		div
		div
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';

@media screen and (max-width: 1900px) {
	.container {
		max-width: 1200px;
		margin: 0 auto;
		background: yellow;
	}
}

.dash {
	display: grid;
	grid-template-columns: repeat(3, auto);
	gap: 1rem;
	div {
		height: 200px;
		background: #ccc;
	}
}
</style>
