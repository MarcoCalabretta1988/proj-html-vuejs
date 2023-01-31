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
                    <li v-for="link in mainNavLinks"><a href="#">{{ link }}</a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a></li>
                    <li><a href="#"></a><font-awesome-icon icon="fa-solid fa-bars" /></li>

                </ul>
            </nav>
        </section>
        <section id="jumbotron"></section>

    </header>
</template>

<style lang="scss" scoped>
header {
    height: 95vh;
    background-image: url(../assets/img/rev-slider-main-home-img-03.jpg);
    background-position: left;
    background-size: cover;

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
                margin: 0 10px;
                font-weight: bolder;
            }
        }
    }
}
</style>