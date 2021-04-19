<template>
    <div class="table">
        <div class="table__inner">
            <DaoTableHeader />
            <DaoTableRow v-for="dao in daos" :key="dao.name" :daosData="dao" />
            <!-- <DaoTableRow :daosData="daos" /> -->
        </div>
    </div>
</template>

<script>
import btcIcon from "@/assets/img/btc.png";
import skyflexIcon from "@/assets/img/skyflex.png";
import binanceIcon from "@/assets/img/binance.png";
import flexIcon from "@/assets/img/flex.png";
import DaoTableHeader from "./DaoTableHeader";
import DaoTableRow from "./DaoTableRow";

export default {
    name: "DaoTable",
    data: () => {
        return {
            daos: [
                {
                    name: "FLEX",
                    tlv: "1.115.375",
                    apy: "84%",
                    icon: flexIcon,
                    network: "BSC"
                },
                {
                    name: "Binance DAO",
                    tlv: "20.000",
                    apy: "56%",
                    icon: binanceIcon,
                    network: "ETH"
                },
                {
                    name: "SkyFlex DAO",
                    tlv: "20.000",
                    apy: "36%",
                    icon: skyflexIcon,
                    network: "ETH"
                },
                {
                    name: "BTC DAO",
                    tlv: "20.000",
                    apy: "24%",
                    icon: btcIcon,
                    network: "BSC"
                }
            ]
        };
    },
    components: {
        DaoTableHeader,
        DaoTableRow
    }
};
</script>

<style lang="scss" scoped>
.table {
    border-radius: 20px;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5), 1px 1000px 1px #ffffff inset;
    border: solid 2px transparent;
    background-image: linear-gradient(90deg, #6280ec 17.71%, #be56fe 87.81%),
        linear-gradient(90deg, #6280ec 17.71%, #be56fe 87.81%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    outline: none;

    &__inner {
        background: #fbfbfb;
        border-radius: 20px;
    }
}
</style>
