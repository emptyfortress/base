<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px">
		<SvgIcon name="bin" />
  </q-page>
</template>

<style>
</style>

<script>
import SvgIcon from '@/components/SvgIcon.vue'
export default {
  name: 'HelloWorld',
	components: { SvgIcon }
}
</script>
