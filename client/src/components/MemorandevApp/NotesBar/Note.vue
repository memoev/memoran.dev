<template>
    <div class="note">
        <button @click="handleClick(note)">{{note.title}}</button>
    </div>
</template>

<script>
export default {
    name: 'Notes',
    props: ["note"],
    methods: {
        handleClick: function (obj) {
            this.$store.state.selectedNote = obj;
        }
    }
}
</script>

<style scoped>

</style>