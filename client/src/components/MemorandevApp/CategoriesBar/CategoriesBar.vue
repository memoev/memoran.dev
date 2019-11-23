<template>
  <div class="categoriesbar">
    <div v-for="category in categories" v-bind:key="category.id">
      <Category v-bind:category="category"/>
    </div>
  </div>
</template>

<script>
import Category from './Category.vue'
import { mapState } from 'vuex';

export default {
  name: 'CategoriesBar',
  components: {
    Category
  },
  computed: {
    ...mapState({
      categories: 'categories'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
