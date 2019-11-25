<template>
  <div class="notesbar">
    <h3>Notes Bar</h3>
    <div v-for="note in notes" v-bind:key="note._id">
        <Note v-bind:content="note.content" />
    </div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
