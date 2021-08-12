<template lang="pug">
table
	tr(v-for="link in links")
		td.sml
			img(:src="`/${link.icon}.svg`")
		td.cursor-pointer {{ link.name }}
		td.cursor-pointer.text-center lkasj
		td.sml
			q-btn(dense flat icon='mdi-dots-vertical')
				q-menu(transition-show="jump-down" transition-hide="jump-up" dense)
					q-list(style="min-width: 100px")
						q-item(clickable v-for="item in menu" v-close-popup)
							q-item-section {{ item }}

</template>

<script>
import { computed } from 'vue'

export default {
	props: {
		links: {
			type: Array,
		},
	},

	setup() {
		const menu = [
			'Добавить комментарий', 'Заблокировать',
			'Открыть', 'Загрузить версию',
			'Удалить', 'Скачать',
		]

		return {
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
