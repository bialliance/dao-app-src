<template>
  <div class="table">
    <TableHeader />
    <Ciz />
    <TableRow />
  </div>
</template>

<script>
import TableHeader from '@/components/Table/TableHeader'
import TableRow from '@/components/Table/TableRow/'
import Ciz from '@/components/Ciz'

  export default {
    components: {
      TableHeader,
      TableRow,
      Ciz
    }
  }
</script>

<style lang='scss'>

.table {
  border: 1px solid black;
  border-radius: 20px;
  padding: 30px 60px 50px;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 2px transparent;
  background-image: -webkit-linear-gradient(#6280EC, #BE56FE), -webkit-linear-gradient(#6280EC, #BE56FE);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 1px 1000px 1px #fff inset;
  outline: none;
}

</style>