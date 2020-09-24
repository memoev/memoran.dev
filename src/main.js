import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// Import the Auth0 configuration
// import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here

const dom = process.env.AUTH_DOMAIN;
const cli = process.env.AUTH_CLIENTID;

Vue.use(Auth0Plugin, {
  dom,
  cli,
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
