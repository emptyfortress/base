<template lang="pug">
q-expansion-item(switch-toggle-side label="Основные файлы").inside
	q-card
		q-card-section
			table
				tr(v-for="file in files")
					td.sml
						img(:src="`/${file.icon}.svg`")
					td.cursor-pointer Название файла.doc
					td.cursor-pointer.text-center в.1
					td.sml
						q-btn(dense flat icon='mdi-dots-vertical')
q-expansion-item(switch-toggle-side label="Дополнительные файлы").inside
	q-card
		q-card-section lakjsdlkjasl
</template>

<script>
export default {
	props: {
		files: {
			type: Array,
		}, 
	},

}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

table {
	width: 100%;
	border-collapse: collapse;
	tr {
	}
	.sml { 
		width: 32px;
	}
	td {
		/* background: #eee; */
		color: var(--q-link);
		font-size: 1.0rem;
		border-top: 1px solid var(--my-border-color);
		border-bottom: 1px solid var(--my-border-color);

	}
	img {
		width: 20px;
		margin-top: 6px;
		margin-bottom: 0;
	}
}

</style>
