<template>
  <div class="categoriesbar">
    <div class="logo">
      <img class="pencil" alt="Pencil" :src=" this.$store.state.openbook ? img2 : img1 ">
      <p class="app-name">memoran.DEV</p>
    </div>
    <p class="cats-title">CATEGORIES</p>
    <div class="cats">
      <div v-for="category in categories" v-bind:key="category.id">
        <Category v-bind:category="category"/>
      </div>
    </div>
    <div class="bottoms">
      <img :src="$auth.user.picture">
      <p class="nickname">{{ $auth.user.nickname }}</p>
      <button class="btn" @click="logout">Log Out</button>
    </div>
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
  data() {
    return {
      img1: require('../../../assets/pencil.png'),
      img2: require('../../../assets/pencil100.png'),
    }
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
.logo {
  font-size: 14px;
  margin: 0.75em;
  border-bottom: 0.25em solid #2c3e50;
}

.pencil {
  width: 60%;
  margin-bottom: 0;
}

.app-name {
  margin-bottom: 0.5em;
}

.cats-title {
  text-align: left;
  padding-left: 0.5em;
  margin-bottom: 0;
  font-weight: bolder;
}

.nickname {
  font-weight: bold;
  margin-bottom: 0.25em;
}

.bottoms {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0.75em;
}

img {
  width: 70%;
  margin-bottom: 0.75em;
  border-radius: 50%;
}

.btn {
  background-color: #F0FFF0;
  color: #C65D57;
  font-weight: bold;
}

</style>
