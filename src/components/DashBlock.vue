<template lang="pug">
//- q-card.dashblock
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

.dashblock {
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
.hd {
	font-size: 1.1rem;
}
.q-item .q-item__section--main {
	/* color: var(--q-link); */
	color: var(--q-primary-darken-2);
}
</style>
