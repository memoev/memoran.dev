<template>
  <div>
    <!-- <div class="logo">
      <img class="book" alt="book" :src=" this.$store.state.openbook ? img2 : img1 ">
    </div>
    <hr> -->
    <button class="topbtn btn btn-secondary" @click="handleClick">
      <h6>NEW NOTE</h6>
    </button>
    <hr>
    <p class="cats-title">CATEGORIES</p>
    <div class="cats">
      <div v-for="category in categories" v-bind:key="category.id">
        <Category v-bind:category="category"/>
      </div>
    </div>
    <div class="bottoms">
      <button class="btn btn-secondary bottoms-btn">
        <img class="bottoms-btn" :src="settings" alt="settings">
      </button>
      <button class="btn btn-secondary bottoms-btn">
        <img class="bottoms-btn" :src="darkmode" alt="darkmode">
      </button>
      <button class="btn btn-secondary bottoms-btn">
        <img class="bottoms-btn" :src="view" alt="view">
      </button>
    </div>
  </div>
</template>

<script>
import Category from './Category.vue'
import { mapState, mapActions } from 'vuex'

import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'CategoriesBar',
  components: {
    Category
  },
  data() {
    return {
      img1: require('../../assets/rosepen.png'),
      img2: require('../../assets/notes.png'),
      settings: require('../../assets/cog.png'),
      darkmode: require('../../assets/darkm.png'),
      view: require('../../assets/view.png'),
    }
  },
  computed: {
    ...mapState({
      categories: 'categories',
    })
  },
  methods: {
    ...mapActions({
      toggleBook: "toggleBook",
      pushSelectedNote: "pushSelectedNote",
    }),
    handleClick: async function (e) {
      e.preventDefault();
      const note = {
        username: 'guillermo',
        title: 'test',
        category: 'all',
        content: '',
        _id: uuidv4(),
        created: "2020-07-16T07:03:23.068Z",
      };

      // this.toggleNewNote();
      await this.pushSelectedNote(note);
      await this.toggleBook();

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h6 {
  color: #fff;
  margin: 0;
  font-size: 10px;
}

hr {
  width: 80%;
  background-color: #fff;
  height: 2px;
}

button.bottoms-btn {
  padding: 10px;
  margin: 8px;
}

img.bottoms-btn {
  width: 20px;
  padding: 0px;
}

.topbtn {
  margin-top: 1em;
}

.cats-title {
  text-align: left;
  padding-left: 1em;
  margin-bottom: 0;
  font-weight: bolder;
  color: #fff;
  font-size: 10px;
}

.bottoms {
  position: fixed;
  bottom: 0.5em;
  left: 0.6em;
}

</style>
