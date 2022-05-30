import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import io from "socket.io-client";

Vue.config.productionTip = false;
// const options = {path: '/connect'}; //Options object to pass into SocketIO

import Toaster from "v-toaster";
import "v-toaster/dist/v-toaster.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(Toaster, { timeout: 5000 });
Vue.use(VueSweetalert2);

let token = localStorage.token;
if (token == null) {
  localStorage.token = "";
  token = "";
}

let socket = io(
  "https://pixelgameserver-gamesc.apps.ir-thr-at1.arvan.run/user",
  {
    auth: {
      token: token,
    },
    upgrade: false,
    transports: ["websocket"],
  }
);

Vue.prototype.$socket = socket;

new Vue({
  router,
  store,
  render: (h) => h(App),
  socket,
  methods: {},
  mounted() {},
}).$mount("#app");
