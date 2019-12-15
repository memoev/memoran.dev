<template>
    <div class="new-note">
        <form>
            <div class="form-group">
                <input type="title" class="form-control" placeholder="Title">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Category</label>
                <select class="form-control">
                    <option value=" "> </option>
                    <option value="quick">Quick</option>
                    <option value="school">School</option>
                    <option value="favorites">Favorites</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Note Content</label>
                <textarea class="form-control" />
            </div>
            <button @click="handleClick">Save</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewNote',
    methods: {
        handleClick: function (event) {
            event.preventDefault();
            const noteTitle = document.querySelector('input').value;
            const noteCat = document.querySelector('select').value;
            const noteContent = document.querySelector('textarea').value;

            const API_URL = 'http://localhost:8080/notes';
            const insertedNote = {
                username: 'mexcelus',
                title: noteTitle,
                category: noteCat,
                content: noteContent
            };

            fetch(API_URL, {
                    method: 'POST',
                    body: JSON.stringify(insertedNote),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(response => {
                    const data = response.json();
                    this.$store.state.createNote = false;
                    // this.$store.state.notes.push(insertedNote);
                    return data;
                }).then(data =>  {
                    this.$store.state.notes.push(data);
                    this.$store.state.selectedNote = data;
                });
        }
    }
}
</script>

<style scoped>

form {
    margin-top: 1em;
}

textarea {
    width: 100%;
    height: 22em;
}

</style>