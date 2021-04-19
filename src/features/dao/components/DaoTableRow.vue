<template>
    <div>
        <div class="table-row">
            {{ key }}
            <div
                class="table-row__inner"
                :class="{
                    'table-row__inner--gradient': openDesc
                }"
                @click.prevent="openDesc = !openDesc"
            >
                <v-row justify="start" align="center">
                    <v-col cols="3">
                        <div class="table-row__content">
                            <img :src="daosData.icon" class="table-row__img" />
                            <span class="name">{{ daosData.name }}</span>
                        </div>
                    </v-col>
                    <v-col cols="2"
                        ><span class="network">{{
                            daosData.network
                        }}</span></v-col
                    >
                    <v-col cols="3"
                        ><span class="price">${{ daosData.tlv }}</span></v-col
                    >
                    <v-col cols="3"
                        ><span class="percent">{{ daosData.apy }}</span></v-col
                    >
                    <v-col cols="1">
                        <v-btn
                            :class="[openDesc ? 'open-anime' : 'close-anime']"
                            class="open-desc"
                            icon
                            large
                            outlined
                        >
                            <div v-if="openDesc">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"
                                >
                                    <line
                                        x1="12.5"
                                        y1="0"
                                        x2="12.5"
                                        y2="25"
                                        stroke="#101010"
                                    />
                                </svg>
                            </div>
                            <div v-else>
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"
                                >
                                    <line
                                        x1="12.5"
                                        y1="0"
                                        x2="12.5"
                                        y2="25"
                                        stroke="#101010"
                                    />
                                    <line
                                        x1="0"
                                        y1="12.5"
                                        x2="25"
                                        y2="12.5"
                                        stroke="#101010"
                                    />
                                </svg>
                            </div>
                        </v-btn>
                    </v-col>
                </v-row>
            </div>

            <DaoTableDesc v-show="openDesc" />
        </div>
    </div>
</template>

<script>
import btcIcon from "@/assets/img/btc.png";

import DaoTableDesc from "./DaoTableDesc";

export default {
    props: ["daosData"],

    name: "DaoTableRow",

    components: {
        DaoTableDesc
    },

    data: () => ({
        btcIcon,
        openDesc: false
    })
};
</script>

<style lang="scss" scoped>
@import "@/sass/_variables.scss";
.open-anime {
    transform: rotate(90deg);
    transition: all 0.2s ease-in-out;
}
.close-anime {
    transform: rotate(-90deg);
    transition: all 0.2s ease-in-out;
}

.open-desc {
    background: #ffffff;
    color: #2f2f2f !important;
}

.table-row {
    &__inner {
        cursor: pointer;
        padding: 30px 64px;

        &--gradient {
            background-image: linear-gradient(
                90deg,
                #6280ec 17.71%,
                #be56fe 87.81%
            );
            color: #ffffff;
        }
    }

    &__img {
        width: 32px;
        height: 32px;
        margin-right: 28px;
    }

    &__content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: $big_font;
        line-height: $big_height;
    }
}
.table-row .table-row__inner:hover {
    background-image: linear-gradient(90deg, #6280ec 17.71%, #be56fe 87.81%);
    color: #ffffff;
}
.percent,
.price,
.network,
.name {
    font-size: $big_font;
    line-height: $big_height;
}

@media (max-width: 1300px) {
    .percent,
    .price,
    .network,
    .name {
        font-size: $big_font_m;
        line-height: $big_height_m;
    }
    .table-row__img {
        margin: 15px;
    }
}
</style>
