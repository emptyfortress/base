import { Quasar, Notify } from 'quasar'
import 'quasar/dist/quasar.prod.css'
// import './assets/styles/quasar.variables.scss'
import iconSet from 'quasar/icon-set/mdi-v5.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v5/mdi-v5.css'
import './assets/styles/theme.scss'

export function initQuasar(app) {
	app.use(Quasar, {
		config: {
			brand: {
				// two: 'red',
				// primary: '#2196f3',
				// primary: 'red',
				// sunshine: '#FEBE2A',
				// whiteField: '#E2E1E1',
				// darkBG: '#1D2F37',
			},
			globalProperties: {},
			// dark: true,
		},
		plugins: {
			Notify,
		},
		iconSet: iconSet,
	})
}
