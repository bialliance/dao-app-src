<template>
  <div class="created">
    <div class="container">
      <h1 class="created__title">Create DAO</h1>
      <div class="created__content">
        <v-row>
          <v-col cols="6">
            <h4 class="input_title">General</h4>
            <div class="form_group">
              <div class="input-wrapper d-flex justify-between align-end">
                <label class="label" for="name">DAO name</label>
                <input type="text" name="name" class="text_input">
              </div>
              <div class="input-wrapper d-flex justify-between align-end">
                <label class="label" for="description">DAO description</label>
                <input type="text" name="description" class="text_input">
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10">
            <h4 class="input_title">Create 2 tokens</h4>
            <v-row>
              <v-col cols="6">
                <p class="input__text">GP token (governance token)</p>
                <div class="form_group">
                  <div class="input-wrapper d-flex justify-between align-end">
                    <label class="label" for="name">Full token name</label>
                    <input type="text" name="name" class="text_input">
                  </div>
                  <div class="input-wrapper d-flex justify-between align-end">
                    <label class="label" for="description">Token symbol</label>
                    <input type="text" name="description" class="text_input">
                  </div>
                </div>
              </v-col>
              <v-col cols="6">
                <p class="input__text">LP token (limited partner token)</p>
                <div class="form_group">
                  <div class="input-wrapper d-flex justify-between align-end">
                    <label class="label" for="name">Full token name</label>
                    <input type="text" name="name" class="text_input">
                  </div>
                  <div class="input-wrapper d-flex justify-between align-end">
                    <label class="label" for="description">Token symbol</label>
                    <input type="text" name="description" class="text_input">
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <h4 class="input_title">Voting</h4>
            <div class="form_group">
              <div class="input-wrapper d-flex justify-between align-end">
                <label class="label" for="name">Support %</label>
                <div class="slider_wrapper d-flex justify-start align-end">
                  <v-slider
                    v-model="ex1.val"
                    :color="ex1.color"
                  ></v-slider>
                <div class="voting__percent">50%</div>
                </div>
              </div>
              <div class="input-wrapper d-flex justify-between align-end">
                <label class="label" for="description">Minimum approval %</label>
                <div class="slider_wrapper d-flex justify-start align-end">
                  <v-slider
                    v-model="ex1.val"
                    :color="ex1.color"
                  ></v-slider>
                  <div class="voting__percent">20%</div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <Button text="Create DAO" />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'

  export default {
    data: () => ({
      ex1: { label: 'color', val: 25, color: 'orange darken-3' },
    }),
    components: {
      Button
    }
  }
</script>

<style lang='scss'>
.created {
  text-align: left;
}
.created__title {
  font-size: 60px;
  line-height: 60px;
  margin-bottom: 35px;
}
.input_title {
  font-size: 26px;
  line-height: 22px;
  margin-bottom: 16px;
}
.label {
  font-size: 20px;
  line-height: 22px;
}
.input-wrapper {
  margin-bottom: 24px;
}
.form_group {
  margin-bottom: 50px;
}
.text_input {
  background-color: transparent;
  background-image: linear-gradient(to right,#6280EC, #BE56FE);
  background-repeat: no-repeat;
  background-position: 0 calc(100% + 3px),0 0;
  background-size: 100% 3px;
  box-shadow: none;
  border: 0;
  border-bottom: 2px solid #ff005e;
  color: #000;
  -webkit-font-smoothing: antialiased;
  outline: 0 none;
  border-color: transparent;
  outline: none;
  width: 65%;
}
.input__text {
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 25px;
}
.slider_wrapper {
  width: 65%;
}
.voting__percent {
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 2px transparent;
  background-image: -webkit-linear-gradient(#6280EC, #BE56FE), -webkit-linear-gradient(#6280EC, #BE56FE);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 1px 1000px 1px #fff inset;
  outline: none;
  border-radius: 10px;
  padding: 5px 14px;
}
</style>