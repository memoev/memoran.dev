<template>
    <div class="note">
        <div class="controls">
            <button class="control-button" @click="handleClickEdit">{{this.$store.state.openbook === false ? `Edit` : `Preview`}}</button>
            <button class="control-button" @click="handleClickDelete">Delete</button>
        </div>
        <div v-html="compiledMarkdown" id="compiled" v-if="!this.$store.state.openbook"/>
        <codemirror id="markdown" :value="this.$store.state.selectedNote.content" :options="cmOption" @input="onCmCodeChange" v-else/>
    </div>
</template>

<script>
const marked = require('marked')
import { mapActions, mapState } from 'vuex'
import { codemirror } from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/theme/base16-light.css'

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
                theme: 'base16-light',
                lineWrapping: true,
                lineNumbers: true
            },
        }
    },
    computed: {
        ...mapState({
            openBook: 'openBook',
        }),
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
            toggleBook: 'toggleBook',
            deleteSelectedNote: 'deleteSelectedNote',
            pushSelectedNote: 'pushSelectedNote',
        }),
        handleClickEdit: function() {
            this.toggleBook();
            let API_URL = 'https://memoran-dev.herokuapp.com/notes';
            API_URL += `/${this.$store.state.selectedNote._id}`

            if (!this.openBook) {
                var brandNew = this.$store.state.selectedNote
                fetch(API_URL, {
                    method: 'PUT',
                    body: JSON.stringify({
                        _id: `/${this.$store.state.selectedNote._id}`,
                        newContent: brandNew.content
                    }),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                }).then(response => {
                    response.json();
                    this.pushSelectedNote(brandNew);
                })
            }

            // this.edit = !this.edit
        },
        handleClickDelete: function() {
            this.deleteSelectedNote(this.$store.state.selectedNote);
            this.pushSelectedNote( {} );
            let API_URL = 'https://memoran-dev.herokuapp.com/notes';
            API_URL += `/${this.$store.state.selectedNote._id}`
            
            fetch(API_URL, {
                    method: 'DELETE',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                }).then(response => {
                    response.json();
                })
        },
        onCmCodeChange: function(newCode) {
            this.$store.state.selectedNote.content = newCode
        }
    }

}
</script>

<style>
.note {
    position: relative;
}

.controls {
    right: 1em;
    position: absolute;
    margin-right: 1em;
    margin-top: 1em;
    z-index: 99;
}

button.control-button {
    font-size: 12px;
    background-color: inherit;
    border: none;
    color: #363636;
    font-weight: bold;
}

button.control-button:hover {
    color: #000
}

#compiled {
    text-align: left;
    height: 100vh;
    overflow: scroll;
    color: #363636;
    padding: 1.5em;
}

#compiled::-webkit-scrollbar {
  display: none;
}

.CodeMirror {
  height: 100vh !important;
  text-align: left;
  font-family: Menlo,Monaco,monospace;
  font-size: 14px;
}

.CodeMirror::-webkit-scrollbar {
  display: none !important;
}

/* .language-javascript { 
  color: white;
}
.language-bash { 
  color: white;
} */

pre {
  border-radius: 1em;
  padding: 1.5em;
}

</style>