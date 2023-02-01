<script>
export default {
    name: 'GenericButton',
    props: {
        text: String,
    }
}
</script>

<template>
    <a href="#">{{ text }}</a>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

// BUTTON STYLE
a {
    text-transform: uppercase;
    padding: 20px 35px;
    margin-right: 15px;
    font-size: 14px;
    font-weight: 600;
    background-color: $white;

    &::after {
        content: " | \27F6";
        font-size: 30px;
        font-weight: 100;
    }

    &:hover {
        background-color: $orange;
        color: $white;
    }
}
</style>