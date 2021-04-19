import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import vuetify from "./services/vuetify/";
import "./sass/main.scss";
import Bia from "@/api/bia";
// import '@/api/index.js'

Vue.config.productionTip = false;

// TODO: Vuetify bug
const ignoreWarnMessage =
    "The .native modifier for v-on is only valid on components but it was used on <svg>.";
Vue.config.warnHandler = function(msg, vm, trace) {
    // `trace` is the component hierarchy trace
    if (msg === ignoreWarnMessage) {
        msg = null;
        vm = null;
        trace = null;
    }
};

Vue.prototype.$bia = new Bia();

new Vue({
    router,
    store,
    vuetify,
    methods: {
        async pushNotification(data) {
            await store.dispatch("notifications/pushNotification", data);
        }
    },
    render: h => h(App)
}).$mount("#app");

// Vue.use(VueGlobalVariable, { globals: { bia: new Bia() } });
