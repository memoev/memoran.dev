<template>
  <div id="app">
    <Navbar />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello World"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Navbar
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

img {
  margin-top: 60px;
}
</style>
