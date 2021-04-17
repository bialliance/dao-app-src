<template>
  <div id="app">
    <v-app-bar
      height="none"
      flat
    >
    <NavigationMobile :show="showMenu" :closeMenu="showMenu = false"/>
    <v-row justify="space-around" align="center">
      <v-col cols="7">
        <div class="header_left d-flex justify-start align-center">
          <SvgIcon icon='logo' class="logo" />
          <div class="nav_icon__wrapper">
            <v-app-bar-nav-icon @click="showMenu = !showMenu"></v-app-bar-nav-icon>
          </div>
          <nav class="nav">
            <ul class="list d-flex align-center">
              <li class="list__item">
                <router-link to="/">For investors </router-link>
              </li>
              <li class="list__item">
                <router-link to="/managers">For DAO Managers</router-link>
              </li>
              <li class="list__item">
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
               <li class="list__item">
                <router-link to="/about">About Us</router-link>
              </li>
            </ul>   
            
          </nav>      
        </div>
      </v-col>

      <v-col cols="5">
        <div class="header__right d-flex align-center justify-end">
          <Button text="Create DAO" route="created" />
          <Button text="Connect Wallet" outlined />
          <div class="header__switce d-flex align-center justify-center">
            <v-switch
              inset
            ></v-switch>
            <SvgIcon icon='moon' />
          </div>
        </div>
      </v-col>
      
    </v-row>
    </v-app-bar>
      
    <router-view/>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
import Button from '@/components/ui/Button'
import NavigationMobile from '@/components/NavigationMobile'

export default {
  data: () => ({
    showMenu: false
  }),
  components: {
    SvgIcon,
    Button,
    NavigationMobile
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_veriables.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FBFBFB;
  padding: 0 25px;
  position: relative;
}
* {
  box-sizing: border-box;
}
/* .navigation-wrapper {
  position: absolute;
  width: 100vw;
  height: 100vh !important;
  background-color: rgba(0,0,0,0.5);
  display: none;
  z-index: 5;
}
.show {
  display: block;
} */
li, ul {
  list-style: none;
  text-decoration: none;
}
.v-toolbar__content {
  background-color: #FBFBFB;
}
.logo {
  margin-right: 24px;
}
.header_left, .header__right {
  width: 100%;
  height: 100%;
}
.list__item {
  margin-right: 30px;
  a {
    background: -webkit-linear-gradient(#6280EC, #BE56FE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    font-size: $menu_font;
    line-height: $menu_height;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
header.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #FBFBFB;
  padding-top: 25px;
}
.theme--light.v-input--switch .v-input--switch__track {
  box-shadow: 1px 1px 15px 2px rgba(73, 73, 73, .50);
  margin-right: 19px;
}
.v-input--selection-controls__input {
  margin-right: 9px;
}
.header__switcer {
  display: flex;
}
.d-flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.justify-center {
  justify-content: center;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.align-center {
  align-items: center;
}
.align-start {
  align-items: flex-start;
}
.align-end {
  align-items: flex-end;
}
.flex-column {
  flex-direction: column;
}
.v-input__control {
  .v-input__slot {
    margin-bottom: 0;
  }
  .v-messages {
    display: none;
  }
}

.v-input--switch__thumb {
  background: -webkit-linear-gradient(#6280EC, #BE56FE);
}
.v-input--switch__track.theme--light {
  background-color: #fff;
  box-shadow: 0px 2px 12px rgba(73, 73, 73, 0.16);
}
.header__right button:first-child {
  margin-right: 30px;
}
.header__right button:nth-child(2) {
  margin-right: 40px;
}
button {
  outline: none;
  &:focus {
    outline: none;
  }
}
.nav {
  display: none;
}

@media (min-width: 1300px) {
  .container {
    max-width: 1300px;
  }

}

@media (min-width: 1300px) {
  .nav_icon__wrapper {
    display: none;
  }
  .nav {
    display: block;
  }

}
</style>
