<script>
import AppButton from './App generic/AppButton.vue'
export default {
    name: 'HeaderJumbo',
    components: { AppButton }
}
</script>

<template>
    <!-- JUMBOTRON -->
    <section id="jumbotron" class="container">
        <div class="row row-cols-2 h-100">
            <div class="col d-flex justify-content-center flex-column h-100">
                <!-- CHANGE PIC ARROW -->
                <div class="change-pic prev">&#10229;</div>
                <div class=" change-pic next">&#10230;</div>
                <!-- TITLE AND TEXT -->
                <h1>Our Team<span>.</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam exercitationem unde doloremque
                    dicta.</p>
                <!-- BUTTON GROUP -->
                <div class="button-nav">
                    <app-button text="read more"></app-button>
                    <app-button text="purchase" bg-color="orange"></app-button>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#jumbotron {
    height: calc(100% - 100px);
    position: relative;

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

    //CHANGE PIC ARROW STYLE
    .change-pic {

        position: absolute;
        top: 50%;
        font-size: 35px;
        transform: translateY(-50%);
        cursor: pointer;

        &.prev {
            right: 115%;
        }

        &.next {
            left: 112%;
        }
    }
}
</style>