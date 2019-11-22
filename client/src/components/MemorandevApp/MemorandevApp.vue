<template>
  <div class="memorandev">
    <CategoriesBar />
  </div>
</template>

<script>
import CategoriesBar from './CategoriesBar/CategoriesBar.vue'

const API_URL = 'http://localhost:4020/notes'

export default {
  name: 'MemorandevApp',
  components: {
    CategoriesBar
  },
  mounted() {
    fetch(API_URL).then(res => res.json()).then((result) => {
      console.log(result);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
