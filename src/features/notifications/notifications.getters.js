import { filter as _filter, orderBy as _orderBy } from 'lodash'

const getters = {
    getLowNotifications: (state) => {
        const notifications = _filter(state.items, (item) => item.priority === 'low')

        return _orderBy(notifications, ['createdAt'], ['asc'])
    },
}

export default getters
