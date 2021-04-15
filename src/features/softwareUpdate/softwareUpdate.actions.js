const actions = {
    setServiceWorkerRegistration({ commit }, payload) {
        commit('setServiceWorkerRegistration', payload)
        commit('setAvailable', true)
    },

    update({ commit }, payload) {
        const serviceWorkerRegistration = payload?.serviceWorkerRegistration

        if (!serviceWorkerRegistration || !serviceWorkerRegistration.waiting) {
            return
        }

        serviceWorkerRegistration.waiting.postMessage({ type: 'SKIP_WAITING' })
    },
}

export default actions
