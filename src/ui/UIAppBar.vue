<template>
    <v-app-bar
        app
        :color="$vuetify.theme.dark ? 'dark' : 'white'"
        :dark="$vuetify.theme.dark"
        :elevate-on-scroll="!$vuetify.theme.dark"
        :light="!$vuetify.theme.dark"
    >
        <UINavigationMobile :show="showMenu" :closeMenu="showMenu = false" />

        <v-toolbar-title>
            <v-row align="center">
                <v-col cols="auto">
                    <v-img
                        v-if="$vuetify.theme.dark"
                        :src="logoDark"
                        width="30"
                        contain
                    />
                    <v-img v-else :src="logoLight" width="30" contain />
                </v-col>
                <v-col cols="auto">
                    <v-app-bar-nav-icon @click="showMenu = !showMenu" />
                </v-col>
            </v-row>
        </v-toolbar-title>

        <nav class="nav">
            <ul class="list flex align-center">
                <!--<li class="list__item">-->
                <!--    <router-link :to="{name: 'DaoInvestors'}">For investors</router-link>-->
                <!--</li>-->
                <li class="list__item">
                    <router-link :to="{name: 'DaoManager'}">For DAO Managers</router-link>
                </li>
                <!--<li class="list__item">-->
                <!--    <router-link :to="{name: 'Dashboard'}">Dashboard</router-link>-->
                <!--</li>-->
                <li class="list__item">
                    <router-link :to="{name: 'About'}">About Us</router-link>
                </li>
            </ul>

        </nav>

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
    import logoDark from '@/assets/dark.png'
    import logoLight from '@/assets/light.png'
    import UINavigationMobile from '_ui/UINavigationMobile'
    import Web3 from 'web3'
    import Web3Modal from 'web3modal'
    import MewConnect from '@myetherwallet/mewconnect-web-client'
    import ethProvider from 'eth-provider'
    import Authereum from 'authereum'

    export default {
        name: 'UIAppBar',

        components: {
            UINavigationMobile,
        },

        data: () => ({
            logoDark,
            logoLight,
            walletConnected: false,
            accountAddress: '',
            showMenu: '',
        }),

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

<style lang="scss">
    @import '@/sass/_variables.scss';

    .header__switcer {
        display: flex;
    }

    .v-input__control {
        .v-input__slot {
            margin-bottom: 0;
        }

        .v-messages {
            display: none;
        }
    }

    .v-input--switch__thumb {
        background: -webkit-linear-gradient(#6280ec, #be56fe);
    }

    .v-input--switch__track.theme--light {
        background-color: #ffffff;
        box-shadow:       0px 2px 12px rgba(73, 73, 73, 0.16);
    }

    .header__right button:first-child {
        margin-right: 30px;
    }

    .header__right button:nth-child(2) {
        margin-right: 40px;
    }

    button {
        outline: none;

        &:focus {
            outline: none;
        }
    }

    .nav {
        display: none;
    }

    @media (min-width: 1300px) {
        .container {
            max-width: 1300px;
        }

    }

    @media (min-width: 1300px) {
        .nav_icon__wrapper {
            display: none;
        }
        .nav {
            display: block;
        }

    }
</style>
