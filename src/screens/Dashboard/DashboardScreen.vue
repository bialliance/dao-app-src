<template>
    <div style="margin:0px;padding:0px;overflow:hidden">
        <iframe
            id="frame"
            frameborder="0"
            style="overflow:hidden; height: 90vh;;width:100%"
            height="100%"
            width="100%"
            src="https://srv1.1clickdao.com/dashboard/flex"
            align="left"
        >
            Ваш браузер не поддерживает плавающие фреймы!
        </iframe>
    </div>
    <!--         
    <div class="dashboard">
        <div class="container">
            <h1 class="dashboard__title">Dashboard</h1>
            <v-data-table
                :headers="headers"
                :items="desserts"
                item-key="id"
                class="elevation-1"
                :hide-default-footer="true"
            >
                <template v-slot:item="{ item }">
                    <tr>
                        <td>{{ item.product }}</td>
                        <td>{{ item.token }}</td>
                        <td>
                            {{ item.amount }}
                        </td>
                        <td>$ {{ item.amoubt }}</td>
                        <td>$ {{ item.purchase }}</td>
                        <td>$ {{ item.price }}</td>
                        <td>$ {{ item.portfolio }}</td>
                        <td>$ {{ item.profitusdt }}</td>
                        <td>{{ item.profit }} %</td>
                        <td>{{ item.apy }} %</td>
                    </tr>
                </template>
                <template slot="body.append">
                    <tr>
                        <th class="title text-brand-gradient">Totals</th>
                        <th class="title text-brand-gradient"></th>
                        <th class="title text-brand-gradient">
                            {{ sumField("amount") }}
                        </th>
                        <th class="title text-brand-gradient">
                            $ {{ sumField("amoubt") }}
                        </th>
                        <th class="title text-brand-gradient">
                            $ {{ sumField("purchase") }}
                        </th>
                        <th class="title text-brand-gradient">
                            $ {{ sumField("price") }}
                        </th>
                        <th class="title text-brand-gradient">
                            $ {{ sumField("portfolio") }}
                        </th>
                        <th class="title text-brand-gradient">
                            $ {{ sumField("profitusdt") }}
                        </th>
                        <th class="title text-brand-gradient">
                            {{ sumField("profit") }} %
                        </th>
                        <th class="title text-brand-gradient">
                            {{ sumField("apy") }} %
                        </th>
                    </tr>
                </template>
            </v-data-table>
        </div>
    </div> -->
</template>

<script>
export default {
    data: () => ({
        headers: [
            { text: "Product", value: "product" },
            { text: "Token", value: "token" },
            { text: "Amount", value: "amount" },
            { text: "Invested amoubt, USDT", value: "amoubt" },
            { text: "AVG purchase price", value: "purchase" },
            { text: "Token price", value: "price" },
            { text: "Portfolio value, USDT", value: "portfolio" },
            { text: "Profit/Loss, USDT", value: "profitusdt" },
            { text: "Profit/Loss, %", value: "profit" },
            { text: "APY %", value: "apy" }
        ],
        desserts: [
            {
                id: 1,
                product: "BTC DAO",
                token: "BDQ",
                amount: 1000,
                amoubt: 1000.0,
                purchase: 1.0,
                price: 1.01,
                portfolio: 1010.0,
                profitusdt: 10.0,
                profit: 1.0,
                apy: 12.0
            },
            {
                id: 2,
                product: "FLEX",
                token: "FLEX",
                amount: 25000,
                amoubt: 25500.0,
                purchase: 1.02,
                price: 1.2,
                portfolio: 30000.0,
                profitusdt: 4500.0,
                profit: 17.65,
                apy: 44.0
            },
            {
                id: 3,
                product: "Binance DAO",
                token: "DYNA",
                amount: 5000,
                amoubt: 6550.0,
                purchase: 1.31,
                price: 1.9,
                portfolio: 9500.0,
                profitusdt: 2950.0,
                profit: 45.04,
                apy: 120.0
            },
            {
                id: 4,
                product: "SkyFlex",
                token: "-",
                amount: 0,
                amoubt: 0,
                purchase: 0,
                price: 0,
                portfolio: 0,
                profitusdt: 0,
                profit: 0,
                apy: 0
            }
        ]
    }),
    methods: {
        sumField(key) {
            return (
                Math.round(
                    this.desserts.reduce((a, b) => a + (b[key] || 0), 0) * 100
                ) / 100
            );
        }
    }
};
</script>

<style lang="scss">
.dashboard__title {
    font-size: 60px;
    line-height: 60px;
    text-align: left;
    margin: 75px 0 35px 60px;
}
.v-data-table-header {
    color: white;
    background: linear-gradient(90.31deg, #6280ec 17.71%, #be56fe 87.81%),
        #008cb9;
    tr {
        padding: 50px 0;
    }
    th {
        border-right: 1px solid #fff;
        &:last-child {
            border: none;
        }
        span {
            color: white;
            padding-left: 20px;
        }
        i.v-icon.v-icon {
            display: none;
        }
    }
}
.v-data-table__wrapper {
    border-radius: 10px;
    box-shadow: 0px 11px 20px rgba(171, 171, 171, 0.24);
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
    padding: 40px 0 !important;
}
.v-data-table-header-mobile__wrapper {
    padding: 0 15px;
    label {
        color: white;
    }
    .v-select.v-text-field input {
        border-color: white;
    }
}
table tbody tr:last-child td {
    background: -webkit-linear-gradient(#6280ec, #be56fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
}
</style>
