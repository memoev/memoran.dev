<template>
  <div class="note">
    <button @click="handleClick(note)">{{note.title}}</button>
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
    }),
    handleClick: function (obj) {
      this.pushSelectedNote(obj);
      this.$store.state.createNote = false;
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
}

button:hover {
  background-color: #1a1a1a;
}

button:focus {
  background-color: #1a1a1a;
}
</style>