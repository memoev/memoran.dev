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
          2 of 3 (wider)
          <h1>Note goes here!</h1>
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
      console.log(this.notes);
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
