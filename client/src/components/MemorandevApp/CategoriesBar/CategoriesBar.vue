<template>
  <div class="categoriesbar">
    <button @click="logout">Log Out</button>
    <div v-for="category in categories" v-bind:key="category.id">
      <Category v-bind:category="category"/>
    </div>
    <!-- <img :src="$auth.user.picture"> -->
  </div>
</template>

<script>
import Category from './Category.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CategoriesBar',
  components: {
    Category
  },
  computed: {
    ...mapState({
      categories: 'categories',
      custom: 'logIn'
    })
  },
  methods: {
    ...mapActions({
      toggleLogIn: 'toggleLogIn'
    }),
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* img {
  width: 4em;
} */

</style>
