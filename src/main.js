import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypoH1 from "./components/TypoH1";
import TypoH2 from "./components/TypoH2";
import TypoLink1 from "./components/TypoLink1";
import TypoLink2 from "./components/TypoLink2";
import TypoButton from "./components/TypoButton";
import TypoGameButton from "./components/TypoGameButton";

Vue.config.productionTip = false

Vue.component('TypoH1', TypoH1)
Vue.component('TypoH2', TypoH2)
Vue.component('TypoLink1', TypoLink1)
Vue.component('TypoLink2', TypoLink2)
Vue.component('TypoButton', TypoButton)
Vue.component('TypoGameButton', TypoGameButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
