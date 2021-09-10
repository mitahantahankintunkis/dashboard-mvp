import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/', component: () => import('./views/CompanyPage.vue') },
    {
        path: '/yritystiedot',
        component: () => import('./views/CompanyPage.vue'),
        //children: [
        //    {
        //        path: 'tyopaikat',
        //        component: () => import('./views/JobsPage.vue'),
        //    },
        //],
    },

    {
        path: '/tyopaikat',
        component: () => import('./views/JobsPage.vue'),
    },
    {
        path: '/tyopaikat/:id',
        component: () => import('./views/JobApplicantsPage.vue'),
    },

    { path: '/yleiskatsaus', component: () => import('./views/TodoPage.vue') },
    { path: '/koulutukset', component: () => import('./views/TodoPage.vue') },
    { path: '/palvelukatalogi', component: () => import('./views/TodoPage.vue') },
    { path: '/tiedottaminen', component: () => import('./views/TodoPage.vue') },
    { path: '/oppimisen-seuranta', component: () => import('./views/TodoPage.vue') },
    { path: '/asetukset', component: () => import('./views/TodoPage.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')