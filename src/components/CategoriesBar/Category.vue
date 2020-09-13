<template>
    <div class="category">
        <button class="cat-button" @click="handleClick(category.name)">
            <font-awesome-icon :icon="category.icon" />
            <span class="category-name">{{category.name.toUpperCase()}}</span>
        </button>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBolt, faBook, faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBolt, faStar, faBook, faBookmark);

export default {
    name: 'Category',
    props: ["category"],
    components: {
        FontAwesomeIcon
    },
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
        },
    },
}
</script>

<style scoped>
button {
    width: 100%;
    margin: 0 !important;
}

span.category-name {
    padding-left: 0.5em;
}

.cat-button {
    background-color: inherit;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    padding: none !important;
    border: none;
    text-align: left;
    padding-left: 20px;
}

.cat-button:hover {
    background-color: #000
}

.cat-button:active {
    background-color: #000
}
</style>