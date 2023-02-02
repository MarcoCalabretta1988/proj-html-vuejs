<script>
//IMPORT COMPONENT
import GenericButton from '../App generic/GenericButton.vue';
export default {
    name: 'NewsCard',
    components: { GenericButton },
    props: {
        news: Object,
    }

}
</script>

<template>
    <!-- NEWS CARD -->
    <div class="col text-start">
        <!-- NEWS FIGURE -->
        <figure class="position-relative">
            <div class="up-card-img">
                <img :src="`src/assets/img/h1-blog-img-0${news.img.top}.jpg`" :alt="news.title">
            </div>
            <img :src="`src/assets/img/h1-blog-img-0${news.img.bottom}.jpg`" :alt="news.title">
            <div class="label"><font-awesome-icon icon="fa-solid fa-tag" class="px-1" /> {{ news.img.label }}</div>
        </figure>
        <!-- NEWS AUTHOR -->
        <div class="author py-2">
            <font-awesome-icon icon="fa-regular fa-clock" class="icon" /><span>{{ news.date }}</span>
            <font-awesome-icon icon="fa-regular fa-user" class="icon" /><span>{{ news.author }}</span>
        </div>
        <!-- NEWS INFO -->
        <h3>{{ news.title }}</h3>
        <p>{{ news.text }} ...</p>
        <generic-button text="READ MORE"></generic-button>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

//NEWS CARD LAYOUT
figure {

    .up-card-img {
        overflow-y: hidden;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        height: 105px;

    }
}

.label {
    background-color: $main;
    padding: 10px;
    width: 150px;
    color: $white;
    font-size: 12px;
    font-weight: 100;
    position: absolute;
    right: 4%;
    top: 91%;
}

.author {
    display: flex;
    align-items: center;
    color: $greylight;
    font-size: 14px;

    span {
        padding: 0 10px;
    }

    .icon {
        color: $main;
        font-size: 12px;

    }
}

h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    padding: 5px 0;
}

p {
    font-size: 18px;
}
</style>