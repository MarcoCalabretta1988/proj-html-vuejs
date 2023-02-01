<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'Everlead',
  data: () => ({ footerFormText: '' }),
  components: { AppHeader, AppMain, AppFooter },
  methods: {
    //Recover the value to footer form
    onTermChange(term) {
      this.footerFormText = term;
    },
    //when user submit footer form
    subscriveContact() {

    }
  }
}
</script>

<template>
  <app-header></app-header>
  <app-main></app-main>
  <app-footer @term-change="onTermChange" @form-submit="subscriveContact"></app-footer>

</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>