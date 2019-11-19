<template>
  <div class="hello">
    <h1><b>{{ msg }}</b></h1>
    <h3>Here's where knowledge begins!</h3>
    <button class="btn btn-success">Sign Up</button>
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
