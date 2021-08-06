<template lang="pug">
.container
	q-splitter(v-model="splitterModel" :limits="[0, 100]")
		template(v-slot:before)
			.preview
				.pdf
					h4 Preview
		template(v-slot:after)
			.q-ml-md
				.row.justify-between.items-baseline
					.num Вх-123/3055
					Status(title="Подготовка")
				br
				.zag.q-mb-md 
					|{{ item[0].title }}
					span.q-ml-lg
						svgIcon(name="pencil")
						svgIcon(name="refresh")
						svgIcon(name="bin")
				.btgroup
					q-btn( color="primary") Зарегистрировать
					q-btn(unelevated color="primary") Действует
					q-btn(outline icon="mdi-dots-horizontal" color="primary")
					q-btn(unelevated ) История

				q-tabs(v-model="tab" align="left" inline-label switch-indicator indicator-color="primary" :breakpoint="500")
					q-tab(name="main" label="Главная")
					q-tab(name="hod" label="Ход согласования")

				q-tab-panels(v-model="tab" animated )
					q-tab-panel(name="main")
						q-list
							.pos
								q-expansion-item(v-model='panels.info' switch-toggle-side label="Информация")
									q-card
										q-card-section Детальный план ввода в эксплуатацию автоматизированной информационной системы государственного заказа Санкт-Петербурга на периода март-май 2020 г.
										q-card-section.q-pt-none laksjd

								.actionBt
									q-btn(round flat dense icon="mdi-unfold-more-horizontal" @click="expandAll")
							.pos
								q-expansion-item(v-model="panels.file" switch-toggle-side label="Файлы" )
									q-card
										q-card-section
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid.
								.actionBt
									q-btn(round flat dense )
										svgIcon(name="sign")
									q-btn(round flat dense )
										svgIcon(name="scan")
									q-btn(round flat dense)
										svgIcon(name="folder-open-outline")

					q-tab-panel(name="hod")
						p lakjsdlkj

</template>

<script>
import { ref, reactive } from 'vue'
import Status from '@/components/Status.vue'
import svgIcon from '@/components/svgIcon.vue'

export default {
	components: {
		Status,
		svgIcon,
	},
	setup() {
		const panels = reactive({
			all: null,
			info: false,
			file: false,
		})
		const expandAll = () => {
			if (!panels.all) {
				Object.keys(panels).map((key) => {
					return (panels[key] = true)
				})
			} else {
				Object.keys(panels).map((key) => {
					return (panels[key] = false)
				})
			}
		}

		const item = [
			{
				id: 0,
				number: '№ 122',
				unread: false,
				selected: false,
				author: '<Я>',
				executor: 'Орлов П.Ф.',
				status: 'Не начато',
				deadline: '2018-08-28',
				created: '2018-08-05',
				title:
					'Об эксплуатации автоматизированной информационной системы государственного заказа Санкт-Петербурга',
				files: '3',
			},
		]
		return {
			splitterModel: ref(50),
			item,
			tab: ref('main'),
			panels,
			expandAll,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/theme.scss';
.container {
	margin-top: 1rem;
}
.preview {
	width: 100%;
	height: calc(100vh - 145px);
	padding-right: 0.5rem;
	.pdf {
		background: var(--bg-drawer);
		border: 1px solid var(--my-border-color);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #aaa;
	}
}
body.body--dark .preview .pdf {
	color: var(--dark-text-color);
	h4 {
		opacity: 0.5;
	}
}
.num {
	font-size: 1.1rem;
}
.btgroup {
	button {
		margin-bottom: 4px;
	}
	button:not(:last-child) {
		margin-right: 4px;
	}
	padding-bottom: 1rem;
	border-bottom: 1px solid var(--my-border-color);
}
.q-expansion-item--expanded {
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	border: 1px solid var(--my-border-color);
}
.pos {
	position: relative;
}
.actionBt {
	position: absolute;
	top: 7px;
	right: 16px;
	body.body--dark & {
		color: var(--dark-text-color);
	}
}
</style>
