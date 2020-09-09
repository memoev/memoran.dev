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
    <img src="../../../assets/trash-icon.png" alt="trash-icon" @click="handleTrash">
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
    }),
    handleClick: function (obj) {
      this.pushSelectedNote(obj);
      this.$store.state.createNote = false;
    },
    handleTrash: function(obj) {
      this.deleteSelectedNote(obj);
    }
  }
}
</script>

<style scoped>
button {
  background-color: inherit;
  color: #ffffff;
  width: 100%;
  border-bottom: 0.15em solid #1a1a1a;
  border-top: unset;
  border-left: unset;
  border-right: unset;
  padding: 0.5em;
  text-align: left;
}

button:hover {
  background-color: #1a1a1a;
}

button:focus {
  background-color: #1a1a1a;
}

img {
  width: 30px;
  opacity: 0.3;
  position: absolute;
  right: 0px;
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