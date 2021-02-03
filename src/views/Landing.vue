<template>
  <div id="app">
    <div class="landing-page">
      <Navbar />
      <div class="landing-content">
        <img class="logo" alt="Notes" src="../assets/penrosetri2.png">
        <h1 class="landing"><strong>Note Taking App</strong></h1>
        <router-link v-bind:to="{path: '/app'}"><button class="btn landing btn-dark">START</button></router-link>
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
  },
}
</script>

<style scoped>
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
  padding-top: 1em;
  color: #2c3e50;
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

img.logo {
  width: 100px;
}

div.landing-content {
  padding-top: 4em;
}

</style>
