<template>
  <div class="notesbar">
    <h3>NOTES</h3>
    <div v-if="typeof notes != 'undefined' && notes != null && notes.length > 0">
      <div v-for="note in notes" v-bind:key="note._id">
          <Note v-bind:note="note" />
      </div>
    </div>
    <div v-else>
      <img class="load" :src="img1" alt="loading">
    </div>
    <button @click="handleClick()">+ New Note</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    })
  },
  methods: {
    handleClick: function () {
      this.$store.state.createNote = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  background-color: #1a1a1a;
  color: #ffffff;
  border-radius: 0.25em;
  margin: 0.5em;
  line-height: 2em;
}

button {
  background-color: inherit;
  color: #ffffff;
  width: 100%;
  border-top: 0.15em solid #1a1a1a;
  border-bottom: 0.15em solid #1a1a1a;
  border-left: unset;
  border-right: unset;
  padding: 0.5em;
}

button:hover {
  background-color: #1a1a1a;
}

img.load {
  width: 20px;
  margin-bottom: 1em;
}
</style>
