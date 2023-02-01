<script>
import SectionTitle from './App generic/SectionTitle.vue';
import SpecialtiesCard from './Main components/SpecialtiesCard.vue';
import { specialtiesOption } from '../data';
export default {
    name: 'AppMain',
    components: { SectionTitle, SpecialtiesCard },
    data: () => ({ specialtiesOption })
}
</script>

<template>
    <main class="position-relative">
        <!-- SPECIALTIES SECTION -->
        <section id="specialties" class="py-5 text-center">
            <!-- SECTION TITLE -->
            <div class="specialties-title">
                <section-title title="Our specialties" divPosition="center"
                    text="lorem ipsum dolor sit amet,consectetur adipiscing elit"></section-title>
            </div>
            <!-- SPECIALTIES LIST -->
            <div class="container">
                <div class="row row-cols-4 py-5 g-2">
                    <specialties-card v-for="(specialty, i) in specialtiesOption" :key="specialty.id"
                        :specialty="specialty" :index="i"></specialties-card>
                </div>
            </div>
        </section>
        <!-- BLOG SECTION -->
        <section id="blog">
            <div class="container">
                <div class="row row-cols-2 position-relative py-5 my-5">

                    <!-- BLOG FIGURE -->
                    <figure>
                        <div class="change-pic">
                            <div class="prev">&#10229;</div>
                            <div class="next">&#10230;</div>
                        </div>
                        <img src="../assets/img/h1-blog-img-04.jpg" alt="Founder Interview">
                    </figure>

                    <!-- ARTICLE TEXT PREW -->
                    <div class="my-3 blog-article-text">
                        <h1>Jason Bickford</h1>
                        <span>Founder and Exectuive Director</span>
                        <div class="divider my-3"></div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Debitis molestiae, architecto illum
                            quo ullam numquam eum cum tempore</p>
                        <div class="sign">Jason Brick</div>
                        <!-- SOCIAL ICON -->
                        <div class="social-ico">
                            <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-square-twitter" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <!-- EVENTS SECTION -->
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    min-height: 100vh;
}

// SPECIALTIES LAYOUT
#specialties {
    position: absolute;
    bottom: 55%;
    left: 5%;
    right: 5%;
    background-color: $white;

    .specialties-title {
        display: flex;
        justify-content: center;
    }
}

// BLOG LAYOUT
#blog {
    background-image: url(../assets/img/svg/svg-4.svg);
    background-position: 95% 80%;
    background-repeat: no-repeat;
    background-color: $greywhite;
    padding-top: 500px;
    margin-bottom: 50px;

    figure {
        position: relative;

        .change-pic {
            position: absolute;
            left: 3%;
            bottom: 1%;
            display: flex;

            * {
                padding: 5px 10px;
                margin: 0 1px;
                background-color: $orange;
                font-size: 30px;
                color: $white;
                cursor: pointer;
            }
        }

        img {
            height: 500px;
            width: auto;
        }
    }

    .blog-article-text {
        height: 300px;
        width: 700px;
        position: absolute;
        top: 15%;
        left: 40%;
        padding: 50px;
        background-color: $white;

        .sign {
            color: $orange;
            font-size: 50px;
            position: absolute;
            top: 65%;
            right: 15%;
            font-family: 'Sassy Frass', cursive;
        }

        span {
            font-size: 13px;
            color: $grey;
        }

        .divider {
            height: 1px;
            border: 1px solid $orange;
            width: 80px;
        }

        p {
            font-size: 18px;
        }

        .social-ico {
            a {
                color: $orange;
                font-size: 25px;
            }
        }
    }
}
</style>