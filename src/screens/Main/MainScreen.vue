<template>
  <div class="dashboard2">
    <div class="container">
      <v-row justify="center" align="center">
        <v-col><SvgIcon icon="logoBig"/></v-col>
        <v-col cols="7">
          <div class="dashboard2__content">
            <p class="dashboard2__content-title">1clickDAO - Your personal DAO in 1 click </p>
            <p class="dashboard2__content-text">DeFi ecosystem managed by DAO-interfaces provide a phenomenal combination of security, transparency, flexibility and cost-efficiency to asset managers and their clients.</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
    import SvgIcon from '@/features/SvgIcon'
    export default {
        components: {
            SvgIcon,
        },
    }
</script>

<style lang='scss'>
.dashboard2 {
  padding-top: 100px;
}
.dashboard2__content-text {
  font-size: 22px;
  line-height: 30px;
  text-align: left;
}
.dashboard2__content-title {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 26px;
  line-height: 30px;
  text-align: left;
}

</style>
