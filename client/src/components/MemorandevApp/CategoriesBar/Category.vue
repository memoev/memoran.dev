<template>
    <div class="category">
        <h4>{{category.name}}</h4>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ["category"]
}
</script>

<style scoped>
.category {
    padding: 0.5em;
}
</style>