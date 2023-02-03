<script>
// IMPORT COMPONENT
import AppMainNav from './header_component/AppMainNav.vue';
import HeaderJumbo from './header_component/HeaderJumbo.vue';
export default {
    name: 'AppHeader',
    components: { HeaderJumbo, AppMainNav }
}
</script>

<template>
    <header>
        <!-- HEADER -->
        <section id="main-nav">
            <nav class="d-flex justify-content-between align-items-center p-4 mx-4">

                <!-- LOGO -->
                <a href="#">
                    <img src="../assets/img/logo-img-01.png" alt="Logo">
                </a>

                <!-- MAIN NAVBAR -->

                <app-main-nav></app-main-nav>

            </nav>
        </section>
        <header-jumbo></header-jumbo>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

//HEADER LAYOUT
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


    }


}
</style>