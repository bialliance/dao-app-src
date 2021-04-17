<template>
    <div class="tablerow">
        <v-row justify="start" align="center">
            <v-col cols="4">
                <div class="tablerow__content">
                    <img :src="btcIcon" alt="btc" class="tablerow__img">
                    <p class="name">BTC DAO</p>
                </div>
            </v-col>
            <v-col cols="3"><p class="price">$20.000</p></v-col>
            <v-col cols="3"><p class="percent">24%</p></v-col>
            <v-col cols="2">
                <button
                    :class="[openDesc ? 'open-anime' : 'close-anime']"
                    class="open-desc"
                    @click="openDesc = !openDesc">
                    <v-icon v-text="'$plus'" />
                </button>
            </v-col>
        </v-row>

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

<style lang='scss'>
    @import '@/sass/_variables.scss';

    .open-anime {
        transform:  rotate(90deg);
        transition: all .2s ease-in-out;
    }

    .close-anime {
        transform:  rotate(-90deg);
        transition: all .2s ease-in-out;
    }

    .tablerow {
        padding: 30px 0;
    }

    .tablerow:last-child {
        padding-bottom: 0;
    }

    .tablerow__img {
        width:        32px;
        height:       32px;
        margin-right: 28px;
    }

    .tablerow__content {
        display:         flex;
        justify-content: flex-start;
        align-items:     center;
        font-size:       $big_font;
        line-height:     $big_height;
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
        .tablerow__img {
            margin: 15px;
        }
    }
</style>
