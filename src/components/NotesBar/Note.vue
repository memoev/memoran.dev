<template>
  <div class="note">
    <button @click="handleClick(note)">
      <div>
        <div class="note-title" v-if="note.title.length > 30">
          {{ note.title.substring(0, 30) + '...' }}
        </div>
        <div class="note-title" v-else>
          {{ note.title }}
        </div>
        <div class="note-category">
          <!-- <font-awesome-icon class="icon" :icon="(categories.find(category => category.name === note.category)).icon" /> -->
          <span class="category-name">{{note.category}}</span>
        </div>
      </div>
    </button>
    <abbr title="Delete"><img src="../../assets/trash-icon.png" alt="trash-icon" @click="handleTrash(note)"></abbr>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBolt, faBook, faCode, faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBolt, faStar, faBook, faCode);

export default {
  name: 'Note',
  props: ["note"],
  components: {
      // FontAwesomeIcon
  },
  computed: {
    ...mapState({
      categories: 'categories',
    }),
  },
  methods: {
    ...mapActions({
      pushSelectedNote: 'pushSelectedNote',
      deleteSelectedNote: 'deleteSelectedNote',
      toggleNewNote: "toggleNewNote",
    }),
    handleClick: function (obj) {
      if (this.$store.state.createNote) {
        this.toggleNewNote();
      }
      this.pushSelectedNote(obj);
    },
    handleTrash: function(obj) {
      this.deleteSelectedNote(obj);
      if (this.$store.state.selectedNote === obj) {
        this.pushSelectedNote({});
      }
      let API_URL = 'https://memoran-dev.herokuapp.com/notes';
      API_URL += `/${obj._id}`
      
      fetch(API_URL, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
      }).then(response => {
        response.json();
      })
    }
  }
}
</script>

<style scoped>
button {
  background-color: inherit;
  color: #363636;
  width: 100%;
  border-bottom: 0.15em solid #555555;
  border-top: unset;
  border-left: unset;
  border-right: unset;
  padding: 0.75em;
  text-align: left;
}

button:hover {
  background-color: #555555;
  color: #fff;
}

button:focus {
  background-color: #555555;
  color: #fff;
}

img {
  width: 20px;
  opacity: 0.3;
  position: absolute;
  right: 10px;
  top: 20px;
  cursor: pointer;
}

div.note {
  display: flex;
  position: relative;
}

div.note-title {
  font-size: 14px;
  margin-left: 1em;
  margin-bottom: 0.25em;
}

div.note-category {
  font-size: 10px;
  margin-left: 2em;
}

span.category-name {
    padding-left: 0.5em;
}

.icon {
    width: 10px;
}
</style>