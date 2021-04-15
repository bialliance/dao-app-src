<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-form>
                        <h3 class="mb-3">Fees (optional)</h3>
                        <p>
                            There are several types of fees that can be charged. Please read each description carefully. All fees are paid out in shares of the vault.
                            <strong>Fee settings cannot be changed after creation.</strong>
                        </p>

                        <v-row>
                            <v-col cols="auto">
                                <UIDaoAppSwitch
                                    v-model="isTokens"
                                    title="Tokens"
                                    tooltip="Tooltip"
                                />
                            </v-col>
                        </v-row>

                        <h3 class="mb-3">Basics</h3>
                        <p>
                            Basic vault settings.
                            <strong>Basic settings cannot be changed after creation.</strong>
                        </p>
                        <v-text-field
                            v-model="title"
                            dense
                            label="Dao"
                            outlined
                        />

                        <div v-for="(token, tokenIndex) in tokens" :key="`token_${tokenIndex}`">
                            <v-divider class="my-8" />
                            <v-row dense>
                                <v-col cols="12">
                                    <v-row dense>
                                        <v-col cols="12" lg="auto">
                                            <v-btn color="primary" icon small @click="addToken()">
                                                <v-icon v-text="'$plus'" small />
                                            </v-btn>
                                        </v-col>
                                        <v-col>
                                            <v-row dense>
                                                <v-col cols="12" lg="6">
                                                    <v-text-field
                                                        v-model="token.address"
                                                        dense
                                                        label="Token"
                                                        outlined
                                                    />
                                                </v-col>
                                                <v-col cols="12" lg="6">
                                                    <v-text-field
                                                        v-model="token.symbol"
                                                        dense
                                                        label="Symbol"
                                                        outlined
                                                    />
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12" lg="auto">
                                            <v-btn
                                                color="red"
                                                :disabled="tokens.length < 2"
                                                icon
                                                small
                                                @click="removeToken(tokenIndex)"
                                            >
                                                <v-icon v-text="'$delete'" small />
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    <div class="pl-12">
                                        <v-row
                                            v-for="(holder, holderIndex) in token.holders"
                                            dense
                                            :key="`holder_${holderIndex}`"
                                        >
                                            <v-col cols="12" lg="auto">
                                                <v-btn color="primary" icon small @click="addHolder(tokenIndex)">
                                                    <v-icon v-text="'$plus'" small />
                                                </v-btn>
                                            </v-col>
                                            <v-col>
                                                <v-row dense>
                                                    <v-col cols="12" lg="6">
                                                        <v-text-field
                                                            v-model="holder.holder"
                                                            dense
                                                            label="Holder"
                                                            outlined
                                                        />
                                                    </v-col>
                                                    <v-col cols="12" lg="6">
                                                        <v-text-field
                                                            v-model="holder.stake"
                                                            dense
                                                            label="Stake"
                                                            outlined
                                                        />
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <v-col cols="12" lg="auto">
                                                <v-btn
                                                    color="red"
                                                    :disabled="token.holders.length < 2"
                                                    icon
                                                    small
                                                    @click="removeHolder(tokenIndex, holderIndex)"
                                                >
                                                    <v-icon v-text="'$delete'" small />
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>

                        <v-divider class="my-8" />

                        <v-row v-for="app in apps" dense :key="`app_${app.address}`">
                            <v-col cols="auto">
                                <UIDaoAppSwitch
                                    v-model="app.value"
                                    :disabled="app.disabled"
                                    :title="app.title"
                                    :tooltip="app.tooltip"
                                />
                            </v-col>
                        </v-row>

                        <v-divider class="my-6" />

                        <div>
                            <v-btn color="primary">
                                Create DAO
                            </v-btn>
                        </div>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import { filter as _filter, find as _find } from 'lodash'

    import UIDaoAppSwitch from '_ui/UIDaoAppSwitch'

    export default {
        name: 'DAONewScreen',

        components: {
            UIDaoAppSwitch,
        },

        data: () => ({
            isTokens: false,
            title: '',
            tokens: [
                {
                    token: '',
                    symbol: '',
                    holders: [
                        {
                            holder: '',
                            stake: '',
                        },
                    ],
                },
            ],
            apps: [
                {
                    address: 'gjhghjghj8678678',
                    disabled: true,
                    title: 'Voting',
                    tooltip: 'Voting',
                    value: true,
                },
                {
                    address: 'dv9dv7df98d7vfd8',
                    disabled: true,
                    title: 'Finance',
                    tooltip: 'Finance',
                    value: true,
                },
            ],
        }),

        methods: {
            addToken() {
                this.tokens.push({
                    token: '',
                    symbol: '',
                    holders: [
                        {
                            holder: '',
                            stake: '',
                        },
                    ],
                })
            },

            removeToken(tokenIndex) {
                this.tokens = _filter(this.tokens, (token, index) => index !== tokenIndex)
            },

            addHolder(tokenIndex) {
                const token = _find(this.tokens, (token, index) => index === tokenIndex)

                token.holders.push({
                    holder: '',
                    stake: '',
                })
            },

            removeHolder(tokenIndex, holderIndex) {
                const token = _find(this.tokens, (token, index) => index === tokenIndex)

                token.holders = _filter(token.holders, (holder, index) => index !== holderIndex)
            },
        },
    }
</script>
