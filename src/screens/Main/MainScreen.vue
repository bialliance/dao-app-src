<template>
    <div class="dashboard2">
        <div class="container">
            <v-row justify="center" align="center">
                <v-col cols="12" md>
                    <v-row justify="center">
                        <v-col cols="auto">
                            <SvgIcon class="dashboard2__logo" icon="logoBig" />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="11" md="9" lg="7">
                    <div class="dashboard2__content">
                        <p class="dashboard2__content-title pb-10 mb-0">
                            1clickDAO - Your personal DAO in 1 click
                        </p>
                        <p class="dashboard2__content-text pb-10 mb-0">
                            DeFi ecosystem managed by DAO-interfaces provide a
                            phenomenal combination of security, transparency,
                            flexibility and cost-efficiency to asset managers
                            and their clients.
                        </p>
                    </div>
                    <!-- <div class="vote-wrapper">
                        <UIButton class="invert-gradient mr-10">
                            <a
                                href="https://hackerlink.io/en/Grant/RCIS/Round/1/buidl/393"
                                target="_blank"
                                class="text-button-vote"
                            >
                                VOTE
                            </a>
                        </UIButton>
                        <span class="vote-description"
                            >Special privilege for All voters</span
                        >
                    </div> -->
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@/features/SvgIcon'
    // import UIButton from '_ui/UIButton'

    export default {
        components: {
            SvgIcon,
            // UIButton,
        },
    }
</script>

<style lang="scss">
.vote-description {
    font-size: 18px;
}
.vote-wrapper {
    display: flex;
    align-items: center;
}
.invert-gradient {
    background: linear-gradient(90.19deg, #ffb800 2.85%, #bf56fe 102.75%);
}
.text-button-vote {
    text-decoration: none;
    color: #fff !important;
    font-size: 25px;
    line-height: 35px;
}
.dashboard2 {
    padding-top: 100px;

    &__logo {
        svg {
            max-width: 100%;
        }
    }

    &__content-text {
        font-size: 22px;
        line-height: 30px;
        text-align: left;
    }

    &__content-title {
        font-weight: bold;
        margin-bottom: 25px;
        font-size: 26px;
        line-height: 30px;
        text-align: left;
    }
}
</style>
