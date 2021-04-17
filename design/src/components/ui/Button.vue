<template>
  <button class="button" :class="{'outlined': outlined, 'width-100': width}" @click="go">
    <p>{{ text }}</p>
  </button>
</template>

<script>
  export default {
    props: {
      text: String,
      outlined: Boolean,
      width: Boolean,
      route: String
    },
    components: {
    },
    methods: {
      go() {
        this.$router.push(this.route)
      }
    }
  }
</script>

<style lang='scss'>
@import '@/assets/scss/_veriables.scss';

.button {
  text-transform: capitalize;
  font-size: $menu_font;
  line-height: $menu_height;
  border-radius: 20px;
  background: linear-gradient(90.31deg, #6280EC 17.71%, #BE56FE 87.81%);
  padding: 8px 57px;
  color: white;
  height: 45px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid linear-gradient(90.31deg, #6280EC 17.71%, #BE56FE 87.81%);
}

.outlined {
  /* background: transparent; */
  p {
    background: -webkit-linear-gradient(#6280EC, #BE56FE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 2px transparent;
  background-image: -webkit-linear-gradient(#6280EC, #BE56FE), -webkit-linear-gradient(#6280EC, #BE56FE);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 1px 1000px 1px #fff inset;
  outline: none;
}

.width-100 {
  width: 100%;
}

@media (max-width: 1460px) {
.button {
  font-size: $menu_font_m;
  line-height: $menu_height_m;
  padding: 0 30px;
  }
}

</style>