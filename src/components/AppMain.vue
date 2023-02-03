<script>
//IMPORT COMPONENTS
import SectionTitle from './app_generic/SectionTitle.vue';
import SpecialtiesCard from './main_components/SpecialtiesCard.vue';
import CalendarCard from './main_components/CalendarCard.vue'
import LeaderSkill from './main_components/leaderSkill.vue';
import AppSlider from './app_generic/AppSlider.vue';
import GenericButton from './app_generic/GenericButton.vue';
import AppButton from './app_generic/AppButton.vue';
import NewsCard from './main_components/NewsCard.vue';
import AppFormInput from './app_generic/AppFormInput.vue';
import BrandCard from './main_components/BrandCard.vue';

//IMPORT DATA
import { specialtiesOption, events, skills, news, brands } from '../data';

export default {
    name: 'AppMain',
    components: { SectionTitle, AppButton, SpecialtiesCard, BrandCard, AppFormInput, NewsCard, GenericButton, CalendarCard, LeaderSkill, AppSlider },
    data: () => ({ specialtiesOption, events, skills, news, brands, textAreaText: '' }),
    methods: {
        sendForm() {

        }
    }
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
                    <!-- USE CALENDAR CARD COMPONENT FOR EVENT LIST -->
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
                        <generic-button text="READ MORE"></generic-button>
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
        <!-- LATEST NEWS SECTION -->
        <section id="latest-news" class="position-relative">
            <!-- ADD SLIDER LAYOUT -->
            <app-slider></app-slider>
            <div class="container text-center ">
                <!-- ADD SECTION TITLE -->
                <section-title title="Latest news" text="Lorem ipsum dolor sit amet,consecteur adipscing elit"
                    div-position="center"></section-title>
                <div class="row row-cols3 py-5">
                    <!-- USE NEW CARD COMPONENT FOR GENERATE NEWS LIST -->
                    <news-card v-for="news in news" :key="news.id" :news="news"></news-card>
                </div>
            </div>
        </section>
        <!-- TESTIMONIALS SECTION -->
        <section id="testimonials">
            <!-- ADD SLIDER LAYOUT -->
            <app-slider></app-slider>
            <!-- BACKGROUND TITLE -->
            <h1>Testimonials.</h1>
            <!-- TESTIMONIAL SECTION CARD -->
            <div class="testimoniance">
                <img src="../assets/img/h3-img-04.png" alt="Cynthia Clark">
                <h5>Cynthia Clark</h5>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et
                    dolore magna aliqua"</p>
                <!-- TESTIMONIANC BAR NUMBER -->
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
            <!-- ADD PLAY ICON -->
            <font-awesome-icon icon="fa-solid fa-play" class="video-icon" />
        </section>
        <!-- CONTACT US SECTION -->
        <section id="contact-us">
            <div class="container h-100">
                <div class="row row-cols-2 h-100 align-items-center">
                    <!-- WORLD LOCATION SECTION, IMPORT GENERIC BUTTON IN BOTTOM -->
                    <div class="col world-location">
                        <img class="location america" src="../assets/img/h1-contact-rev-02.png" alt="Location America">
                        <img class="location europe" src="../assets/img/h1-contact-rev-02.png" alt="Location Europe">
                        <img class="location australia" src="../assets/img/h1-contact-rev-02.png"
                            alt="Location Australia">
                        <div class="location label">
                            <h4>New York Coaching</h4>
                            <generic-button text="READ MORE"></generic-button>
                        </div>
                    </div>
                    <!-- CONTACT US SECTION FORM,IMPORT SECTION TITLE AND APP FORM INPUT -->
                    <div class="col">
                        <section-title title="Contact us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            div-position="start"></section-title>
                        <!-- SECTION FORM -->
                        <form @submit.prevent="$emit('form-submit')" class="py-4">
                            <div class="d-flex py-3">
                                <!-- INPUT FORM -->
                                <app-form-input type="text" placeholder="Your name" class="me-3"
                                    @term-change="$emit('term-change', $event)"></app-form-input>
                                <app-form-input type="email" placeholder="Your Email"
                                    @term-change="$emit('mail-change', $event)"></app-form-input>
                            </div>
                            <div class="form-floating my-3">
                                <!-- TEXT AREA -->
                                <textarea class="form-control" v-model.trim="textAreaText"
                                    id="floatingTextarea2Disabled" style="height: 100px"></textarea>
                                <label for="floatingTextarea2Disabled">Write a message</label>
                            </div>
                        </form>
                        <!-- BUTTON FOR SUBMIT -->
                        <app-button text="send" class="contact-us-button"></app-button>
                    </div>
                </div>
            </div>
        </section>
        <!-- BRANDS SECTION -->
        <section id="brands">
            <div class="container h-100">
                <div class="row row-cols-5 h-100">
                    <!-- GENERATE BRANDS LIST WHIT COMPONENT -->
                    <brand-card v-for="brand in brands" :key="brand.id" :img="brand.img.logo"
                        :img-hovered="brand.img.hoverLogo" :brand-name="brand.name"></brand-card>
                </div>
            </div>

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
    top: -89px;
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
                background-color: $main;
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
            color: $main;
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
            border: 1px solid $main;
            width: 80px;
        }

        p {
            font-size: 18px;
        }

        .social-ico {
            a {
                color: $main;
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

        a:hover {
            color: $main;
        }

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

//LATEST NEWS LAYOUT
#latest-news {
    height: 80vh;
    background-image: url(../assets/img/svg/svg-4.svg);
    background-position: 7% -20%;
    background-repeat: no-repeat;
    background-color: $greywhite;
}

//TESTIMONIALS SECTION LAYOUT
#testimonials {
    height: 630px;
    background-color: $greydark;
    text-align: center;
    position: relative;

    h1 {
        font-size: 250px;
        color: $black-grey;
        position: absolute;
        bottom: 60%;
        left: 0;
        right: 0;
    }

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
            color: $main;
        }
    }
}

//SECTION CONTACT US
#contact-us {
    height: 600px;
    background-color: $greywhite;

    form {
        color: $grey;
    }

    .world-location {
        background-image: url(../assets/img/h1-contact-rev-01.png);
        background-repeat: no-repeat;
        background-position: center;

        height: 100%;
        position: relative;

        .location {
            position: absolute;

            &.america {
                top: 43%;
                left: 23%;
            }

            &.europe {
                top: 35%;
                left: 50%;
            }

            &.australia {
                top: 62%;
                left: 83%;
            }

            &.label {
                top: 48%;
                left: 18%;
                background-color: $white;
                padding: 10px 30px;

                h4 {
                    font-weight: 600;
                    font-family: 'Playfair Display', serif;
                }
            }


        }

    }

}

//SECTION BRANDS
#brands {
    height: 300px;
    background-color: $greywhite;


}
</style>