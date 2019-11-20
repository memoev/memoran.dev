<template>
  <div class="categoriesbar">
    <div v-for="category in categories" v-bind:key="category">
      <Category v-bind:category="category"/>
    </div>
  </div>
</template>

<script>
import Category from './Category.vue'

export default {
  name: 'CategoriesBar',
  components: {
    Category
  },
  data() {
    return {
        categories: [
            { id: 1, name: "All Notes" },
            { id: 2, name: "Quick Notes" },
            { id: 3, name: "Favorites" },
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
