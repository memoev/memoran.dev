<template>
    <div class="note">
        <div v-html="compiledMarkdown" id="compiled" v-if="!this.$store.state.openbook"/>
        <div v-else>
            <div class="controls">
                <button class="control-button" @click="handleClickEdit()">
                    <img class="save" :src="save" alt="save">
                </button>
            </div>
            <codemirror ref="cmEditor" id="markdown" :value="this.$store.state.selectedNote.content" :options="cmOption" @input="onCmCodeChange"/>
        </div>
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
// import codemirrorVue from 'vue-codemirror/src/codemirror.vue'

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
                lineNumbers: true,
                autofocus: true,
            },
            save: require('../assets/save.png')
        }
    },
    computed: {
        ...mapState({
            openBook: 'openBook',
            selectedNote: 'selectedNote',
        }),
        compiledMarkdown: function () {
            if (!this.$store.state.selectedNote.content) {
                return marked("<div class='placeholder-div'><p>CLICK ON</p><p><kbd>NEW NOTE</kbd></p></div>");
            } else {
                return marked(this.$store.state.selectedNote.content)
            }
        }
    },
    methods: {
        ...mapActions({
            toggleBook: 'toggleBook',
            FillNotesList: 'FillNotesList',
            ReplaceNoteList: 'ReplaceNoteList',
            pushSelectedNote: 'pushSelectedNote',
        }),
        handleClickEdit: async function() {
            const NEWNOTE = this.$store.state.selectedNote;
            let newTitle = this.$refs.cmEditor.cminstance.doc.children[0].lines[0].text;

            if (newTitle.substring(0, 2) == '# ') {
                newTitle = newTitle.substring(2, newTitle.length);
            }

            NEWNOTE.title = newTitle;

            let local = JSON.parse(localStorage.getItem('testNotes'));
            let found = local.find(x => x._id === this.$store.state.selectedNote._id);
            if (typeof found === "undefined") {
                this.FillNotesList(NEWNOTE);
                localStorage.setItem('testNotes', JSON.stringify(this.$store.state.notes));
            } else {
                let noteObj = {
                    oldValue: found,
                    newValue: NEWNOTE,
                }
                this.ReplaceNoteList(noteObj);
                localStorage.setItem('testNotes', JSON.stringify(this.$store.state.notes));
            }
        },
        onCmCodeChange: function(newCode) {
            this.$store.state.selectedNote.content = newCode
        }
    }

}
</script>

<style>
.placeholder-div {
    text-align: center;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.note {
    position: relative;
}

.controls {
    right: 0.5em;
    position: absolute;
    margin-right: 0.5em;
    margin-top: 0.5em;
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

img.save {
    width: 15px;
}

#compiled {
    text-align: left;
    height: 100vh;
    overflow: scroll;
    color: #363636;
    padding: 1.5em;
    font-size: 12px;
}

#compiled::-webkit-scrollbar {
  display: none;
}

.CodeMirror {
    height: 100vh !important;
    text-align: left;
    font-family: Menlo,Monaco,monospace;
    font-size: 12px;
}

.CodeMirror::-webkit-scrollbar {
    display: none !important;
}

pre {
    white-space: pre-wrap;
    overflow-x: auto;
    background: #cecece;
    border-radius: 1em;
    padding: 1em;
}

</style>