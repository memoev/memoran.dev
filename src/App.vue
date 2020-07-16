<template>
  <div id="app">
    <MemorandevApp v-if="$auth.isAuthenticated"/>
    <div class="landing-page" v-else>
      <Navbar />
      <h1 class="landing"><strong>Note Taking App for Developers</strong></h1>
      <p class="landing">Keeping your thoughts, lists and notes organized just got a lot funner! Powered by Vue.js.</p>
      <img class="pencil" alt="Pencil" src="./assets/pencil.png">
      <div>
        <button class="btn landing btn-success" @click="login">Sign in</button>
        <button class="btn landing btn-dark">Open Source</button>
      </div>
      <img class="demo" src="./assets/memoranDEV.png" alt="Demo">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'
import MemorandevApp from './components/MemorandevApp/MemorandevApp.vue'
export default {
  name: 'app',
  computed: {
    ...mapState({
      custom: 'logIn'
    })
  },
  components: {
    Navbar,
    MemorandevApp
  },
  methods: {
    ...mapActions({
      toggleLogIn: 'toggleLogIn'
    }),
    login() {
      this.$auth.loginWithRedirect();
    }
  },
}
</script>

<style>
body {
  background-color: #B2D0B4;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1.landing {
  color: #2c3e50;
  padding-top: 1em;
}

p.landing {
  width: 35%;
  margin: auto;
  font-size: 24px;
  padding-top: 1em;
}

button.landing {
  margin: 0.5em;
  padding: 0.5em;
  height: 3em;
}

.demo {
  width: 60%;
  margin-top: 2em;
  margin-bottom: 3em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.CodeMirror {
  height: 99vh !important;
  text-align: left;
}

.CodeMirror::-webkit-scrollbar {
  display: none !important;
}

.vue-codemirror {
  height: 90vh !important;
  /* font-size: 2px; */
}
.language-javascript { 
  color: white;
}
.language-bash { 
  color: white;
}
pre {
  background-color: #1a1a1a;
  border-radius: 1em;
  padding: 1.5em;
}
</style>