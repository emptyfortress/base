<template lang="pug">
.dashblock
	q-list(separator)
		q-item(clickable v-ripple v-for="item in items" :key="item.id" :class="{ 'hd' : item.id === 0 }" :to="item.url")
			q-item-section {{ item.title }}
			q-item-section(avatar v-if="item.badge")
				q-badge(:label="item.badge")


</template>

<script>
export default {
	props: ['items'],
	data() {
		return {}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.hd {
	font-size: 1.1rem;
	/* min-height: 38px; */
}
.q-item {
	/* color: var(--q-link); */
	color: var(--q-primary-darken-2);
}
</style>
