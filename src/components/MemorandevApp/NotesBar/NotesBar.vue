<template>
  <div class="notes-container">
    <div class="notes-header">
      <h3 class="col-10">NEW:</h3>
      <button class="col-2" @click="handleClick()"><b>+</b></button>
    </div>
    <div class="note-list" v-if="typeof notes != 'undefined' && notes != null && notes.length > 0">
      <div v-for="note in notes" v-bind:key="note._id">
          <Note v-bind:note="note" />
      </div>
    </div>
    <div v-else>
      <img class="load" :src="img1" alt="loading">
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
  data() {
    return {
      img1: require('../../../assets/spinner.gif')
    }
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
}

button {
  background-color: inherit;
  color: #ffffff;
  border: 2px solid #000;
  border-radius: 1em;
}

button:hover {
  background-color: #1a1a1a;
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
  background: #000;
}

</style>
