<template>
  <div class="note">
    <button @click="handleClick(note)">
      <div>
        <div class="note-title">
          {{note.title}}
        </div>
        <div class="note-category">
          {{note.category}}
        </div>
      </div>
    </button>
    <img src="../../assets/trash-icon.png" alt="trash-icon" @click="handleTrash(note)">
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Note',
  props: ["note"],
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
  border-bottom: 0.15em solid #1a1a1a;
  border-top: unset;
  border-left: unset;
  border-right: unset;
  padding: 0.5em;
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
  right: 3px;
  top: 18px;
  cursor: pointer;
}

div.note {
  display: flex;
  position: relative;
}

div.note-title {
  font-size: 16px;
  margin-left: 1em;
}

div.note-category {
  font-size: 12px;
  margin-left: 1.5em;
}
</style>