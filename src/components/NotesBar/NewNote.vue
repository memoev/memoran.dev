<template>
    <div class="new-note">
        <form>
            <div class="form-group">
                <label>Title</label>
                <input type="title" class="form-control">
            </div>
            <div class="form-group">
                <label>Category</label>
                <select class="form-control">
                    <option value=" "> </option>
                    <option value="quick">Quick</option>
                    <option value="school">School</option>
                    <option value="favorites">Favorites</option>
                </select>
            </div>
            <button class="btn btn-warning" @click="handleClick">Create</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'NewNote',
    methods: {
        ...mapActions({
        toggleNewNote: 'toggleNewNote',
        toggleBook: "toggleBook",
        FillNotesList:"FillNotesList",
        pushSelectedNote: "pushSelectedNote",
        }),
        handleClick: function (event) {
            event.preventDefault();
            const noteTitle = document.querySelector('input').value;
            const noteCat = document.querySelector('select').value;

            const API_URL = 'https://memoran-dev.herokuapp.com/notes';
            const insertedNote = {
                username: this.$auth.user.nickname,
                title: noteTitle,
                category: noteCat,
                content: '# Start typing here...'
            };

            fetch(API_URL, {
                    method: 'POST',
                    body: JSON.stringify(insertedNote),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(response => {
                    const data = response.json();
                    this.toggleNewNote();
                    if (!this.$store.state.openbook) {
                        this.toggleBook();
                    }
                    return data;
                }).then(data =>  {
                    const DATARRAY = [data];
                    this.FillNotesList(DATARRAY);
                    this.pushSelectedNote(data);
                    // this.toggleBook();
                });
        }
    }
}
</script>

<style scoped>

form {
    background: #2e2e2e;
    width: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2em;
    padding: 3em;
}

label {
    font-weight: bolder;
    color: #fff;
}

button {
    font-weight: bold;
}

div.new-note {
    position: relative;
    height: 100vh;
}

div.form-group {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 2em;
}

</style>