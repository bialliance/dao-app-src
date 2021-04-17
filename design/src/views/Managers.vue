<template>
  <div class="managers">
    <div class="container">
      <h1 class="managers__title">For DAO Managers</h1>
      <div class="managers__content d-flex align-center justify-start">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Managers',
  components: {
    Card
  }
}
</script>

<style lang="scss">
.managers__title {
  text-align: left;
  margin: 35px;
}
.managers__content {
  flex-wrap: wrap;
}
  
</style>
