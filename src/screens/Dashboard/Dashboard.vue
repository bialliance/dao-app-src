<template>
  <div class="dashboard">
    <div class="container">
      <h1 class="dashboard__title">Dashboard</h1>
      <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
        :hide-default-footer="true"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      headers: [
        { text: 'Product', value: 'product' },
        { text: 'Token', value: 'token' },
        { text: 'Amount', value: 'amount' },
        { text: 'Invested amoubt, USDT', value: 'amoubt' },
        { text: 'AVG purchase price', value: 'purchase' },
        { text: 'Token price', value: 'price' },
        { text: 'Portfolio value, USDT', value: 'portfolio' },
        { text: 'Profit/Loss, USDT', value: 'profitusdt' },
        { text: 'Profit/Loss, %', value: 'profit' },
        { text: 'APY %', value: 'apy' },
      ],
      desserts: [
        {
          product: 'BTC DAO',
          token: 'BDQ',
          amount: '1 000',
          amoubt: '$ 1 000,0',
          purchase: '$ 1,00',
          price: '$ 1,01',
          portfolio: '$ 1 010,00',
          profitusdt: '$ 10,00',
          profit: '1,00 %',
          apy: '12,00 %',
        },
        {
          product: 'FLEX',
          token: 'FLEX',
          amount: '25 000',
          amoubt: '$ 25 500,00',
          purchase: '$ 1,02',
          price: '$ 1,20',
          portfolio: '$ 30 000,00 ',
          profitusdt: '$ 4 500,00 ',
          profit: '17,65 %',
          apy: '44,00 %',
        },
        {
          product: 'Binance DAO',
          token: 'DYNA',
          amount: '5 000',
          amoubt: '$ 6 550,00',
          purchase: '$ 1,31',
          price: '$ 1,90',
          portfolio: '$ 9 500,00',
          profitusdt: '$ 2 950,00',
          profit: '45,04 %',
          apy: '120,00 %',
        },
        {
          product: 'SkyFlex',
          token: '-',
          amount: '-',
          amoubt: '-',
          purchase: '-',
          price: '-',
          portfolio: '-',
          profitusdt: '-',
          profit: '-',
          apy: '-',
        },
        {
          product: 'TOTAL',
          token: '',
          amount: '31 000',
          amoubt: '$ 33 050,00',
          purchase: '',
          price: '',
          portfolio: '$ 40 510,00',
          profitusdt: '$ 7 460,00',
          profit: '22,57%',
          apy: '68,00%',
        },
      ],

    }),
  }
</script>

<style lang='scss'>
.dashboard__title {
  font-size: 60px;
  line-height: 60px;
  text-align: left;
  margin: 75px 0 35px 60px;
}
.v-data-table-header {
  color: white;
  background: linear-gradient(90.31deg, #6280EC 17.71%, #BE56FE 87.81%), #008CB9;
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
    }
    i.v-icon.v-icon {
      display: none;
    }
  }
}
.v-data-table__wrapper {
  border-radius: 10px;
  box-shadow: 0px 11px 20px rgba(171, 171, 171, 0.24)
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
  background: -webkit-linear-gradient(#6280EC, #BE56FE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}



</style>