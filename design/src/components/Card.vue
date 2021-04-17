<template>
  <div class="card d-flex justify-around align-center flex-column">
    <div class="card__img-wrapper">
      <img src="@/assets/img/flex.png" alt="flex" class="card__img">
    </div>
    <h3 class="card__title">Berezka FLEX DAO</h3>
    <div class="card__info">
      <v-row>
        <v-col cols="7"><p class="card__name">APY:</p></v-col>
        <v-col cols="5"><p class="card__number">75%</p></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><p class="card__name">Total Value Locked:</p></v-col>
        <v-col cols="5"><p class="card__number">$21,555,555</p></v-col>
      </v-row>
    </div>
    <div class="card__btn-wrapper">
      <Button width text="Manage" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
  export default {
    components: {
      Button
    }
  }
</script>

<style lang='scss'>
.card {
  width: 345px;
  border: 1px solid #008CB9;
  border-radius: 20px;
  padding: 36px 27px;
  margin-right: 40px;
  margin-bottom: 40px;
  /* flex: 1; */
  /* width: 29%; */
}
.card__img {
  width: 90px;
  height: 90px;
}
.card__btn-wrapper {
  width: 100%;
}
.card__title {
  margin-top: 22px;
} 
.card__btn-wrapper {
  margin-top: 22px;
}
.card__info {
  margin-top: 22px;
  background: linear-gradient(90.31deg, rgba(98, 128, 236, 0.2) 17.71%, rgba(190, 86, 254, 0.2) 87.81%);
  padding: 17px 25px;
  border-radius: 20px;
  text-align: left;
  font-size: 14px;
  line-height: 14px;
}
.card__number {
  font-weight: bold;
}
</style>