<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-form>
                        <div>Fees (optional)</div>
                        <p>
                            There are several types of fees that can be charged. Please read each description carefully. All fees are paid out in shares of the vault.
                            <strong>Fee settings cannot be changed after creation.</strong>
                        </p>
                        <div>
                            Switch Tokens + Tooltip
                        </div>
                        <div>Basics</div>
                        <p>
                            Basic vault settings.
                            <strong>Basic settings cannot be changed after creation.</strong>
                        </p>
                        <v-text-field
                            label="Dao"
                            outlined
                        />

                        <v-row dense>
                            <v-col cols="12" lg="6">
                                <v-text-field
                                    label="Token"
                                    outlined
                                />
                            </v-col>
                            <v-col cols="12" lg="6">
                                <v-text-field
                                    label="Symbol"
                                    outlined
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-row dense>
                                    <v-col cols="12" lg="6">
                                        <v-text-field
                                            label="Holder"
                                            outlined
                                        />
                                    </v-col>
                                    <v-col cols="12" lg="6">
                                        <v-text-field
                                            label="Stake"
                                            outlined
                                        />
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>

                        <div>
                            Switch Voting + Tooltip
                        </div>

                        <div>
                            <v-btn color="primary">
                                Submit
                            </v-btn>
                        </div>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'DAONewScreen',

        data: () => ({
            tokens: [],
        }),

        methods: {
            addToken() {
                //
            },

            removeToken(tokenIndex) {
                //
            },

            addHolder(tokenIndex) {
                //
            },

            removeHolder(tokenIndex, holderIndex) {
                //
            },
        },
    }
</script>
