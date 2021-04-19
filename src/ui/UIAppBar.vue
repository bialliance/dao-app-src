<template>
    <v-app-bar
        app
        :color="$vuetify.theme.dark ? 'dark' : 'white'"
        :dark="$vuetify.theme.dark"
        :elevate-on-scroll="!$vuetify.theme.dark"
        :light="!$vuetify.theme.dark"
    >
        <v-toolbar-title>
            <div @click="$router.push('/main')">
                <v-img
                    v-if="$vuetify.theme.dark"
                    :src="logoDark"
                    width="40"
                    contain
                />
                <v-img v-else :src="logoLight" width="30" contain />
            </div>
        </v-toolbar-title>
        <div v-if="!isMainPage">
            <nav class="nav">
                <div class="list d-flex align-center">
                    <div class="list__item">
                        <router-link
                            :to="{ name: 'About' }"
                            class="text-brand-gradient"
                        >
                            About Us
                        </router-link>
                    </div>
                    <div class="list__item">
                        <router-link
                            :to="{ name: 'DaoInvestor' }"
                            class="text-brand-gradient"
                        >
                            For Depositors
                        </router-link>
                    </div>
                    <div class="list__item">
                        <router-link
                            :to="{ name: 'DaoManager' }"
                            class="text-brand-gradient"
                        >
                            For DAO Managers
                        </router-link>
                    </div>
                    <div class="list__item">
                        <router-link
                            :to="{ name: 'Dashboard' }"
                            class="text-brand-gradient"
                        >
                            Dashboard
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
        <v-spacer />
        <UIButton
            v-if="isMainPage"
            class="mr-4"
            color="primary"
            @click="$router.push('/dao')"
        >
            Launch App
        </UIButton>
        <UIButton
            v-else-if="!isCreateDaoPage"
            class="mr-4"
            color="primary"
            @click="$router.push('/dao/new')"
        >
            Create DAO
        </UIButton>
        <div v-if="!isMainPage">
            <UIButton
                v-if="!walletConnected"
                color="primary"
                outlined
                @click="connect"
            >
                Connect Wallet
            </UIButton>
            <UIButton v-else color="primary" outlined @click="disconnect">
                {{ accountAddress }}
            </UIButton>
        </div>
        <UIButton color="primary" outlined @click="showModal">
            Change Network
        </UIButton>
        <!-- <v-switch v-model="$vuetify.theme.dark" class="ml-5" hide-details inset>
            <template v-slot:label>
                <v-icon v-if="$vuetify.theme.dark" v-text="'$moon'" />
                <v-icon v-else v-text="'$sun'" />
            </template>
        </v-switch> -->
        <div v-if="networkModal" id="WEB3_CONNECT_MODAL_ID">
            <v-dialog
                v-model="networkModal"
                class="sc-jSFkmK jYxAGf web3modal-modal-lightbox"
                offset="0"
                opacity="0.4"
            >
                <div class="sc-gKAblj cKKrkP web3modal-modal-container">
                    <div class="sc-iCoHVE knnrxv web3modal-modal-hitbox"></div>
                    <div class="sc-fujyUd fJcXnX web3modal-modal-card">
                        <div
                            @click="switchNetwork(2)"
                            class="sc-eCApGN damoxS web3modal-provider-wrapper"
                        >
                            <div
                                class="sc-hKFyIo boNcpQ web3modal-provider-container"
                            >
                                <div
                                    class="sc-bdnylx jMhaxE web3modal-provider-icon"
                                ></div>
                                <div
                                    class="sc-gtssRu bqzjdb web3modal-provider-name"
                                >
                                    ETH
                                </div>
                                <div
                                    class="sc-dlnjPT gTeXGK web3modal-provider-description"
                                >
                                    Switch to ETH network
                                </div>
                            </div>
                        </div>
                        <div
                            @click="switchNetwork(4)"
                            class="sc-eCApGN damoxS web3modal-provider-wrapper"
                        >
                            <div
                                class="sc-hKFyIo boNcpQ web3modal-provider-container"
                            >
                                <div
                                    class="sc-bdnylx jMhaxE web3modal-provider-icon"
                                ></div>
                                <div
                                    class="sc-gtssRu bqzjdb web3modal-provider-name"
                                >
                                    BSC
                                </div>
                                <div
                                    class="sc-dlnjPT gTeXGK web3modal-provider-description"
                                >
                                    Switch to BSC network
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-dialog>
        </div>
    </v-app-bar>
</template>

<script>
    import logoDark from '@/assets/dark.png'
    import logoLight from '@/assets/light.png'
    import UIButton from '_ui/UIButton'
    // import Bia from "@/api/bia";

    export default {
        name: 'UIAppBar',
        components: { UIButton },
        data: () => ({
            logoDark,
            logoLight,
            networkModal: false,
            walletConnected: false,
            accountAddress: '',
            showMenu: false,
        }),

        computed: {
            isMainPage() {
                return this.$route.name == 'Main'
            },
            isCreateDaoPage() {
                return this.$route.name == 'DaoNew'
            },
        },
        methods: {
            connect: async function () {
                this.$bia.connect((data) => {
                    console.log('bia.connect')
                    console.log(data)
                    this.accountAddress = this.$bia.spliceAddress(data.address)
                    this.walletConnected = data.success
                })
            },
            disconnect: function () {
                console.log('close')
            // prov.disconnect()
            },
            showModal: function () {
                if (this.$bia.connected) {
                    this.networkModal = true
                } else {
                    alert('connect first')
                }
            },
            switchNetwork: function (chainId) {
                this.$bia.appChainId = chainId
                this.networkModal = false
                console.log(this.$bia.chainId)
            },
        },
    }
</script>

<style lang="scss">
@import "@/sass/_variables.scss";
.v-dialog.v-dialog--active {
    box-shadow: none;
}
.list__item {
    margin-left: 30px;

    a {
        text-decoration: none;
        font-size: $menu_font;
        font-weight: 700;
        line-height: $menu_height;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

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
    box-shadow: 0px 2px 12px rgba(73, 73, 73, 0.16);
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
