import { defineStore } from 'pinia'

export const useSearch = defineStore({
	id: 'search',
	state: () => ({
		allSearch: [
			{
				id: 0,
				comment: 'Все договора с Алросой',
				star: true,
				active: true,
				label: 'Договора с Алросой',
			},
			{
				id: 1,
				comment: 'конференция в октябре',
				star: true,
				active: false,
				label: 'Документы к конференции',
				list: [{ id: 0, and: true, mod1: '', mod2: '', mod3: '' }],
			},
			{
				id: 2,
				comment: 'Срочно в работу',
				star: true,
				active: false,
				label: 'Мои просроченные задания',
			},
			{
				id: 3,
				comment: 'Финансы',
				star: true,
				active: false,
				label: 'Отчет за 3 квартал',
			},
			{
				id: 4,
				comment: 'Финансы',
				star: true,
				active: false,
				label: 'Отчет за 2 квартал',
			},
			{
				id: 5,
				comment: 'Введите комментарий к поиску',
				star: true,
				active: false,
				label: 'Я - автор',
			},
			{
				id: 6,
				comment: 'Введите комментарий к поиску',
				star: false,
				active: false,
				label: 'Я - исполнитель',
			},
			{
				id: 7,
				comment: 'Финансы',
				star: false,
				active: false,
				label: 'Договора свыше 100 т.',
			},
			{
				id: 8,
				comment: 'Финансы',
				star: false,
				active: false,
				label: 'Договора до 100 т.',
			},
			{
				id: 9,
				comment: 'Введите комментарий к поиску',
				star: false,
				active: false,
				label: 'Проект 1',
			},
			{
				id: 10,
				comment: 'Введите комментарий к поиску',
				star: false,
				active: false,
				label: 'Проект 2',
			},
			{
				id: 11,
				comment: 'Введите комментарий к поиску',
				star: false,
				active: false,
				label: 'Пример поиска 1',
			},
			{
				id: 12,
				comment: 'Это комментарий',
				star: false,
				active: false,
				label: 'Пример поиска 2',
			},
			{
				id: 13,
				comment: 'Введите комментарий к поиску',
				star: false,
				active: false,
				label: 'Пример поиска 3',
			},
			{
				id: 14,
				comment: 'Это комментарий',
				star: false,
				active: false,
				label: 'Пример поиска 4',
			},
			{
				id: 15,
				comment: 'Это комментарий',
				star: false,
				active: false,
				label: 'Пример поиска 5',
			},
			{
				id: 16,
				comment: 'Введите комментарий к поиску',
				star: false,
				active: false,
				label: 'Пример поиска 6',
			},
			{
				id: 17,
				comment: 'Это комментарий',
				star: false,
				active: false,
				label: 'Пример поиска 7',
			},
		],
		allList: [
			{
				id: 0,
				list: [
					{
						id: 0,
						and: true,
						mod1: 'Тип',
						mod2: 'Равно',
						mod3: 'Документ',
					},
					{
						id: 1,
						and: true,
						mod1: 'Вид карточки',
						mod2: 'Равно',
						mod3: 'Договор',
					},
					{
						id: 2,
						and: true,
						mod1: 'Контрагент',
						mod2: 'Содержит',
						mod3: 'Алроса',
					},
					{
						id: 3,
						and: false,
						mod1: 'Исполнитель',
						mod2: 'Содержит',
						mod3: 'Алроса',
						fuck: 'fuck',
					},
				],
			},
			{
				id: 1,
				list: [
					{ id: 0, and: true, mod1: 'Тип', mod2: 'Содержит', mod3: 'Документ' },
				],
			},
			{
				id: 2,
				list: [{ id: 0, and: true, mod1: null, mod2: null, mod3: null }],
			},
			{
				id: 3,
				list: [{ id: 0, and: true, mod1: null, mod2: null, mod3: null }],
			},
			{
				id: 4,
				list: [{ id: 0, and: true, mod1: null, mod2: null, mod3: null }],
			},
			{
				id: 5,
				list: [{ id: 0, and: true, mod1: null, mod2: null, mod3: null }],
			},
			{
				id: 6,
				list: [{ id: 0, and: true, mod1: null, mod2: null, mod3: null }],
			},
			{
				id: 7,
				list: [{ id: 0, and: true, mod1: null, mod2: null, mod3: null }],
			},
		],
	}),
	getters: {},
	actions: {
		saveSearch(e) {
			this.allSearch.map((item) => (item.active = false))
			let item = {}
			item.id = this.allSearch.length
			item.star = true
			item.active = true
			item.comment = 'Введите комментарий к поиску'
			item.label = e
			this.allSearch.push(item)
		}
	}
})
