<template>
    <v-app-bar
        app
        :color="$vuetify.theme.dark ? 'dark' : 'white'"
        :dark="$vuetify.theme.dark"
        :elevate-on-scroll="!$vuetify.theme.dark"
        :light="!$vuetify.theme.dark"
    >
        <v-toolbar-title>
            <v-img
                v-if="$vuetify.theme.dark"
                :src="logoDark"
                width="40"
                contain
            />
            <v-img v-else :src="logoLight" width="30" contain />
        </v-toolbar-title>

        <nav class="nav">
            <div class="list d-flex align-center">
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
                <div class="list__item">
                    <router-link
                        :to="{ name: 'About' }"
                        class="text-brand-gradient"
                    >
                        About Us
                    </router-link>
                </div>
            </div>
        </nav>

        <v-spacer />

        <UIButton class="mr-4" color="primary" @click="$router.push('new')">
            Create DAO
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

        <v-switch v-model="$vuetify.theme.dark" class="ml-5" hide-details inset>
            <template v-slot:label>
                <v-icon v-if="$vuetify.theme.dark" v-text="'$moon'" />
                <v-icon v-else v-text="'$sun'" />
            </template>
        </v-switch>
    </v-app-bar>
</template>

<script>
import logoDark from "@/assets/dark.png";
import logoLight from "@/assets/light.png";
import UIButton from "_ui/UIButton";
import Bia from "@/api/bia";

export default {
    name: "UIAppBar",
    components: { UIButton },
    data: () => ({
        logoDark,
        logoLight,
        walletConnected: false,
        accountAddress: "",
        showMenu: false
    }),

    methods: {
        connect: async function() {
            Bia.connect(data => {
                console.log("bia.connect");
                console.log(data);
                this.accountAddress = Bia.spliceAddress(data.address);
                this.walletConnected = data.success;
            });
        },
        disconnect: function() {
            console.log("close");
            // prov.disconnect()
        }
    }
};
</script>

<style lang="scss">
@import "@/sass/_variables.scss";

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
