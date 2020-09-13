<template>
  <div id="app">
    <div class="landing-page">
      <Navbar />
      <h1 class="landing"><strong>Note Taking App for Developers</strong></h1>
      <p class="landing">Keeping your thoughts, lists and notes organized just got a lot funner! Powered by Vue.js.</p>
      <img class="notes" alt="Notes" src="../assets/notes.png">
      <div>
        <button class="btn landing btn-success" @click="login">Sign in</button>
        <button class="btn landing btn-dark">Open Source</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar,
  },
  methods: {
    ...mapActions({
      toggleLogIn: 'toggleLogIn'
    }),
    login() {
      this.$auth.loginWithRedirect({
          redirect_uri: 'http://localhost:8080/app'
      });
    }
  },
}
</script>

<style>
h1, h2, h3, h4, h5, h6 {
  color: #363636;
  font-weight: bolder;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 28px;
}

h3 {
  font-size: 22px;
}

body {
  background-color: #cecece;
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
  height: 100vh !important;
  text-align: left;
  font-family: Menlo,Monaco,monospace;
  font-size: 14px;
}

.CodeMirror::-webkit-scrollbar {
  display: none !important;
}

.vue-codemirror {
  height: 90vh !important;
}
/* .language-javascript { 
  color: white;
}
.language-bash { 
  color: white;
} */
pre {
  background-color: #cfcfcf;
  border-radius: 1em;
  padding: 1.5em;
}

code {
  color: #363636;
}
</style>
