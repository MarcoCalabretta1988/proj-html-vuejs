<script>
//IMPORT COMPONENT
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'Everlead',
  data: () => ({ footerFormText: '', mainFormText: '', mainFormMail: '' }),
  components: { AppHeader, AppMain, AppFooter },
  methods: {
    //Recover the value to footer form
    onFooterTermChange(term) {
      this.footerFormText = term;
    },
    //Recover the value to main form
    onMainTermChange(term) {
      this.mainFormText = term;
    },
    //Recover email to main form
    onMailChange(term) {
      this.mainFormMail = term;
    },
    //when user submit footer form
    subscriveContact() {

    },
    //when user submit main form
    subscriveContactUs() {

    }
  }
}
</script>

<template>
  <!-- HEADER -->
  <app-header></app-header>
  <!-- MAIN -->
  <app-main @term-change="onMainTermChange" @form-submit="subscriveContactUs" @mail-change="onMailChange"></app-main>
  <!-- FOOTER -->
  <app-footer @term-change="onFooterTermChange" @form-submit="subscriveContact"></app-footer>

</template>

<style lang="scss">
//LINK MAIN STYLE
@use './assets/scss/style.scss'
</style>