import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import ru from './i18n/vuetify/ru'

import { library as faLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faMoon as fasMoon,
    faPlus as fasPlus,
    faSun as fasSun,
    faTimes as fasTimes,
} from '@fortawesome/free-solid-svg-icons'

const makeIcon = (icon) => {
    faLibrary.add(icon)

    return {
        component: FontAwesomeIcon,
        props: {
            icon: [icon.prefix, icon.iconName],
        },
    }
}

const MY_ICONS = {
    complete: 'complete',
    cancel: 'cancel',
    close: makeIcon(fasTimes),
    delete: 'delete', // delete (e.g. v-chip close)
    clear: 'clear',
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
    prev: 'prev',
    next: 'next',
    checkboxOn: 'checkboxOn',
    checkboxOff: 'checkboxOff',
    checkboxIndeterminate: 'checkboxIndeterminate',
    delimiter: 'delimiter', // for carousel
    sort: 'sort',
    expand: 'expand',
    menu: 'menu',
    subgroup: 'subgroup',
    dropdown: 'dropdown',
    radioOn: 'radioOn',
    radioOff: 'radioOff',
    edit: 'edit',
    ratingEmpty: 'ratingEmpty',
    ratingFull: 'ratingFull',
    ratingHalf: 'ratingHalf',
    loading: 'loading',
    first: 'first',
    last: 'last',
    unfold: 'unfold',
    file: 'file',
    // FontAwesome
    moon: makeIcon(fasMoon),
    plus: makeIcon(fasPlus),
    sun: makeIcon(fasSun),
}

Vue.use(Vuetify)

export default new Vuetify({
    lang: {
        locales: { ru },
        current: 'ru',
    },
    icons: {
        values: MY_ICONS,
    },
    theme: {
        dark: true,
        themes: {
            light: {
                primary: '#6f56fd',
            },
            dark: {
                primary: '#6f56fd',
            },
        },
    },
})