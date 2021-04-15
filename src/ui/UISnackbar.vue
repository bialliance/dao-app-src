<template>
    <v-snackbar
        v-model="isShown"
        bottom
        :color="notificationColor"
        :timeout="notificationTimeout"
    >
        {{ notificationText || null }}
        <template v-slot:action="{ attrs }">
            <v-btn
                v-if="notificationAction"
                color="primary"
                text
                v-bind="attrs"
                @click="notificationAction.click()"
            >
                {{ notificationAction.text }}
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'UISnackbar',

        data: () => ({
            notification: undefined,
            isShown: false,
            timeout: 5000,
        }),

        computed: {
            ...mapGetters({
                notifications: 'notifications/getLowNotifications',
            }),

            notificationText() {
                return this.notification?.text || null
            },

            notificationColor() {
                return this.notification?.color || null
            },

            notificationTimeout() {
                return this.notification?.timeout || null
            },

            notificationAction() {
                return this.notification?.action || null
            },
        },

        watch: {
            notifications: {
                handler: function (notifications) {
                    if (notifications.length) {
                        this.showNotifications()
                    }
                },
                immediate: true,
            },

            isShown(isShown) {
                if (!isShown) {
                    if (this.notification) {
                        this.$store.dispatch('notifications/removeNotification', this.notification.id)
                    }
                }
            },
        },

        methods: {
            showNotifications() {
                if (!this.showNotificationsInterval) {
                    if (this.notifications.length) {
                        this.setNotification(this.notifications[0] || null)

                        this.showNotificationsInterval = window.setInterval(() => {
                            if (this.notifications.length) {
                                this.setNotification(this.notifications[0] || null)
                            } else {
                                window.clearInterval(this.showNotificationsInterval)
                                this.showNotificationsInterval = undefined
                                this.notification = undefined
                            }
                        }, this.timeout + 500)
                    }
                }
            },

            setNotification(payload) {
                const id = payload.id || null
                const text = payload.text || null
                const color = payload.color || null
                const action = payload.action || null
                const timeout = payload.timeout || this.timeout

                if (text && id) {
                    this.notification = {
                        id,
                        text,
                        color,
                        action,
                        timeout,
                    }

                    this.isShown = true
                }
            },
        },
    }
</script>
