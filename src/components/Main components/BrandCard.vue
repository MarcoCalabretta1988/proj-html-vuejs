<script>
export default {
    name: 'BrandCard',
    props: {
        img: String,
        imgHovered: String,
        brandName: String,
    }
}
</script>

<template>
    <!-- BRAND CARD -->
    <div class="brand-card">
        <figure>
            <img :src="`src/assets/img/h4-clients-img-${img}.png`" :alt="brandName" class="logo-img">
            <img :src="`src/assets/img/h4-clients-img-${imgHovered}.png`" :alt="brandName + 'hover'"
                class="hover-logo-img">
        </figure>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

//BRAND CARD LAYOUT
.brand-card {
    align-items: center;
    display: flex;

    .hover-logo-img {
        display: none;
    }

    figure:hover .hover-logo-img {
        display: block;
    }

    figure:hover .logo-img {
        display: none;
    }
}
</style>