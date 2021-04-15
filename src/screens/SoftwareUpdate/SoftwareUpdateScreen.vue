<template>
    <v-container class="fill-height" fluid>
        <v-row justify="center">
            <v-col cols="auto">
                <template v-if="isAvailableSoftwareUpdate">
                    <div class="text-center">Доступна новая версия ПО.</div>

                    <div class="text-center mt-6">
                        <v-btn color="primary" @click="updateSoftware">Обновить ПО</v-btn>
                    </div>
                </template>
                <template v-else>
                    <div>Установлено новейшее ПО.</div>
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'SoftwareUpdateScreen',

        computed: {
            isAvailableSoftwareUpdate() {
                return this.$store.state.softwareUpdate.isAvailable
            },
        },

        methods: {
            updateSoftware() {
                const serviceWorkerRegistration = this.$store.state.softwareUpdate.serviceWorkerRegistration

                this.$store.dispatch('softwareUpdate/update', {
                    serviceWorkerRegistration,
                })
            },
        },
    }
</script>
