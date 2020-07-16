<template>
    <div class="note">
        <button @click="handleClick(note)">{{note.title}}</button>
    </div>
</template>

<script>
export default {
    name: 'Note',
    props: ["note"],
    methods: {
        handleClick: function (obj) {
            this.$store.state.selectedNote = obj;
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
  border-top: 0.15em solid #1a1a1a;
  border-bottom: unset;
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