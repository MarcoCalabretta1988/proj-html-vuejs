<script>
import SectionTitle from './App generic/SectionTitle.vue';
import SpecialtiesCard from './Main components/SpecialtiesCard.vue';
import CalendarCard from './Main components/CalendarCard.vue'
import LeaderSkill from './Main components/leaderSkill.vue';
import { specialtiesOption, events, skills } from '../data';
export default {
    name: 'AppMain',
    components: { SectionTitle, SpecialtiesCard, CalendarCard, LeaderSkill },
    data: () => ({ specialtiesOption, events, skills })
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
        <section id="event">
            <div class="container">
                <div class="event-calendar">
                    <h3>Upcoming Events</h3>
                    <calendar-card v-for="event in events" :key="event.id" :event="event"></calendar-card>

                </div>

            </div>
        </section>
        <!-- LEADER SECTION -->
        <section id="leader">
            <div class="container h-100">
                <div class="row row-cols 2 h-100">
                    <!-- SECTION TITLE -->
                    <div class="col h-100 d-flex flex-column justify-content-center p-3">
                        <section-title title="Creative Leader"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, deleniti illum delectus nobis, voluptate rem ipsa praesentium obcaecati sapiente accusantium sequi aliquid sit sint, impedit magnam qui nemo! Esse, iste."
                            div-postion="start"></section-title>
                        <a href="#" class="py-4 fw-bold">READ MORE</a>
                    </div>
                    <!-- SKILL SECTION -->
                    <div class="col d-flex flex-column justify-content-center p-3">
                        <ul>
                            <li v-for="skill in skills" :key="skill.name" class="py-3"> <leader-skill
                                    :title="skill.name" :percentual="skill.perc" :skill="skill.skill"></leader-skill>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- TESTIMONIALS SECTION -->
        <section id="testimonials">
            <div class="change-testimoniance prev">&#10229;</div>
            <div class=" change-testimoniance next">&#10230;</div>
            <h1>Testimonials.</h1>
            <div class="testimoniance">
                <img src="../assets/img/h3-img-04.png" alt="Cynthia Clark">
                <h5>Cynthia Clark</h5>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et
                    dolore magna aliqua"</p>
                <div class="d-flex justify-content-center py-4">
                    <span>01</span>
                    <span class="progress-bar">
                        <div class="bar">
                            <div class="bar-progress"></div>
                        </div>
                    </span>
                    <span>03</span>
                </div>
            </div>
        </section>
        <!-- VIDEO SECTION -->
        <section id="video">
            <font-awesome-icon icon="fa-solid fa-play" class="video-icon" />
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    min-height: 100vh;
    padding-top: 500px;
}

// SPECIALTIES LAYOUT
#specialties {
    position: absolute;
    top: -2%;
    left: 5%;
    right: 5%;
    z-index: 1;
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

                &:hover {
                    color: $black;
                    background-color: $white;
                }
            }
        }

        img {
            height: 500px;
            width: auto;
        }
    }

    .blog-article-text {
        height: 350px;
        width: 700px;
        position: absolute;
        top: 18%;
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

                &:hover {
                    color: $black;
                }
            }
        }

    }
}

//SECTION EVENT LAYOUT
#event {
    background-image: url(../assets/img/h1-img-09.jpg);
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;

    .event-calendar {
        background-color: $white;
        width: 500px;


        h3 {
            padding: 15px 35px;
            box-shadow: 1px 1px 5px #888888;
            font-family: 'Playfair Display', serif;
        }

    }
}

//LEADER SECTION LAYOUT
#leader {
    background-color: $white;
    height: 550px;

}

//TESTIMONIALS SECTION LAYOUT
#testimonials {
    height: 630px;
    background-color: $greydark;
    text-align: center;
    position: relative;

    .progress-bar {
        width: 120px;
        margin: 0 15px;

        .bar {
            position: relative;
            height: 2px;
            background-color: $lightgrey;
        }

        .bar-progress {
            background-color: $grey;
            height: 2px;
            position: absolute;
            top: 0;
            left: 33%;
            right: 0;
        }
    }

    .change-testimoniance {

        position: absolute;
        top: 50%;
        font-size: 35px;
        transform: translateY(-50%);
        cursor: pointer;
        color: $lightgrey;

        &:hover {
            color: $orange;
        }

        &.prev {
            right: 92%;

        }

        &.next {
            left: 92%;
        }
    }

    .testimoniance {
        color: $lightgrey;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        h5 {
            padding: 20px;
        }

        p {
            font-size: 25px;
            color: $greylight;
        }
    }

    h1 {
        font-size: 250px;
        color: $black-grey;

    }

}

//SECTION VIDEO LAYOUT
#video {
    height: 100vh;
    background-image: url(../assets/img/h1-img-04.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .video-icon {
        color: $white;
        font-size: 50px;
        cursor: pointer;

        &:hover {
            color: $orange;
        }
    }
}
</style>