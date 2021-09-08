<template lang="pug">
.container
	.zag Меню
	.lab Дизайн:
	.bl
		.flexi
			ul
				li Font size: 14px;
				li Color: rgba( 0, 0, 0, .7 );
				li hover background: #ebebeb;
			ul
				li Divider-height: 1px;
				li Divider-color: #0000001f;
				li Border-radius: 4px;
			ul
				li Внутри одного блока либо все пункты<br>имеют иконки, либо все без иконок
				li Размер иконок 24px или 18px
			ul
				li Два размера: normal and dense
				li normal: min-item-height = 48px
				li dense: min-item-height = 32px

	.lab Базовое меню:
	.bl
		q-btn(outline color="primary").q-mr-sm Текст
			q-menu
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 3")
						q-item-section Item {{ n }}
		q-btn(outline color="primary").q-mr-sm Несколько строк
			q-menu
				q-list(bordered separator).base
					q-item(clickable v-ripple v-close-popup v-for="n in 2")
						q-item-section
							q-item-label Item {{ n }}
							q-item-label(caption) Еще текст
					q-item(clickable v-ripple v-close-popup)
						q-item-section
							q-item-label(overline) OVERLINE
							q-item-label Item 4
		q-btn(outline color="primary").q-mr-sm Disabled item
			q-menu
				q-list.base
					q-item(clickable v-ripple v-close-popup)
						q-item-section Item 1
					q-item(disable)
						q-item-section Open...
					q-item(clickable v-ripple v-close-popup)
						q-item-section Item 2
		q-btn(outline color="primary").q-mr-sm Текст + иконки
			q-menu
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 3")
						q-item-section(avatar)
							q-icon(name="mdi-alien-outline")
						q-item-section Item {{ n }}
					q-separator
					q-item(clickable v-ripple v-close-popup)
						q-item-section(avatar)
							q-icon(name="mdi-all-inclusive")
						q-item-section Item {{ n }}
						q-item-section(side)
							q-icon(name="mdi-message-outline")
					q-separator
					q-item(clickable v-ripple v-close-popup v-for="n in 3")
						q-item-section Item {{ n }}
						q-item-section(side)
							q-icon(name="mdi-alert-circle-outline" color="positive")
		q-btn(outline color="primary").q-mr-sm Блоки
			q-menu
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section(avatar)
							q-icon(name="mdi-crosshairs-gps")
						q-item-section Item {{ n }}
					q-separator
					q-item(clickable v-ripple v-close-popup v-for="n in 3")
						q-item-section Item {{ n }}
		q-btn(outline color="primary").q-mr-sm.q-ml-xl Dense
			q-menu
				q-list(dense style="min-width: 120px;")
					q-item(clickable v-ripple v-close-popup v-for="n in 5")
						q-item-section Item {{ n }}
		q-btn(outline color="primary").q-mr-sm Dense + icons
			q-menu
				q-list(dense)
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section(avatar)
							q-icon(name="mdi-alien-outline" size="xs")
						q-item-section Item {{ n }}
	.lab Дополнительно:
	.bl
		q-btn(outline color="primary" label="Submenu").q-mr-sm
			q-menu
				q-list(style="min-width: 100px")
					q-item(clickable v-close-popup)
						q-item-section Open...
					q-item(clickable v-close-popup)
						q-item-section New
					q-separator
					q-item(clickable)
						q-item-section Preferences
						q-item-section(side)
							q-icon(name="mdi-chevron-right")
						q-menu(anchor="top end" self="top start")
							q-list
								q-item(v-for="n in 2" :key="n" clickable)
									q-item-section Submenu Label
									q-item-section(side)
										q-icon(name="mdi-chevron-right")
									q-menu(auto-close anchor="top end" self="top start")
										q-list
											q-item(v-for="n in 4" :key="n" clickable)
												q-item-section 3rd level Label
					q-separator
					q-item(clickable v-close-popup)
						q-item-section Quit
		q-btn(outline color="primary" label="Primary color").q-mr-sm
			q-menu.bg-primary.text-white
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 3")
						q-item-section Item {{ n }}
		q-btn(outline color="primary" label="Scroll").q-mr-sm
			q-menu
				q-list(style="max-height: 130px;").base
					q-item(clickable v-ripple v-close-popup v-for="n in 6")
						q-item-section Item {{ n }}
		q-btn(outline color="primary" label="Context menu").q-mr-sm
			q-menu(context-menu)
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section Item {{ n }}
	.lab Transitions:
	.bl
		q-btn(outline color="primary" label="Fade").q-mr-sm
			q-menu
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section Item {{ n }}
		q-btn(outline color="primary" label="Scale").q-mr-sm
			q-menu(transition-show="scale" transition-hide="scale")
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section Item {{ n }}
		q-btn(outline color="primary" label="Slide down").q-mr-sm
			q-menu(transition-show="jump-down" transition-hide="jump-up")
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section Item {{ n }}
		q-btn(outline color="primary" label="Slide right").q-mr-sm
			q-menu(transition-show="jump-right" transition-hide="jump-left")
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section Item {{ n }}
		q-btn(outline color="primary" label="Slide left").q-mr-sm
			q-menu(transition-show="jump-left" transition-hide="jump-right")
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section Item {{ n }}
	.lab Position:
	.bl
		q-btn(outline color="primary" label="Default").q-mr-sm
			q-menu
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section Item {{ n }}
		q-btn(outline color="primary" label="Side by side").q-mr-sm
			q-menu(anchor="top right" self="top left")
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section Item {{ n }}
		q-btn(outline color="primary" label="Cover").q-mr-sm
			q-menu(anchor="center middle" self="center middle")
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section Item {{ n }}
		q-btn(outline color="primary" label="Offset").q-mr-sm
			q-menu(:offset="[-140, -140]")
				q-list.base
					q-item(clickable v-ripple v-close-popup v-for="n in 4")
						q-item-section Item {{ n }}
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.base {
	min-width: 160px;
}
.container {
	padding-bottom: 15rem;
}
.q-item__section--avatar {
	min-width: inherit;
	color: var(--text-color);
}
ul, li {
	margin: 0;
	padding: 0;
	padding-left: 1rem;
}
</style>
