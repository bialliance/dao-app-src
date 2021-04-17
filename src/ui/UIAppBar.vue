<template>
    <v-app-bar
        app
        :color="$vuetify.theme.dark ? 'dark' : 'white'"
        :dark="$vuetify.theme.dark"
        :elevate-on-scroll="!$vuetify.theme.dark"
        :light="!$vuetify.theme.dark"
    >
        <v-btn v-if="needShowBackButton" icon @click="$router.back()">
            <v-icon v-text="'$arrowLeft'" />
        </v-btn>

        <v-toolbar-title>
            <v-img
                v-if="$vuetify.theme.dark"
                :src="logoDark"
                width="30"
                contain
            />
            <v-img v-else :src="logoLight" width="30" contain />
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn v-if="!walletConnected" color="primary" @click="connect">
            Connect Wallet
        </v-btn>
        <v-btn v-else color="primary" outlined @click="disconnect">
            {{ accountAddress }}
        </v-btn>

        <!--        <v-btn color="primary" text :to="{name: 'SoftwareUpdate'}">-->
        <!--            Обновление ПО-->
        <!--        </v-btn>-->

        <v-switch v-model="$vuetify.theme.dark" class="ml-5" hide-details inset>
            <template v-slot:label>
                <v-icon v-if="$vuetify.theme.dark" v-text="'$moon'" />
                <v-icon v-else v-text="'$sun'" />
            </template>
        </v-switch>
    </v-app-bar>
</template>

<script>
    import { forEach as _forEach } from 'lodash'

    import logoDark from '@/assets/dark.png'
    import logoLight from '@/assets/light.png'
    import Web3 from 'web3'
    import Web3Modal from 'web3modal'
    import MewConnect from '@myetherwallet/mewconnect-web-client'
    import ethProvider from 'eth-provider'
    import Authereum from 'authereum'

    export default {
        name: 'UIAppBar',

        data: () => ({
            logoDark,
            logoLight,
            walletConnected: false,
            accountAddress: '',
        }),

        computed: {
            needShowBackButton() {
                return this.$route.meta?.screenOptions?.showBack
            },

            title() {
                let title
                _forEach(this.$route.matched, (route) => {
                    const screenOptions = route.meta?.screenOptions

                    if (screenOptions?.title) {
                        title = screenOptions.title
                    }
                })

                return title
            },
        },

        methods: {
            connect: async function () {
                const vm = this

                const providerOptions = {
                    mewconnect: {
                        package: MewConnect, // required
                        options: {
                            infuraId: '1fa62a71dee94d9ebc1fc18e82207e55', // required
                        },
                    },
                    frame: {
                        package: ethProvider, // required
                    },
                    authereum: {
                        package: Authereum, // required
                    },
                }

                const web3Modal = new Web3Modal({
                    // network: "mainnet", // optional
                    cacheProvider: false, // optional
                    providerOptions, // required
                    theme: 'dark',
                })
                web3Modal.clearCachedProvider()

                const provider = await web3Modal.connect()
                const web3 = new Web3(provider)
                web3.eth.net
                    .isListening()
                    .then(() => {
                        console.log('is connected')

                        vm.accountAddress = 'xxxx'
                        vm.walletConnected = true
                        web3.eth.getAccounts().then((e) => {
                            vm.accountAddress = e[0]
                        })
                        // send();
                    })
                    .catch((e) => console.log('Wow. Something went wrong: ' + e))

                // eslint-disable-next-line no-unused-vars
                async function send() {
                    const contract = await new web3.eth.Contract(
                        [
                            {
                                inputs: [
                                    {
                                        internalType: 'uint256',
                                        name: 'num',
                                        type: 'uint256',
                                    },
                                ],
                                name: 'store',
                                outputs: [],
                                stateMutability: 'nonpayable',
                                type: 'function',
                            },
                            {
                                inputs: [],
                                name: 'retrieve',
                                outputs: [
                                    {
                                        internalType: 'uint256',
                                        name: '',
                                        type: 'uint256',
                                    },
                                ],
                                stateMutability: 'view',
                                type: 'function',
                            },
                        ],
                        '0xfbbFDe3040A0B393Ef694526881955d34Fc47216',
                    )
                    // eslint-disable-next-line no-unused-vars,node/handle-callback-err
                    const call = await contract.methods.retrieve().call((err, result) => {
                        console.log(result)
                    })
                }
            },
            disconnect: function () {
                console.log('close')
                // prov.disconnect()
            },
        },
    }
</script>
