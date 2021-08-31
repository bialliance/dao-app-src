<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="3">
                    <v-progress-circular
                        :size="100"
                        :width="15"
                        :value="newDao.value"
                        color="green"
                        :indeterminate="newDao.indeterminate"
                    >
                    </v-progress-circular>
                </v-col>
                <v-col cols="9" class="d-flex align-center"
                    >Waiting tx complete</v-col
                >
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'DaoAragonScreen',
        props: {
            params: {
                type: Object,
                default: () => ({}),
            },
            newDao: {
                type: Object,
                default: () => ({}),
            },
        },
    }
</script>

<style scoped></style>
