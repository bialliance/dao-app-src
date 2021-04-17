<template>
    <div class="table-row">
        <div class="table-row__inner" :class="{'table-row__inner--gradient': openDesc}">
            <v-row justify="start" align="center">
                <v-col cols="4">
                    <div class="table-row__content">
                        <img :src="btcIcon" alt="btc" class="table-row__img">
                        <span class="name">BTC DAO</span>
                    </div>
                </v-col>
                <v-col cols="3"><span class="price">$20.000</span></v-col>
                <v-col cols="3"><span class="percent">24%</span></v-col>
                <v-col cols="2">
                    <v-btn
                        :class="[openDesc ? 'open-anime' : 'close-anime']"
                        class="open-desc"
                        icon
                        large
                        outlined
                        @click="openDesc = !openDesc">
                        <v-icon v-text="'$plus'" />
                    </v-btn>
                </v-col>
            </v-row>
        </div>

        <DaoTableDesc v-show="openDesc" />
    </div>
</template>

<script>
    import btcIcon from '@/assets/img/btc.png'

    import DaoTableDesc from './DaoTableDesc'

    export default {
        name: 'DaoTableRow',

        components: {
            DaoTableDesc,
        },

        data: () => ({
            btcIcon,
            openDesc: false,
        }),
    }
</script>

<style lang="scss" scoped>
    @import '@/sass/_variables.scss';

    .open-anime {
        transform:  rotate(90deg);
        transition: all .2s ease-in-out;
    }

    .close-anime {
        transform:  rotate(-90deg);
        transition: all .2s ease-in-out;
    }

    .open-desc {
        background: #ffffff;
        color:      #2f2f2f !important;
    }

    .table-row {
        &__inner {
            padding: 30px 64px;

            &--gradient {
                background-image: linear-gradient(90deg, #6280ec 17.71%, #be56fe 87.81%);
                color:            #ffffff;
            }
        }

        &__img {
            width:        32px;
            height:       32px;
            margin-right: 28px;
        }

        &__content {
            display:         flex;
            justify-content: flex-start;
            align-items:     center;
            font-size:       $big_font;
            line-height:     $big_height;
        }
    }

    .percent, .price, .name {
        font-size:   $big_font;
        line-height: $big_height;
    }

    @media (max-width: 1300px) {
        .percent, .price, .name {
            font-size:   $big_font_m;
            line-height: $big_height_m;
        }
        .table-row__img {
            margin: 15px;
        }
    }
</style>
