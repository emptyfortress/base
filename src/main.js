import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
// import { Quasar } from 'quasar'
// import quasarUserOptions from './quasar-user-options'
import { initQuasar } from './quasar'

// const app = createApp(App).use(Quasar, quasarUserOptions)
// app.mount('#app')
//
const app = createApp(App)
initQuasar(app);
app.mount("#app")
