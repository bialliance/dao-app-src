import Vue from 'vue'
import VueRouter from 'vue-router'

import DAONavigator from '_screens/DAO/DAONavigator'
import DAOListScreen from '_screens/DAO/DAOListScreen'
import DAONewScreen from '_screens/DAO/DAONewScreen'

import DAOViewNavigator from '_screens/DAO/View/DAOViewNavigator'
import DAOViewScreen from '_screens/DAO/View/DAOViewScreen'

import DAOAppScreen from '_screens/DAO/App/DAOAppScreen'

import SoftwareUpdateScreen from '_screens/SoftwareUpdate/SoftwareUpdateScreen'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Root',
        redirect: { name: 'DAOList' },
    },
    {
        path: '/dao',
        component: DAONavigator,
        children: [
            {
                path: '',
                name: 'DAOList',
                component: DAOListScreen,
                meta: {
                    screenOptions: {
                        title: 'Список ДАО',
                    },
                },
            },
            {
                path: 'new',
                name: 'DAONew',
                component: DAONewScreen,
                meta: {
                    screenOptions: {
                        title: 'Новое ДАО',
                    },
                },
            },
            {
                path: 'view/:daoAddress',
                component: DAOViewNavigator,
                children: [
                    {
                        path: '',
                        name: 'DAOView',
                        component: DAOViewScreen,
                        meta: {
                            screenOptions: {
                                title: 'Просмотр',
                            },
                        },
                    },
                    {
                        path: ':appAddress',
                        name: 'DAOApp',
                        component: DAOAppScreen,
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
