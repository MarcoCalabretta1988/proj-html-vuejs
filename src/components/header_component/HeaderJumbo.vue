<script>
//IMPORT COMPONENT
import AppButton from '../app_generic/AppButton.vue'
import AppSlider from '../app_generic/AppSlider.vue';
export default {
    name: 'HeaderJumbo',
    components: { AppButton, AppSlider }
}
</script>

<template>
    <!-- JUMBOTRON -->
    <section id="jumbotron" class="container">
        <!-- SLIDER -->
        <app-slider></app-slider>
        <div class="row row-cols-2 h-100 position-relative">
            <div class="col d-flex justify-content-center flex-column h-100">
                <!-- TITLE AND TEXT -->
                <h1>Our Team<span>.</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam exercitationem unde doloremque
                    dicta.</p>
                <!-- BUTTON GROUP -->
                <div class="button-nav">
                    <app-button text="read more"></app-button>
                    <app-button text="purchase"></app-button>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

//jUBOTRON LAYOUT
#jumbotron {
    height: calc(100% - 100px);


    h1 {
        font-size: 90px;
        color: $darkgrey;
        font-family: 'Playfair Display', serif;
        font-weight: 700;

        span {
            color: $main;
        }
    }

    p {
        color: $grey;
        font-size: 22px;
        font-weight: 300;
        padding: 15px 0;
    }

}
</style>