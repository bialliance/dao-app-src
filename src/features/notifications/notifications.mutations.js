import Vue from 'vue'

const mutations = {
    setNotification(state, notification) {
        Vue.set(state.items, notification.id, notification)
    },

    removeNotification(state, notificationId) {
        Vue.delete(state.items, notificationId)
    },
}

export default mutations
