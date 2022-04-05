const headers = [
	{
		id: 0,
		name: 'type',
		label: 'Вид',
		field: 'type',
		align: 'left',
		sortable: true,
		classname: 'nowrap',
	},
	{
		id: 2,
		label: 'Автор',
		align: 'left',
		field: 'executor',
		sortable: true,
		name: 'executor',
		classname: 'nowrap',
	},
	{
		id: 1,
		label: 'Тема',
		field: 'title',
		align: 'left',
		sortable: true,
		name: 'title',
	},
	{
		id: 3,
		label: 'Срок',
		align: 'left',
		field: 'deadline',
		sortable: true,
		name: 'deadline',
		classname: 'nowrap',
	},
]
const headers1 = [
	{
		id: 2,
		label: 'Исполнитель',
		align: 'left',
		field: 'executor',
		sortable: true,
		name: 'executor',
		classname: 'nowrap',
	},
	{
		id: 3,
		label: 'Срок',
		align: 'left',
		field: 'deadline',
		sortable: true,
		name: 'deadline',
		classname: 'nowrap',
	},
	{
		id: 1,
		label: 'Тема',
		field: 'title',
		align: 'left',
		sortable: true,
		name: 'title',
	},
]
const headers2 = [
	{
		id: 1,
		name: 'title',
		label: 'Тема',
		align: 'left',
		field: (row) => row.title,
		format: (val) => `${val}`,
		sortable: true,
	},
	{
		id: 2,
		label: 'Вид',
		align: 'left',
		field: 'vid',
		sortable: true,
		name: 'vid',
		classname: 'nowrap',
	},
	{
		id: 0,
		name: 'type',
		label: 'Тип',
		align: 'left',
		field: 'type',
		sortable: true,
		classname: 'nowrap',
	},
	{
		id: 3,
		label: 'Автор',
		align: 'left',
		field: 'author',
		sortable: true,
		name: 'author',
		classname: 'nowrap',
	},
]

const items = [
	{
		id: 0,
		number: '№ 122',
		doc: 'in',
		unread: true,
		selected: false,
		author: '<Я>',
		executor: 'Орлов П.Ф.',
		status: 'Не начато',
		type: 'На исполнение',
		vid: 'Задание',
		deadline: '2020-08-28',
		urgent: true,
		created: '2020-08-05',
		title:
			'Об эксплуатации автоматизированной информационной системы государственного заказа Санкт-Петербурга',
		files: '3',
	},
	{
		id: 1,
		number: '№ 133',
		doc: 'in',
		unread: false,
		selected: false,
		author: '<Я>',
		executor: 'Воробьев К.А.',
		status: 'В работе',
		type: 'На исполнение',
		vid: 'Задание',
		control: true,
		deadline: '2020-08-17',
		created: '2020-08-07',
		title:
			'О вводе в действие Перечня товаров, работ, услуг закупки которых осуществляются только у субъектов малого и среднего предпринимательства',
		files: '',
	},
	{
		id: 2,
		number: '№ 128',
		doc: 'in',
		unread: false,
		selected: false,
		author: '<Я>',
		executor: 'Соловьева А.А.',
		status: 'Просрочено',
		type: 'На ознакомление',
		vid: 'Документ',
		control: true,
		deadline: '2020-08-16',
		expired: true,
		urgent: true,
		created: '2020-08-13',
		title:
			'Об организации осеннего месячника по благоустройству, озеленению и уборке городских территорий после летнего периода',
		files: '2',
	},
	{
		id: 3,
		number: '№ 144',
		doc: 'in',
		unread: false,
		selected: false,
		author: 'Петров',
		executor: 'Гусев П.И.',
		status: 'Просрочено',
		type: 'На согласование',
		vid: 'Документ',
		deadline: '2020-08-14',
		urgent: true,
		created: '2020-08-06',
		title: 'О согласовании финансового плана Автобазы на 2019 год',
		files: '28',
	},
	{
		id: 4,
		number: '№ 127',
		doc: 'in',
		unread: true,
		selected: false,
		author: '<Я>',
		executor: 'Синичкина Г.И.',
		status: 'Не начато',
		type: 'На исполнение',
		vid: 'Задание',
		control: true,
		deadline: '2020-08-24',
		created: '2020-08-05',
		title:
			'Об организации осеннего месячника по благоустройству, озеленению и уборке городских территорий после летнего периода',
		files: '',
	},
	{
		id: 5,
		number: '№ 126',
		doc: 'in',
		unread: false,
		selected: false,
		author: 'Петров',
		executor: 'Воробьев К.А.',
		status: 'В работе',
		type: 'На согласование',
		vid: 'Документ',
		control: true,
		deadline: '2020-08-18',
		created: '2020-07-21',
		title:
			'Протокол совещания по вопросу выполнения третьей очереди работ по созданию ГИС СПб 27.09.2020 № ***',
		files: '1',
	},
	{
		id: 6,
		number: '№ 185',
		doc: 'in',
		unread: false,
		selected: false,
		author: 'Петров',
		executor: 'Воробьев К.А.',
		status: 'В работе',
		control: true,
		type: 'На ознакомление',
		vid: 'Документ',
		deadline: '2020-08-26',
		created: '2020-08-12',
		title:
			'О восстановлении работоспособности системы подогрева приточной вентиляции',
		files: '5',
	},
	{
		id: 7,
		number: '№ 158',
		doc: 'in',
		unread: false,
		selected: false,
		author: '<Я>',
		executor: 'Гусев П.И.',
		status: 'Делегировано',
		type: 'На исполнение',
		vid: 'Задание',
		deadline: '2020-08-27',
		urgent: true,
		created: '2020-08-11',
		title: 'О вызове представителя',
		files: '3',
	},
	{
		id: 8,
		number: '№ 160',
		doc: 'in',
		unread: false,
		selected: false,
		author: '<Я>',
		executor: 'Синичкина Г.И.',
		status: 'Делегировано',
		type: 'На исполнение',
		vid: 'Задание',
		control: true,
		deadline: '2020-08-17',
		urgent: true,
		created: '2020-08-12',
		title:
			'Совещание по вопросу исполнения договора от 24.06.2015 № *** на оказание услуги по размещению кабелей на территории Петербургского метрополитена и их техническому обслуживанию, тзаключенного с ПАО Мегфон',
		files: '8',
	},
	{
		id: 9,
		number: '№ 150',
		doc: 'in',
		unread: false,
		selected: false,
		author: '<Я>',
		executor: 'Воробьев К.А.',
		status: 'Просрочено',
		type: 'На ознакомление',
		vid: 'Документ',
		deadline: '2020-08-04',
		control: true,
		expired: true,
		created: '2020-08-13',
		title: 'О срабатывании автоматического выключателя SF58',
		files: '',
	},
	{
		id: 10,
		number: '№ 225',
		doc: 'in',
		unread: false,
		selected: false,
		author: 'Петров',
		executor: 'Жаворонков К.К',
		status: 'В работе',
		type: 'На исполнение',
		vid: 'Задание',
		deadline: '2020-08-19',
		urgent: true,
		created: '2020-08-05',
		title: 'О рассмотрении РД по ЛПЛ',
		files: '',
	},
	{
		id: 11,
		number: '№ 122',
		doc: 'out',
		unread: false,
		selected: false,
		author: '<Я>',
		executor: 'Орлов П.Ф.',
		status: 'На контроле',
		type: 'На исполнение',
		vid: 'Задание',
		deadline: '2020-08-28',
		urgent: true,
		created: '2020-08-05',
		title:
			'Об эксплуатации автоматизированной информационной системы государственного заказа Санкт-Петербурга',
		files: '3',
	},
	{
		id: 12,
		number: '№ 133',
		doc: 'out',
		unread: false,
		selected: false,
		author: '<Я>',
		executor: 'Воробьев К.А.',
		status: 'Завершено',
		type: 'На исполнение',
		vid: 'Задание',
		control: true,
		deadline: '2020-08-17',
		created: '2020-08-07',
		title:
			'О вводе в действие Перечня товаров, работ, услуг закупки которых осуществляются только у субъектов малого и среднего предпринимательства',
		files: '',
	},
	{
		id: 13,
		number: '№ 128',
		doc: 'out',
		unread: false,
		selected: false,
		author: '<Я>',
		executor: 'Соловьева А.А.',
		status: 'На контроле',
		type: 'На ознакомление',
		vid: 'Документ',
		control: true,
		deadline: '2020-08-16',
		expired: true,
		urgent: true,
		created: '2020-08-13',
		title:
			'Об организации осеннего месячника по благоустройству, озеленению и уборке городских территорий после летнего периода',
		files: '2',
	},
	{
		id: 14,
		number: '№ 144',
		doc: 'out',
		unread: false,
		selected: false,
		author: 'Петров',
		executor: 'Гусев П.И.',
		status: 'Завершено',
		type: 'На согласование',
		vid: 'Документ',
		deadline: '2020-08-14',
		urgent: true,
		created: '2020-08-06',
		title: 'О согласовании финансового плана Автобазы на 2019 год',
		files: '28',
	},
	{
		id: 15,
		number: '№ 127',
		doc: 'out',
		unread: false,
		selected: false,
		author: '<Я>',
		executor: 'Синичкина Г.И.',
		status: 'На контроле',
		type: 'На исполнение',
		vid: 'Задание',
		control: true,
		deadline: '2020-08-24',
		created: '2020-08-05',
		title:
			'Об организации осеннего месячника по благоустройству, озеленению и уборке городских территорий после летнего периода',
		files: '',
	},
	{
		id: 16,
		number: '№ 126',
		doc: 'out',
		unread: false,
		selected: false,
		author: 'Петров',
		executor: 'Воробьев К.А.',
		status: 'Просрочено',
		type: 'На согласование',
		vid: 'Документ',
		control: true,
		deadline: '2020-08-18',
		created: '2020-07-21',
		title:
			'Протокол совещания по вопросу выполнения третьей очереди работ по созданию ГИС СПб 27.09.2020 № ***',
		files: '1',
	},
	{
		id: 17,
		number: '№ 185',
		doc: 'out',
		unread: false,
		selected: false,
		author: 'Петров',
		executor: 'Воробьев К.А.',
		status: 'На контроле',
		control: true,
		type: 'На ознакомление',
		vid: 'Документ',
		deadline: '2020-08-26',
		created: '2020-08-12',
		title:
			'О восстановлении работоспособности системы подогрева приточной вентиляции',
		files: '5',
	},
]

const bl = [
	{
		id: 0,
		title: 'Входящие',
		digit: 11,
		buttons: ['Прочитано', 'В избранное', 'Делегировать', 'Завершить'],
		labels: ['Новые', 'В работе', 'Просрочено', 'Делегировано'],
		seria: [2, 4, 2, 3],
	},
	{
		id: 1,
		title: 'Исходящие',
		digit: 7,
		buttons: ['В избранное', 'Отозвать'],
		labels: ['На контроле', 'Завершено', 'Просрочено'],
		seria: [4, 2, 1],
	},
	{ id: 2, active: false, digit: 67, title: 'Исполнительская дисциплина' },
	{
		id: 3,
		title: 'Избранное',
		digit: 18,
		but: 'Прочитать все',
		classname: 'long',
	},
]
const bl1 = [
	{
		id: 0,
		title: 'Входящие',
		digit: 9,
		buttons: ['Прочитано', 'В избранное', 'Делегировать', 'Завершить'],
		labels: ['Новые', 'В работе', 'Делегировано'],
		seria: [2, 4, 3],
	},
	{
		id: 1,
		title: 'Исходящие',
		digit: 7,
		buttons: ['В избранное', 'Отозвать'],
		labels: ['На контроле', 'Завершено', 'В работе'],
		seria: [4, 2, 1],
	},
	{
		id: 2,
		digit: 19,
		title: 'Просрочено',
		labels: ['Входящие', 'Исходящие', 'Истекает срок'],
		buttons: ['В избранное', 'Отозвать'],
		seria: [9, 7, 3],
	},
	{
		id: 3,
		title: 'Избранное',
		digit: 18,
		but: 'Прочитать все',
		classname: 'long',
	},
]

export { headers, headers1, headers2, items, bl, bl1 }
