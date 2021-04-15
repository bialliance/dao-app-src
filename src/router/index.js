import Vue from 'vue'
import VueRouter from 'vue-router'

import DaoNavigator from '_screens/Dao/DaoNavigator'
import DaoListScreen from '_screens/Dao/DaoListScreen'
import DaoNewScreen from '_screens/Dao/DaoNewScreen'

import DaoViewNavigator from '_screens/Dao/View/DaoViewNavigator'
import DaoViewScreen from '_screens/Dao/View/DaoViewScreen'

import DaoAppScreen from '_screens/Dao/App/DaoAppScreen'

import SoftwareUpdateScreen from '_screens/SoftwareUpdate/SoftwareUpdateScreen'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Root',
        redirect: { name: 'DaoList' },
    },
    {
        path: '/dao',
        component: DaoNavigator,
        children: [
            {
                path: '',
                name: 'DaoList',
                component: DaoListScreen,
                meta: {
                    screenOptions: {
                        title: 'Список ДАО',
                    },
                },
            },
            {
                path: 'new',
                name: 'DaoNew',
                component: DaoNewScreen,
                meta: {
                    screenOptions: {
                        title: 'Новое ДАО',
                    },
                },
            },
            {
                path: 'view/:daoAddress',
                component: DaoViewNavigator,
                children: [
                    {
                        path: '',
                        name: 'DaoView',
                        component: DaoViewScreen,
                        meta: {
                            screenOptions: {
                                title: 'Просмотр',
                            },
                        },
                    },
                    {
                        path: ':appAddress',
                        name: 'DaoApp',
                        component: DaoAppScreen,
                        meta: {
                            screenOptions: {
                                title: 'Приложение',
                            },
                        },
                    },
                ],
            },
        ],
    },
    {
        path: '/software-update',
        name: 'SoftwareUpdate',
        component: SoftwareUpdateScreen,
        meta: {
            screenOptions: {
                title: 'Форма',
            },
        },
    },
]

const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
