import Vue from 'vue'
import Vuex from 'vuex'

import notifications from '_features/notifications/notifications.store'
import softwareUpdate from '_features/softwareUpdate/softwareUpdate.store'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        notifications,
        softwareUpdate,
    },
})
