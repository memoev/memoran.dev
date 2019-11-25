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
          <div v-if="this.$store.state.selectedNote._id">
            <h1>{{this.$store.state.selectedNote.title}}</h1>
            <p>{{this.$store.state.selectedNote.content}}</p>
          </div>
          <div v-else>
            <h1>Hell yeah!</h1>
          </div>
        </div>
  </div>
</div>
  </div>
</template>

<script>
import CategoriesBar from './CategoriesBar/CategoriesBar.vue';
import NotesBar from './NotesBar/NotesBar.vue';

const API_URL = 'http://localhost:4020/notes';

export default {
  name: 'MemorandevApp',
  components: {
    CategoriesBar,
    NotesBar
  },
  mounted() {
    fetch(API_URL).then(res => res.json()).then((result) => {
      this.$store.state.notes = result;
      console.log(result);
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
