<template>
  <div id="app">
    <div class="landing-page" v-if="!custom">
      <Navbar />
      <img class="pencil" alt="Pencil" src="./assets/pencil.png">
      <HelloWorld />
    </div>
    <MemorandevApp v-else/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'
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
    HelloWorld,
    Navbar,
    MemorandevApp
  }
}
</script>

<style>
body {
  background-color: #8FBC8F;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.CodeMirror {
  height: 85vh !important;
}

.vue-codemirror {
  height: 85vh !important;
  /* font-size: 2px; */
}

</style>
