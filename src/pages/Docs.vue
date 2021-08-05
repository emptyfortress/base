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
				.zag.q-mb-md {{ item[0].title }}
				.btgroup
					q-btn(unelevated color="primary") Зарегистрировать
					q-btn(unelevated color="primary") Действует
					q-btn(outline icon="mdi-dots-horizontal" color="primary")

</template>

<script>
import { ref } from 'vue'
import Status from '@/components/Status.vue'

export default {
	components: {
		Status,
	},
	setup() {
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
