<template lang="pug">
table
	thead
		th Вид
		th Имя
		th Тип
		th
		th
	tr(v-for="link in links")
		td
			SvgIcon(name="cardv")
		td.name {{ link.name }}
		td.text-center {{ link.type }}
		td.sml
			q-btn(flat round dense icon="mdi-information" color="primary")
		td.sml
			q-btn(dense flat icon='mdi-dots-vertical')
				q-menu(transition-show="jump-down" transition-hide="jump-up" dense)
					q-list(style="min-width: 100px")
						q-item(clickable v-for="item in menu" v-close-popup)
							q-item-section {{ item }}

</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'

export default {
	props: {
		links: {
			type: Array,
		},
	},
	components: {
		SvgIcon,
	},

	setup() {
		const menu = [
			'Action 1', 'Action 2',
			'Action 3'
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
		width: 28px;
	}
}
td {
	font-size: .85rem;
	border-top: 1px solid var(--my-border-color);
	border-bottom: 1px solid var(--my-border-color);
	line-height: 100%;
}
th {
	font-size: 0.7rem;
	text-align: left;
}
.name {
	cursor: pointer;
	color: var(--q-link);
}
</style>
