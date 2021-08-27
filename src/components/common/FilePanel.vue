<template lang="pug">
.custom-expansions-item
	q-expansion-item(v-model="panels.file" switch-toggle-side :label="`Файлы (${files.length})`" )
		q-card
			q-card-section.q-pt-none
				FileTable(:files="files")
	.actionBt.gr
		q-btn(round flat dense )
			SvgIcon(name="sign")
		q-btn(round flat dense )
			SvgIcon(name="scan")
		q-btn(round flat dense)
			SvgIcon(name="folder-open-outline")
</template>

<script>
import FileTable from '@/components/common/FileTable.vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default {
	props: ['panels', 'files'],
	components: {
		FileTable,
		SvgIcon,
	}

}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
</style>
