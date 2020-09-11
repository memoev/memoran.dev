<template>
  <div>
    <div class="logo">
      <img class="pencil" alt="Pencil" :src=" this.$store.state.openbook ? img2 : img1 ">
    </div>
    <p class="cats-title">CATEGORIES</p>
    <div class="cats">
      <div v-for="category in categories" v-bind:key="category.id">
        <Category v-bind:category="category"/>
      </div>
    </div>
    <div class="bottoms">
      <img class="github" :src="$auth.user.picture">
      <p class="nickname">{{ $auth.user.nickname }}</p>
      <button class="btn btn-danger" @click="logout">Log Out</button>
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
      img1: require('../../../assets/folder.png'),
      img2: require('../../../assets/notes.png'),
    }
  },
  computed: {
    ...mapState({
      categories: 'categories',
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
  border-bottom: 0.25em solid #fff;
}

.pencil {
  width: 40%;
  margin-bottom: 2em;
}

.app-name {
  margin-bottom: 0.5em;
}

.cats-title {
  text-align: left;
  padding-left: 0.5em;
  margin-bottom: 0;
  font-weight: bolder;
  color: #fff;
}

.nickname {
  font-weight: bold;
  margin-bottom: 0.25em;
  color: #fff;
}

.bottoms {
  position: absolute;
  bottom: 20px;
  left: 0;
  margin: 0.75em;
}

img.github {
  width: 60%;
  margin-bottom: 0.75em;
  border-radius: 50%;
}

</style>
