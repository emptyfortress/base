<template lang="pug">
.relative-position
	q-expansion-item(v-model="panels.file" switch-toggle-side label="Файлы" )
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
.actionBt {
	position: absolute;
	top: 7px;
	right: 16px;
	body.body--dark & {
		color: var(--dark-text-color);
	}
	&.gr svg {
		opacity: 0.7;
		&:hover {
			opacity: 1;
		}
	}
}
</style>
