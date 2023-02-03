<script>
//IMPORT COMONENTS
import FooterNav from './footer_component/FooterNav.vue';

export default {
    name: 'AppFooter',
    components: { FooterNav }

}
</script>

<template>
    <!-- FOOTER -->
    <footer>
        <!-- USE FOOTER NAV COMPONENT -->
        <footer-nav @term-change="$emit('term-change', $event)" @form-submit="$emit('form-submit')"></footer-nav>
        <!-- COPYRIGHT SECTION -->
        <div class="copyright">Copyright Everled &#169; Mikado Themes</div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

// FOOTER LAYOUT
footer {
    height: 550px;
    background-color: $black-grey;


    .copyright {
        background-color: $main;
        height: 40px;
        text-align: center;
        line-height: 40px;
        vertical-align: middle;
        color: $greylight;
        font-size: 14px;

    }
}
</style>