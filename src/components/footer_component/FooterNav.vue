<script>

//IMPORT COMPONENTS
import AppFormInput from '../app_generic/AppFormInput.vue';
import FooterCard from './FooterCard.vue';

//IMPORT DATA
import { footerData } from '../../data';
export default {
    name: 'FooterNav',
    data: () => ({ footerData }),
    components: { FooterCard, AppFormInput }

}
</script>

<template>
    <!-- FOOTER NAV SECTION -->
    <section id="footer-top" class="container">
        <div class="row  row-col-4 h-100">
            <!-- CREATE FOOTER CARD -->
            <div v-for="data in footerData" :key="data.title" class="col ">
                <footer-card :element="data" @term-change="$emit('term-change', $event)"
                    @form-submit="$emit('form-submit')">
                    <!-- ADD MARKUP ICON-->
                    <div v-if="data.title === 'About'" class="social-ico">
                        <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
                        <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                        <a href="#"><font-awesome-icon icon="fa-brands fa-square-twitter" /></a>
                    </div>
                    <!-- ADD MARKUP FORM -->
                    <div v-else-if="data.title === 'Contact me'">
                        <form class="input-group mb-3" @submit.prevent="$emit('form-submit')">
                            <!-- USE FORM COMPONENT -->
                            <app-form-input type="text" placeholder="Your name"
                                @term-change="$emit('term-change', $event)"></app-form-input>
                            <button class="btn btn-outline-secondary" type="button">SUBSCRIBE</button>
                        </form>

                    </div>
                </footer-card>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

// FOOTER NAV STYLE
#footer-top {
    height: 510px;
    color: $grey;
    font-size: 14px;

    button {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid $grey;
        border-radius: 0;
        color: $white;

    }

    .col {
        padding-top: 100px;
    }

    .social-ico * {
        color: $white;
        padding: 0 5px;
        font-size: 25px;
    }

}
</style>