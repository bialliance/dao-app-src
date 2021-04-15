import getters from './notifications.getters'
import mutations from './notifications.mutations'
import actions from './notifications.actions'

const state = {
    items: {},
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
