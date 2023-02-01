<script>
export default {
  name: 'SectionTitle',
  props: {
    title: String,
    text: String,
    divPosition: String
  }
}
</script>

<template>
  <div class="section-title d-flex flex-column">
    <h1>{{ title }}<span class="point">.</span></h1>
    <p>{{ text }}</p>
    <div :class="`divider align-self-${divPosition}`"></div>

  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.section-title {
  background-color: $white;

  h1 {
    font-size: 60px;


    .point {
      color: $orange;
    }
  }

  p {
    font-size: 21px;
  }
}

.divider {
  height: 1px;
  border: 1px solid $orange;
  width: 80px;
}
</style>