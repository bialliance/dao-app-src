import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutScreen from '_screens/About/AboutScreen'
import DashboardScreen from '_screens/Dashboard/DashboardScreen'

import DaoNavigator from '_screens/Dao/DaoNavigator'
import DaoInvestorScreen from '_screens/Dao/DaoInvestorScreen'
import DaoManagerScreen from '_screens/Dao/DaoManagerScreen'
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
        redirect: { name: 'DaoInvestor' },
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
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardScreen,
        meta: {
            screenOptions: {
                title: 'Dashboard',
            },
        },
    },
    {
        path: '/dao',
        component: DaoNavigator,
        redirect: { name: 'DaoInvestor' },
        children: [
            {
                path: 'investor',
                name: 'DaoInvestor',
                component: DaoInvestorScreen,
                meta: {
                    screenOptions: {
                        title: 'For DAO Investors',
                    },
                },
            },
            {
                path: 'manager',
                name: 'DaoManager',
                component: DaoManagerScreen,
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
