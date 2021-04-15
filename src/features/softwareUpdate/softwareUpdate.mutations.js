const mutations = {
    setAvailable(state, payload) {
        state.isAvailable = !!payload
    },

    setUpdating(state, payload) {
        state.isUpdating = !!payload
    },

    setServiceWorkerRegistration(state, payload) {
        state.serviceWorkerRegistration = payload
    },
}

export default mutations
