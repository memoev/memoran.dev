<template>
  <div>
    <div class="logo">
      <img class="book" alt="book" :src=" this.$store.state.openbook ? img2 : img1 ">
    </div>
    <hr>
    <p class="cats-title">CATEGORIES</p>
    <div class="cats">
      <div v-for="category in categories" v-bind:key="category.id">
        <Category v-bind:category="category"/>
      </div>
    </div>
    <div class="bottoms">
      <button class="btn btn-danger" @click="logout">
        <router-link v-bind:to="{ path: '/' }">EXIT</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import Category from './Category.vue'
import { mapState } from 'vuex'

export default {
  name: 'CategoriesBar',
  components: {
    Category
  },
  data() {
    return {
      img1: require('../../assets/folder.png'),
      img2: require('../../assets/notes.png'),
    }
  },
  computed: {
    ...mapState({
      categories: 'categories',
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  width: 80%;
  background-color: #fff;
  height: 2px;
}

.book {
  padding-top: 1em;
  width: 40%;
}

.cats-title {
  text-align: left;
  padding-left: 0.5em;
  margin-bottom: 0;
  font-weight: bolder;
  color: #fff;
  font-size: 14px;
}

.bottoms {
  position: fixed;
  bottom: 1em;
  left: 4.25em;
}

</style>
