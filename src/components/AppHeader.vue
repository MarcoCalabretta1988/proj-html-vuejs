<script>
import { mainNavLinks } from '../data/index'
export default {
    name: 'AppHeader',
    data: () => ({ mainNavLinks })
}
</script>

<template>
    <header>


        <section id="main-nav">
            <nav class="d-flex justify-content-between align-items-center p-4 mx-4">

                <!-- LOGO -->
                <img src="../assets/img/logo-img-01.png" alt="Logo">

                <!-- MAIN NAVBAR -->

                <!-- possibile componente nav -->
                <ul>
                    <li v-for="(link, i) in mainNavLinks"><a href="#">{{ link }}</a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-solid fa-bars" /></a></li>

                </ul>
            </nav>
        </section>
        <section id="jumbotron"></section>

    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
    height: 95vh;
    background-image: url(../assets/img/rev-slider-main-home-img-03.jpg);
    background-position: left;

    nav {
        height: 100px;


        img {
            width: 140px;
            height: auto;
        }

        ul {
            // Possibile mixin?
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-transform: uppercase;

            li {
                margin: 0 20px;
                font-weight: 500;

                & a:hover {
                    color: $orange;
                    position: relative;

                    &::before {
                        position: absolute;
                        right: 100%;
                        bottom: 65%;
                        transform: translateY(50%);
                        content: "\2192 ";
                        font-size: 40px;
                        line-height: 0;
                        padding: 5px;
                    }

                }
            }
        }
    }
}
</style>