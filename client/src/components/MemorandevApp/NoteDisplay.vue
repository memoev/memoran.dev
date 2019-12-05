<template>
    <div class="note">
        <button @click="handleClickEdit">{{this.edit === false ? `Edit` : `Preview`}}</button>
        <button @click="handleClickDelete">Delete</button>
        <h1>{{this.$store.state.selectedNote.title}}</h1>
        <div v-if="!edit">
            <div v-html="compiledMarkdown" id="compiled"/>
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
        handleClickEdit: function() {
            let API_URL = 'http://localhost:4020/notes';
            API_URL += `/${this.$store.state.selectedNote._id}`

            if (this.edit === true) {
                var brandNew = document.querySelector('textarea').value;
                // console.log(brandNew);
                // console.log(API_URL);
                fetch(API_URL, {
                    method: 'PUT',
                    body: JSON.stringify({
                        _id: `/${this.$store.state.selectedNote._id}`,
                        newContent: brandNew
                    }),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                }).then(response => {
                    response.json();
                    this.$store.state.selectedNote.content = brandNew;
                })
            }

            this.edit = !this.edit
        },
        handleClickDelete: function() {
            let API_URL = 'http://localhost:4020/notes';
            API_URL += `/${this.$store.state.selectedNote._id}`
            
            fetch(API_URL, {
                    method: 'DELETE',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                }).then(response => {
                    response.json();
                    this.$store.state.notes = this.$store.state.notes.filter((value) => {
                        return value !== this.$store.state.selectedNote
                    })
                    this.$store.state.selectedNote = {};
                })
        }
    }

}
</script>

<style scoped>

textarea {
    width: 100%;
    height: 32em;
}

#compiled {
    color: blueviolet;
    text-align: left;
    height: 32em;
    overflow: scroll;
}

</style>