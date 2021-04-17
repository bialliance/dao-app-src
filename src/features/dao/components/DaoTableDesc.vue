<template>
    <div class="tabledesc">
        <v-row>
            <v-col><p class="tabledesc__header">Investment strategy</p></v-col>
            <v-col><p class="tabledesc__header">What's it like</p></v-col>
            <v-col><p class="tabledesc__header">Details</p></v-col>
            <v-col><p class="tabledesc__header">Risk</p></v-col>
        </v-row>
        <UICiz />
        <v-row>
            <v-col><p class="tabledesc__text">Berezka Flex</p></v-col>
            <v-col><p class="tabledesc__text">Imagine that you own an exchange and earn commission from each trade</p>
            </v-col>
            <v-col>
                <p class="tabledesc__text">Stable coins are allocated acrossde centralized exchanges (Uniswap, dydx, etc.) and are split in trading pairs (ETH/USDC, USDC/Dai, etc). Each exchange charges a commission on each trade in such pairs and shares the commission with you. Flex strategy may include other investment instruments which are introduced after DAO voting</p>
            </v-col>
            <v-col>
                <p class="tabledesc__text"> - instant withdrawal - limited exposure to volatile assets (e.g. ETH, if selected in traded pair), smoothed by earned trading commissions - higher returns with longer investment periods</p>
            </v-col>
        </v-row>
        <UICiz />
        <v-row>
            <v-col cols="2">
                <div class="tabledesc__cash">Token request</div>
            </v-col>
            <v-col cols="5">
                <div class="tabledesc__cash d-flex justify-between align-center">
                    <p>Requested Amount</p>
                    <v-select
                        :items="['items', 'item']"
                        :menu-props="{ top: true, offsetY: true }"
                        label="Label"
                    ></v-select>
                </div>
            </v-col>
            <v-col cols="5">
                <div class="tabledesc__cash d-flex justify-between align-center">
                    <p>Offered Amount</p>
                    <v-select
                        :items="['items', 'item']"
                        :menu-props="{ top: true, offsetY: true }"
                        label="Label"
                    ></v-select>
                </div>
            </v-col>
        </v-row>
        <v-row justify="end" align="center">
            <v-col cols="12">
                <div class="tabledesc__btn_wrapper d-flex justify-end align-center">
                    <UIButton text="Deposit" />
                    <UIButton text="Withdraw" />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import UIButton from '_ui/UIButton'
    import UICiz from '_ui/UICiz'

    export default {
        name: 'DaoTableDesc',

        components: {
            UIButton,
            UICiz,
        },
    }
</script>

<style lang='scss'>
    @import '@/sass/_variables.scss';

    .tabledesc__header,
    .tabledesc__text,
    .tabledesc__cash {
        font-size:   $low_font;
        line-height: $low_height;
        text-align:  left;
        padding:     30px 0;
        transition:  display 5s ease-in;
    }

    .tabledesc__cash p {
        width: 25%;
    }

    .tabledesc__cash .v-input__control {
        width: 75%;
    }

    .tabledesc__btn_wrapper {
        .button {
            margin-right: 30px;
        }
    }

</style>
