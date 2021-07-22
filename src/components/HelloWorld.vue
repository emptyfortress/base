<template lang="pug">
q-page( class="flex flex-center" ).ttt
	img(alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px")
	SvgIcon(name="bin")
	q-icon(name="mdi-account")
</template>

<style></style>

<script>
import SvgIcon from '@/components/SvgIcon.vue'
export default {
	name: 'HelloWorld',
	components: { SvgIcon },
}
</script>

<style scoped lang="scss">
@import '@/styles/theme.scss';

.ttt {
	/* background: var(--bg-dark); */
	background: var(--q-whiteField);
}
</style>
