<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Here's where the magin happens!</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
