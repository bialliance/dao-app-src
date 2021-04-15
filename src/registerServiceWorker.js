/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
        registrationOptions: { scope: './' },
        ready(registration) {
            console.info('Service worker is active.')
        },
        registered(registration) {
            console.info('Service worker has been registered.')
        },
        cached(registration) {
            console.info('Content has been cached for offline use.')
        },
        updatefound(registration) {
            console.info('New content is downloading.')
        },
        updated(registration) {
            console.info('New content is available; please refresh.')

            document.dispatchEvent(new CustomEvent('serviceWorkerUpdated', {
                detail: registration,
            }))
        },
        offline() {
            console.info('No internet connection found. App is running in offline mode.')
        },
        error(error) {
            console.error('Error during service worker registration:', error)
        },
    })
}
