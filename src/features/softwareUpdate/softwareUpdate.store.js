import mutations from './softwareUpdate.mutations'
import actions from './softwareUpdate.actions'

const state = {
    isAvailable: false,
    isUpdating: false,
    serviceWorkerRegistration: null,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
