<template>
  <div class="investors">
    <h1 class="investors__title">For Depositors</h1>
    <div class="investors__content">
      <Table />
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table/Table'
  export default {
    components: {
      Table
    }
  }
</script>

<style lang='scss'>
@import '@/assets/scss/_veriables.scss';

.investors__title {
  text-align-last: left;
  font-size: $big_font;
  line-height: $big_height;
  font-weight: normal;
  margin-top: 50px;
  margin-bottom: 40px;
  padding-left: 110px;
}
</style>