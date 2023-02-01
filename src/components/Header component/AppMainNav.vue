<script>
import { mainNavLinks } from '../../data/index'
export default {
    name: 'AppMainNav',
    data: () => ({ mainNavLinks }),

}
</script>

<template>
    <ul>
        <li v-for="link in mainNavLinks" :key="link"><a href="#">{{ link }}</a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-bars" /></a></li>

    </ul>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables' as *;

ul {

    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

    li {
        margin: 0 25px;
        font-weight: 500;

        & a:hover,
        a:active {
            color: $orange;
            position: relative;

            &::before {
                position: absolute;
                right: 100%;
                bottom: 65%;
                transform: translateY(50%);
                content: "\27F6 ";
                font-size: 28px;
                line-height: 0;
                padding: 5px;
            }

        }
    }
}
</style>