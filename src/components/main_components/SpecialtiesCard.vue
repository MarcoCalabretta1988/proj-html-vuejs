<script>
export default {
    name: 'SpecialtiesCard',
    props: {
        specialty: Object,
        index: Number
    },
}
</script>

<template>
    <!-- SPECIALITIES CARD INFO -->
    <div class="specialty-card px-5">
        <img :src="`src/assets/img/svg/svg-${index}.svg`" :alt="specialty.title">
        <h4>{{ specialty.title }}</h4>
        <p>{{ specialty.text }}</p>
    </div>
</template>

<style lang="scss" scoped>
//SPECIALTIES CARD LAYOUT
h4 {
    padding: 20px 0;
    font-family: 'Playfair Display', serif;
}
</style>