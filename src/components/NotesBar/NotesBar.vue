<template>
  <div class="notes-container">
    <div class="notes-header">
      <input type="text" placeholder=" Search">
    </div>
    <div v-for="note in notes" v-bind:key="note._id">
        <Note v-bind:note="note" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Note from './Note.vue'

export default {
  name: 'NotesBar',
  components: {
      Note
  },
  computed: {
    ...mapState({
      notes: 'notes',
    }),
  },
  methods: {
    ...mapActions({
      toggleNewNote: 'toggleNewNote',
    }),
    handleClick: function() {
      this.toggleNewNote();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: #ffffff;
  border-radius: 0.25em;
  line-height: 3em;
  font-size: 16px;
  margin: 0;
  text-align: right;
  padding: 0;
}

button {
  background-color: inherit;
  color: #ffffff !important;
  border: 2px solid #555555;
  border-radius: 1em;
}

input {
  width: 100%;
  font-size: 12px;
  background: #171717;
  color: #555555;
}

button:hover {
  background-color: #555555;
}

img.load {
  width: 20px;
  margin-bottom: 1em;
  margin-top: 2em;
}

div.notes-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

div.note-list {
  overflow-y: auto;
}

div.notes-header {
  display: flex;
  height: 3em;
  background: #232323;
  border-bottom: 2px solid #000;
}

</style>
