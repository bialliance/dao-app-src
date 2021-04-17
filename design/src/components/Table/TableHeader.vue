<template>
  <div class="tableheader">
    <v-row justify="start" align="center">
      <v-col cols="4"><p class="products">Products</p></v-col>
      <v-col cols="3"><p>Total Value Locked (TLV)</p></v-col>
      <v-col cols="3"><p>Annual Percentage Yield</p></v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang='scss'>
.tableheader .row {
  margin: 0;
}
.tableheader {
  font-size: 14px;
  line-height: 22px;
}
.products {
  text-align: left;
}

</style>