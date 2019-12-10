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
  height: 90vh !important;
  text-align: left;
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
