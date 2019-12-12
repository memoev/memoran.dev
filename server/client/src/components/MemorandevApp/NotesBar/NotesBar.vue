<template>
  <div class="notesbar">
    <h3>Notes Bar</h3>
    <div v-for="note in notes" v-bind:key="note._id">
        <Note v-bind:note="note" />
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

</style>
