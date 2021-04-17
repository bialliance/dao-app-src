<template>
    <div class="table-desc">
        <v-row>
            <v-col>
                <div class="table-desc__header">Investment strategy</div>
            </v-col>
            <v-col>
                <div class="table-desc__header">What's it like</div>
            </v-col>
            <v-col>
                <div class="table-desc__header">Details</div>
            </v-col>
            <v-col>
                <div class="table-desc__header">Risk</div>
            </v-col>
        </v-row>
        <UICiz />
        <v-row>
            <v-col>
                <div class="table-desc__text">Berezka Flex</div>
            </v-col>
            <v-col>
                <div class="table-desc__text">Imagine that you own an exchange and earn commission from each trade</div>
            </v-col>
            <v-col>
                <div class="table-desc__text">Stable coins are allocated acrossde centralized exchanges (Uniswap, dydx, etc.) and are split in trading pairs (ETH/USDC, USDC/Dai, etc). Each exchange charges a commission on each trade in such pairs and shares the commission with you. Flex strategy may include other investment instruments which are introduced after DAO voting</div>
            </v-col>
            <v-col>
                <div class="table-desc__text"> - instant withdrawal - limited exposure to volatile assets (e.g. ETH, if selected in traded pair), smoothed by earned trading commissions - higher returns with longer investment periods</div>
            </v-col>
        </v-row>
        <UICiz />
        <v-row>
            <v-col cols="2">
                <div class="table-desc__cash">Token request</div>
            </v-col>
            <v-col cols="5">
                <div class="table-desc__cash d-flex justify-between align-center">
                    <p>Requested Amount</p>
                    <v-select
                        :items="['items', 'item']"
                        :menu-props="{ top: true, offsetY: true }"
                        label="Label"
                    ></v-select>
                </div>
            </v-col>
            <v-col cols="5">
                <div class="table-desc__cash d-flex justify-between align-center">
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
                <div class="table-desc__btn_wrapper d-flex justify-end align-center">
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

    .table-desc {
        background: #ffffff;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.06);
        padding:    0 64px 50px 64px;

        &__header,
        &__text,
        &__cash {
            font-size:   $low_font;
            line-height: $low_height;
            text-align:  left;
            padding:     30px 0;
            transition:  display 5s ease-in;
        }

        &__cash {
            p {
                width: 25%;
            }

            .v-input__control {
                width: 75%;
            }
        }

        &__cash,
        &__btn_wrapper {
            .button {
                margin-right: 30px;
            }
        }
    }

</style>
