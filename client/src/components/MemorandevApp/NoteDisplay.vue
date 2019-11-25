<template>
    <div class="note">
        <h1>{{this.$store.state.selectedNote.title}}</h1>
        <p>{{this.$store.state.selectedNote.content}}</p>
    </div>
</template>

<script>
export default {
    name: 'NoteDisplay'
}
</script>

<style scoped>

</style>