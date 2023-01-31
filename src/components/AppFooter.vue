<script>
import FooterNav from './Footer component/FooterNav.vue';
export default {
    name: 'AppFooter',
    components: { FooterNav }

}
</script>

<template>
    <footer>
        <footer-nav @term-change="$emit('term-change', $event)" @form-submit="$emit('form-submit')"></footer-nav>
        <div class="copyright">Copyright Everled &#169; Mikado Themes</div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
    height: 550px;
    background-color: $black-grey;


    .copyright {
        background-color: $orange;
        height: 40px;
        text-align: center;
        line-height: 40px;
        vertical-align: middle;
        color: $greylight;
        font-size: 14px;

    }
}
</style>