<template lang="pug">
q-expansion-item(switch-toggle-side :label="mainFile" default-opened).inside
	q-card
		q-card-section.q-pt-none
			table
				tr(v-for="file in files")
					td.sml
						img(:src="`/${file.icon}.svg`")
					td.cursor-pointer {{ file.name }}
					td.cursor-pointer.text-center {{ file.version }}
					td.sml
						q-btn(dense flat icon='mdi-dots-vertical')
							q-menu(transition-show="jump-down" transition-hide="jump-up" dense)
								q-list(style="min-width: 100px")
									q-item(clickable v-for="item in menu" v-close-popup)
										q-item-section {{ item }}
q-expansion-item(switch-toggle-side label="Дополнительные файлы").inside
	q-card
		q-card-section.q-pt-none
			.text-overline.disabled
				q-icon(name="mdi-cancel").q-mr-sm
				span Дополнительные файлы не найдены.

</template>

<script>
import { computed } from 'vue'

export default {
	props: {
		files: {
			type: Array,
		},
		dopfiles: {
			type: Array,
		}
	},

	setup(props) {
		const menu = [
			'Добавить комментарий', 'Заблокировать',
			'Открыть', 'Загрузить версию',
			'Удалить', 'Скачать',
		]
		const mainFile = computed(() => {
			return `Основные файлы (${props.files.length})`
		})

		return {
			mainFile,
			menu,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';

tr:hover {
	background: var(--bg-hover);
}
table {
	width: 100%;
	border-collapse: collapse;
	.sml {
		width: 32px;
	}
}
td {
	/* background: #eee; */
	color: var(--q-link);
	font-size: .9rem;
	border-top: 1px solid var(--my-border-color);
	border-bottom: 1px solid var(--my-border-color);
	line-height: 100%;
}
img {
	width: 20px;
	margin-top: 6px;
	margin-bottom: 0;
}
</style>
