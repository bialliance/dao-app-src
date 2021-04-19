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
                        <p class="dashboard2__content-title">1clickDAO - Your personal DAO in 1 click </p>
                        <p class="dashboard2__content-text">DeFi ecosystem managed by DAO-interfaces provide a phenomenal combination of security, transparency, flexibility and cost-efficiency to asset managers and their clients.</p>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@/features/SvgIcon'

    export default {
        components: {
            SvgIcon,
        },
    }
</script>

<style lang="scss">
    .dashboard2 {
        padding-top: 100px;

        &__logo {
            svg {
                max-width: 100%;
            }
        }

        &__content-text {
            font-size:   22px;
            line-height: 30px;
            text-align:  left;
        }

        &__content-title {
            font-weight:   bold;
            margin-bottom: 25px;
            font-size:     26px;
            line-height:   30px;
            text-align:    left;
        }
    }

</style>
