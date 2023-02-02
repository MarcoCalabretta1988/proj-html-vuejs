<script>
export default {
    name: 'GenericButton',
    props: {
        bgColor: String,
        text: String
    }
}
</script>

<template>
    <div class="generic-button">

        <a href="#" :style="`background-color = ${bgColor}`">{{ text }}</a>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.generic-button {
    padding: 10px 0;

    a {
        font-weight: bold;

        &:hover {
            color: $main;
        }
    }
}
</style>