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
                    width="50"
                    contain
                />
                <v-img v-else :src="logoLight" width="50" contain />
            </div>
        </v-toolbar-title>
        <div id="navigation-icon" v-if="!isMainPage && mobileView">
            <v-app-bar-nav-icon
                @click="showNav = !showNav"
            ></v-app-bar-nav-icon>
            <div class="list d-flex mobile-nav" :class="{ open: showNav }">
                <div class="list__item" @click="showNav = !showNav">
                    <router-link
                        :to="{ name: 'About' }"
                        class="text-brand-gradient"
                    >
                        About Us
                    </router-link>
                </div>
                <div class="list__item" @click="showNav = !showNav">
                    <router-link
                        :to="{ name: 'DaoDepositor' }"
                        class="text-brand-gradient"
                    >
                        For Depositors
                    </router-link>
                </div>
                <div class="list__item" @click="showNav = !showNav">
                    <router-link
                        :to="{ name: 'DaoManager' }"
                        class="text-brand-gradient"
                    >
                        For DAO Managers
                    </router-link>
                </div>
                <div class="list__item" @click="showNav = !showNav">
                    <router-link
                        :to="{ name: 'Dashboard' }"
                        class="text-brand-gradient"
                    >
                        Dashboard
                    </router-link>
                </div>
                <!-- <div class="list__item" @click="showNav = !showNav">
                    <a
                        href="https://hackerlink.io/en/Grant/RCIS/Round/1/buidl/393"
                        target="_blank"
                        class="text-brand-gradient"
                    >
                        Vote
                    </a>
                </div> -->
            </div>
        </div>
        <div v-else-if="!isMainPage && !mobileView">
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
                            :to="{ name: 'DaoDepositor' }"
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
                    <!-- <div class="list__item">
                        <a
                            href="https://hackerlink.io/en/Grant/RCIS/Round/1/buidl/393"
                            target="_blank"
                            class="text-brand-gradient invert-gradient-bar"
                        >
                            Vote
                        </a>
                    </div> -->
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
            <div class="launch-up-startup">
                <span class="launch-up-text">Launch App</span>
                <img
                    src="@/assets/img/startup.svg"
                    alt="startup"
                    class="startup"
                    width="30"
                />
            </div>
        </UIButton>
        <UIButton
            v-else-if="!isCreateDaoPage"
            class="mr-4"
            color="primary"
            @click="() => {
                connect();
                $router.push('/dao/new')
            }"
        >
            Create DAO
        </UIButton>
        <div v-if="!isMainPage" class="d-flex">
            <UIButton
                v-if="this.$bia.canChangeNetwork"
                color="primary"
                outlined
                @click="showModal"
            >
                {{ network }}
            </UIButton>
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
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            @click="switchNetwork(1)"
                            class="sc-eCApGN damoxS web3modal-provider-wrapper"
                        >
                            <div
                                class="sc-hKFyIo boNcpQ web3modal-provider-container text-center"
                            >
                                <div
                                    class="sc-bdnylx jMhaxE web3modal-provider-icon"
                                >
                                    <img src="@/assets/img/eth.png" />
                                </div>
                                <div
                                    class="sc-gtssRu bqzjdb web3modal-provider-name"
                                >
                                    ETH: Main network
                                </div>
                                <div
                                    class="sc-dlnjPT gTeXGK web3modal-provider-description"
                                >
                                    Switch to ETH: Main network
                                </div>
                            </div>
                        </div>
                        <!-- <div
                            @click="switchNetwork(56)"
                            class="sc-eCApGN damoxS web3modal-provider-wrapper disabled"
                        >
                            <div
                                class="sc-hKFyIo boNcpQ web3modal-provider-container text-center"
                            >
                                <div
                                    class="sc-bdnylx jMhaxE web3modal-provider-icon"
                                >
                                    <img src="@/assets/img/binance.png" />
                                </div>
                                <div
                                    class="sc-gtssRu bqzjdb web3modal-provider-name"
                                >
                                    BSC: Main network
                                </div>
                                <div
                                    class="sc-dlnjPT gTeXGK web3modal-provider-description"
                                >
                                    Switch to BSC: Main network
                                </div>
                            </div>
                        </div> -->
                        <div
                            @click="switchNetwork(4)"
                            class="sc-eCApGN damoxS web3modal-provider-wrapper"
                        >
                            <div
                                class="sc-hKFyIo boNcpQ web3modal-provider-container text-center"
                            >
                                <div
                                    class="sc-bdnylx jMhaxE web3modal-provider-icon"
                                >
                                    <img src="@/assets/img/eth.png" />
                                </div>
                                <div
                                    class="sc-gtssRu bqzjdb web3modal-provider-name"
                                >
                                    ETH: Rinkeby
                                </div>
                                <div
                                    class="sc-dlnjPT gTeXGK web3modal-provider-description"
                                >
                                    Switch to ETH: Rinkeby test network
                                </div>
                            </div>
                        </div>
                        <!-- <div
                            @click="switchNetwork(97)"
                            class="sc-eCApGN damoxS web3modal-provider-wrapper"
                        >
                            <div
                                class="sc-hKFyIo boNcpQ web3modal-provider-container text-center"
                            >
                                <div
                                    class="sc-bdnylx jMhaxE web3modal-provider-icon"
                                >
                                    <img src="@/assets/img/binance.png" />
                                </div>
                                <div
                                    class="sc-gtssRu bqzjdb web3modal-provider-name"
                                >
                                    BSC: Test
                                </div>
                                <div
                                    class="sc-dlnjPT gTeXGK web3modal-provider-description"
                                >
                                    Switch to BSC: Test network
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </v-dialog>
        </div>
    </v-app-bar>
</template>

<script>
    import logoDark from '@/assets/dark.png'
    import logoLight from '@/assets/light.svg'
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
            mobileView: false,
            showNav: false,
            network: 'Choose Network',
        }),

        computed: {
            isMainPage() {
                return this.$route.name === 'Main'
            },

            isCreateDaoPage() {
                return this.$route.name === 'DaoNew'
            },
        },
        created() {
            this.handleView()
        },
        methods: {
            connect: async function () {
                this.$bia.connect((data) => {
                    console.log('bia.connect')
                    console.log(data)
                    this.accountAddress = this.$bia.spliceAddress(data.address)
                    this.walletConnected = data.success
                    if ([1, 4, 56, 97].includes(this.$bia.chainId)) {
                        this.network = this.$bia.networkName
                    }
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
                this.$bia.chainLogo = this.$bia.getChainLogo(chainId)
                // this.network = this.$bia.getNetworkName(chainId);
                switch (chainId) {
                    case 4:
                        this.network = 'Rinkeby'
                        break
                    case 1:
                        this.network = 'Mainnet'
                        break
                    case 97:
                        this.network = 'Binance'
                        break
                    case 56:
                        this.network = 'Binance'
                        break
                    default:
                        this.network = 'Choose network'
                        break
                }
                // if (chainId === 4 || chainId === 1) {
                //     this.network = "Rinkeby";
                // } else if (chainId === 97 || chainId === 56) {
                //     this.network = "Binance";
                // }
                console.log(this.network)
                this.networkModal = false
                console.log(chainId)
            },
            handleView() {
                this.mobileView = window.innerWidth <= 1300
            },
        },
    }
</script>

<style lang="scss">
@import "@/sass/_variables.scss";
.disabled {
    pointer-events: none;
    user-select: none;
}
.invert-gradient-bar {
    color: linear-gradient(90.19deg, #ffb800 2.85%, #bf56fe 102.75%) !important;
}
.invert-gradient:hover {
    filter: brightness(1.2) !important;
}
.launch-up-startup {
    display: flex;
}
.launch-up-text {
    padding-right: 13px;
}
.open {
    left: 0% !important;
    transition: left 0.5s linear;
}
.mobile-nav {
    padding-top: 20px;
    height: 100vh;
    background-color: #fff;
    padding-right: 30px;
    flex-direction: column;
    align-items: start !important;
    position: absolute;
    left: -100%;
    transition: left 0.3s linear;
    align-items: flex-start !important;
}

#navigation-icon {
    padding: 10px 10px;
    cursor: pointer;

    i {
        font-size: 2rem;
    }
}

.v-dialog.v-dialog--active {
    box-shadow: none;
}

.list__item {
    padding: 5px 0;
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
    white-space: nowrap;
    outline: none;

    &:focus {
        outline: none;
    }
}

.nav {
    display: none;
}

@media (max-width: 400px) {
    .button {
        padding: 0 14px;
        height: 37px;
    }
    .stick {
        display: none;
    }
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
