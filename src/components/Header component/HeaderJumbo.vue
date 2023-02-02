<script>
import AppButton from '../App generic/AppButton.vue'
import Slider from '../App generic/Slider.vue';
export default {
    name: 'HeaderJumbo',
    components: { AppButton, Slider }
}
</script>

<template>
    <!-- JUMBOTRON -->
    <section id="jumbotron" class="container">
        <!-- SLIDER -->
        <slider></slider>
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

#jumbotron {
    height: calc(100% - 100px);


    h1 {
        font-size: 90px;
        color: $darkgrey;
        font-family: 'Playfair Display', serif;
        font-weight: 700;

        span {
            color: $orange;
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