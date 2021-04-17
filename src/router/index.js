import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutScreen from '_screens/About/AboutScreen'

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
        path: '/about',
        name: 'About',
        component: AboutScreen,
        meta: {
            screenOptions: {
                title: 'About Us',
            },
        },
    },
    {
        path: '/dao',
        component: DaoNavigator,
        children: [
            // TODO: Переделать на Dao для менеджеров
            {
                path: '',
                name: 'DaoList',
                component: DaoListScreen,
                meta: {
                    screenOptions: {
                        title: 'For DAO Managers',
                    },
                },
            },
            {
                path: 'new',
                name: 'DaoNew',
                component: DaoNewScreen,
                meta: {
                    screenOptions: {
                        title: 'Create DAO',
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
                                title: 'View DAO',
                            },
                        },
                    },
                    {
                        path: ':appAddress',
                        name: 'DaoApp',
                        component: DaoAppScreen,
                        meta: {
                            screenOptions: {
                                title: 'DAO App',
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
