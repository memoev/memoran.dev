<template>
    <div class="category">
        <button class="cat-button" @click="handleClick(category.name)">{{category.name.toUpperCase()}}</button>
    </div>
</template>

<script>

export default {
    name: 'Category',
    props: ["category"],
    methods: {
        handleClick: function(name) {
            let API_URL = 'https://memoran-dev.herokuapp.com'

            if (name === 'all') {
                API_URL += '/all'
            } else {
                API_URL += `/notes/${name}`
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

.cat-button {
    background-color: inherit;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 14px;
    padding: none !important;
    border: none;
    text-align: left;
}

.cat-button:hover {
    background-color: #000
}

.cat-button:active {
    background-color: #000
}
</style>