import { createApp } from 'vue'
import App from './01-base/08_zichuangfu'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

