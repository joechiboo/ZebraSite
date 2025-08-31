import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import News from './views/News.vue'
import Services from './views/Services.vue'
import Contact from './views/Contact.vue'
import Knowledge from './views/Knowledge.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/news', name: 'News', component: News },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/knowledge', name: 'Knowledge', component: Knowledge },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory('/ZebraSite/'),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')