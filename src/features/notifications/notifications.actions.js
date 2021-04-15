import { v4 as uuidV4 } from 'uuid'
import moment from 'moment'

const actions = {
    pushNotification({ commit }, payload) {
        const id = uuidV4()
        const priority = 'low'
        const text = payload.text || null
        const color = payload.color || null
        const action = payload.action || null
        const createdAt = moment().valueOf()

        if (text) {
            commit('setNotification', {
                id,
                priority,
                text,
                color,
                action,
                createdAt,
            })
        }
    },

    removeNotification({ commit }, notificationId) {
        commit('removeNotification', notificationId)
    },

}

export default actions
