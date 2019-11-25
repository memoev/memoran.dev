<template>
    <div class="note">
        <button @click="handleClick">Edit Mode</button>
        <h1>{{this.$store.state.selectedNote.title}}</h1>
        <div v-if="!edit">
            <div v-html="compiledMarkdown" />
        </div>
        <div v-else>
            <textarea :value="this.$store.state.selectedNote.content" />
        </div>
    </div>
</template>

<script>
const marked = require('marked')

export default {
    name: 'NoteDisplay',
    data() {
        return {
           edit: false 
        }
    },
    computed: {
        compiledMarkdown: function () {
        if (!this.$store.state.selectedNote.content) {
            return marked('');
        } else {
            return marked(this.$store.state.selectedNote.content)
        }
        }
    },
    methods: {
        handleClick: function() {
            this.edit = !this.edit
        }
    }

}
</script>

<style scoped>

</style>