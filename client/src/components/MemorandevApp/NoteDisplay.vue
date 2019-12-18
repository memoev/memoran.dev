<template>
    <div class="note">
        <div class="controls">
            <button @click="handleClickEdit">{{this.edit === false ? `Edit` : `Preview`}}</button>
            <button @click="handleClickDelete">Delete</button>
        </div>
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
import { mapActions } from 'vuex'
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
                lineNumbers: true
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
        ...mapActions({
            toggleBook: 'toggleBook'
        }),
        handleClickEdit: function() {
            let API_URL = 'http://localhost:8080/notes';
            API_URL += `/${this.$store.state.selectedNote._id}`

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
            this.toggleBook();
        },
        handleClickDelete: function() {
            let API_URL = 'http://localhost:8080/notes';
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
            this.$store.state.selectedNote.content = newCode
        }
    }

}
</script>

<style scoped>
.controls {
    right: 0;
    position: absolute;
    margin-right: 1em;
    margin-top: 1em;
    z-index: 99;
}

button {
    background-color: inherit;
    border: none;
    color: #fff;
    font-weight: bold;
}

button:hover {
    color: #db7093
}

#compiled {
    text-align: left;
    height: 90vh;
    overflow: scroll;
    color: #c1ffc1;
    padding-top: 1.5em;
}

</style>