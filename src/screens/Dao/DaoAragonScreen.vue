<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="3">
                    <v-progress-circular
                        :size="100"
                        :width="15"
                        :value="newToken.value"
                        color="green"
                        :indeterminate="newToken.indeterminate"
                    >
                    </v-progress-circular>
                </v-col>
                <v-col cols="9" class="d-flex align-center"
                    >newTokensAndInstance</v-col
                >
            </v-row>

            <v-row>
                <v-col cols="3">
                    <v-progress-circular
                        :size="100"
                        :width="15"
                        :value="newManager.value"
                        color="green"
                        :indeterminate="newManager.indeterminate"
                    >
                    </v-progress-circular>
                </v-col>
                <v-col cols="9" class="d-flex align-center"
                    >newTokenManagers</v-col
                >
            </v-row>

            <v-row>
                <v-col cols="3">
                    <v-progress-circular
                        :size="100"
                        :width="15"
                        :value="newFinalize.value"
                        color="green"
                        :indeterminate="newFinalize.indeterminate"
                    >
                    </v-progress-circular>
                </v-col>
                <v-col cols="9" class="d-flex align-center">finalizeDao</v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "DaoAragonScreen",
    props: {
        params: {
            type: Object,
            default: () => ({})
        },
        newToken: {
            type: Object,
            default: () => ({})
        },
        newManager: {
            type: Object,
            default: () => ({})
        },
        newFinalize: {
            type: Object,
            default: () => ({})
        }
    }
};
</script>

<style scoped></style>
