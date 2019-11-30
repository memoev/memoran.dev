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

</style>