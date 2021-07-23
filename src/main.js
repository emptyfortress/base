import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
// import { Quasar } from 'quasar'
// import quasarUserOptions from './quasar-user-options'
import { initQuasar } from './quasar'
import { router } from '@/router/router'
import { createPinia } from 'pinia'

const app = createApp(App)
initQuasar(app)
app.use(router)
app.use(createPinia())
app.mount('#app')
