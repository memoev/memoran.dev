<template>
  <div class="hello">
    <!-- <h1><b>{{ msg }}</b></h1>
    <h3>Here's where knowledge begins!</h3>
    <button class="btn btn-success">Sign Up</button> -->
    <div class="left">
      <h1>{{ custom }}</h1>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState({
      custom: 'title'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
