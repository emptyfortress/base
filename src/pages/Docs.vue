<template lang="pug">
.container
	q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei")
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
						SvgIcon(name="pencil")
						SvgIcon(name="refresh")
						SvgIcon(name="bin")
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
							InfoPanel(:panels="panels" @toggle="expandAll")
							FilePanel(:panels="panels" :files="files")

					q-tab-panel(name="hod")
						p lakjsdlkj

</template>

<script>
import { ref, reactive, computed } from 'vue'
import Status from '@/components/Status.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import FilePanel from '@/components/common/FilePanel.vue'
import InfoPanel from '@/components/common/InfoPanel.vue'

export default {
	components: {
		Status,
		SvgIcon,
		FilePanel,
		InfoPanel,
	},
	setup() {
		const panels = reactive({
			all: null,
			info: true,
			file: false,
		})
		const hei = computed(() => {
			return 'height: ' + (window.innerHeight - 145) + 'px;'
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

		const files = [
			{ id: 0, icon: 'doc', name: 'Файл номер 1', version: 'в.1' },
			{ id: 1, icon: 'pdf', name: 'Файл номер 2', version: 'в.1' },
			{ id: 2, icon: 'xls', name: 'Файл номер 3', version: 'в.1' },
		]

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
			files,
			hei,
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
</style>
