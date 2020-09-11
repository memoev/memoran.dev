import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// Import the Auth0 configuration
// import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

const ENVDOMAIN = process.env.ENVNET_DOMAIN
const ENVCLIENT = process.env.ENVNET_CLIENTID

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  ENVDOMAIN,
  ENVCLIENT,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
