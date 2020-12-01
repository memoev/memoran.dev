<template>
    <button class="cat-button" @click="handleClick(category.name)">
        <font-awesome-icon class="icon" :icon="category.icon" />
        <span class="category-name">{{category.name}}</span>
    </button>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBolt, faBook, faCode, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBolt, faStar, faBook, faCode);

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
    padding-left: 1em;
}

.icon {
    width: 10px;
}

.cat-button {
    background-color: inherit;
    color: #ffffff;
    font-weight: bold;
    font-size: 12px;
    border: none;
    text-align: left;
    padding-left: 20px;
}

.cat-button:hover {
    background-color: #000;
    color: #ffbf00;
}

.cat-button:active {
    background-color: #000;
    color: #ffbf00;
}
</style>