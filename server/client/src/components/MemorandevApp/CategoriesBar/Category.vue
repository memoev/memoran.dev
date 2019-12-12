<template>
    <div class="category">
        <button class="btn btn-info" @click="handleClick(category.name)">{{category.name}}</button>
    </div>
</template>

<script>

export default {
    name: 'Category',
    props: ["category"],
    methods: {
        handleClick: function(name) {
            let API_URL = 'http://localhost:8080/notes/'
            if (name !== "all") {
                API_URL += name
            }

            fetch(API_URL).then(res => res.json()).then((result) => {
            this.$store.state.notes = result;
            });
        }
    }
}
</script>

<style scoped>
button {
    width: 100%;
    margin: 0 !important;
}

.category {
    padding: 0.5em;
}
</style>