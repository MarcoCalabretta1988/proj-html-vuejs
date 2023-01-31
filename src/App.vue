<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'Everlead',
  data: () => ({ footerFormText: '' }),
  components: { AppHeader, AppFooter },
  methods: {
    onTermChange(term) {
      this.footerFormText = term;
    },
    subscriveContact() {

    }
  }
}
</script>

<template>
  <app-header></app-header>

  <app-footer @term-change="onTermChange" @form-submit="subscriveContact"></app-footer>

</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>