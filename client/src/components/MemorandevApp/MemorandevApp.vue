<template>
  <div class="memorandev">
    <div class="container">
      <div class="row">
        <div class="col-2 categoriesbar">
          <CategoriesBar />
        </div>
        <div class="col-3 notesbar">
          <NotesBar />
        </div>
        <div class="col-7 note">
          <div v-if="this.$store.state.selectedNote._id && !this.$store.state.createNote">
            <NoteDisplay />
          </div>
          <div v-if="this.$store.state.createNote">
            <NewNote />
          </div>
        </div>
  </div>
</div>
  </div>
</template>

<script>
import CategoriesBar from './CategoriesBar/CategoriesBar.vue';
import NotesBar from './NotesBar/NotesBar.vue';
import NoteDisplay from './NoteDisplay.vue'
import NewNote from './NotesBar/NewNote.vue'


const API_URL = 'http://localhost:4020/notes';

export default {
  name: 'MemorandevApp',
  components: {
    CategoriesBar,
    NotesBar,
    NoteDisplay,
    NewNote
  },
  mounted() {
    fetch(API_URL).then(res => res.json()).then((result) => {
      this.$store.state.notes = result;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: none !important;
}

.categoriesbar {
  background-color: aqua;
}

.notesbar {
  background-color: darkorange;
}

.note {
  background-color: deeppink;
}

</style>
