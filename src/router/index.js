import Vue from 'vue'
import VueRouter from 'vue-router'

import DAONavigator from '_screens/DAO/DAONavigator'
import DAOListScreen from '_screens/DAO/DAOListScreen'
import DAONewScreen from '_screens/DAO/DAONewScreen'
import SoftwareUpdateScreen from '_screens/SoftwareUpdate/SoftwareUpdateScreen'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Root',
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
    const isBootstrap = !from.name
    const isRootRoute = to.name === 'Root'

    // Next
    if (isBootstrap) {
        // Application initialization. Step 1 [router] - Bootstrap

        if (isRootRoute) {
            // Application initialization. Step 3 [router] - Root route

            next()
        } else {
            // Application initialization. Step 2 [router] - No Root route > Push to Splash Screen

            next({ name: 'Root' })
        }
    } else {
        // Other Screen

        next()
    }
})

export default router
