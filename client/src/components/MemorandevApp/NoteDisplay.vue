<template>
    <div class="note">
        <button @click="handleClickEdit">{{this.edit === false ? `Edit` : `Preview`}}</button>
        <button @click="handleClickDelete">Delete</button>
        <h1>{{this.$store.state.selectedNote.title}}</h1>
        <div v-if="!edit">
            <div v-html="compiledMarkdown" id="compiled"/>
        </div>
        <div v-else>
            <codemirror id="markdown" :value="this.$store.state.selectedNote.content" :options="cmOption" @input="onCmCodeChange"/>
            <!-- <textarea id="hidden" :value="this.$store.state.selectedNote.content" /> -->
        </div>
    </div>
</template>

<script>
const marked = require('marked')
import { codemirror } from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/theme/monokai.css'

// console.log(CodeMirror.fromTextArea);

export default {
    components: {
        codemirror
    },
    name: 'NoteDisplay',
    data() {
        return {
            cmOption: {
                mode: 'text/x-markdown',
                theme: 'monokai',
                lineWrapping: true,
            },
            edit: false 
        }
    },
    computed: {
        compiledMarkdown: function () {
        if (!this.$store.state.selectedNote.content) {
            return marked('oh no!');
        } else {
            return marked(this.$store.state.selectedNote.content)
        }
        }
    },
    methods: {
        handleClickEdit: function() {
            let API_URL = 'http://localhost:4020/notes';
            API_URL += `/${this.$store.state.selectedNote._id}`

            console.log(this.$store.state.selectedNote.content);

            if (this.edit) {
                var brandNew = this.$store.state.selectedNote.content
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
        },
        onCmCodeChange: function(newCode) {
            console.log('this is new code', newCode)
            this.$store.state.selectedNote.content = newCode
        }
    }

}
</script>

<style scoped>

#compiled {
    color: blueviolet;
    text-align: left;
    height: 85vh;
    overflow: scroll;
}

</style>