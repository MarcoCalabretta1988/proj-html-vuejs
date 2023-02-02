<script>
export default {
    name: 'Slider',
}
</script>

<template>
    <div class="change-slide prev">&#10229;</div>
    <div class="change-slide next">&#10230;</div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.change-slide {

    position: absolute;
    top: 50%;
    font-size: 35px;
    transform: translateY(-50%);
    cursor: pointer;
    color: $grey;

    &:hover {
        color: $main;
    }

    &.prev {
        right: 92%;

    }

    &.next {
        left: 92%;
    }
}
</style>