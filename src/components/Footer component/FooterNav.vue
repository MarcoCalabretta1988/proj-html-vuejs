<script>
import { footerNavLinks, contacts, twitterMsg } from '../../data';
import AppFormInput from '../App generic/AppFormInput.vue';

export default {
    name: 'FooterNav',
    data: () => ({ footerNavLinks, contacts, twitterMsg, }),
    components: { AppFormInput }

}
</script>

<template>
    <section id="footer-top" class="container">
        <div class="row  row-col-4 h-100">
            <div class="col about">
                <h5>About</h5>
                <div class="divider">____</div>
                <p class="py-3">we created EverLoad to effectively become the stepping stone towards meeting all your
                    goals &
                    achieving business succes</p>
                <div class="social-ico">
                    <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-square-twitter" /></a>
                </div>
            </div>
            <div class="col twitter">
                <h5>Twitter</h5>
                <div class="divider">____</div>
                <ul>
                    <li v-for="tweet in twitterMsg"><a href="#" class="d-flex"><font-awesome-icon
                                icon="fa-brands fa-twitter" class="icon pe-2 pt-2 " /> {{ tweet }}</a></li>
                </ul>
            </div>
            <div class="col important-links">
                <h5>Important links</h5>
                <div class="divider">____</div>
                <ul>
                    <li v-for="link in footerNavLinks" :key="link"><a href="#">{{ link }}</a></li>
                </ul>
            </div>


            <div class="col contacts">
                <h5>Contact me</h5>
                <div class="divider">____</div>
                <ul>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-location-dot" class="icon" /> {{
                        contacts.adress
                    }}</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-phone" class="icon" /> {{
                        contacts.phone
                    }}</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-regular fa-envelope" class="icon" /> {{
                        contacts.mail
                    }}</a></li>
                </ul>
                <form class="input-group mb-3" @submit.prevent="$emit('form-submit')">
                    <app-form-input type="text" placeholder="Your name"
                        @term-change="$emit('term-change', $event)"></app-form-input>
                    <button class="btn btn-outline-secondary" type="button">SUBSCRIBE</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

#footer-top {
    height: 510px;
    color: $grey;
    font-size: 14px;




    button {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid $grey;
        border-radius: 0;
        color: $white;

    }

    .col {
        padding: 130px 15px;

        h5 {
            color: $white;

            font-family: 'Playfair Display', serif;
        }

        .divider {
            color: $orange;
        }

        ul {
            margin: 10px 0;

            li {
                padding: 3px 0;

                a {
                    color: $grey;
                    font-size: 14px;

                    .icon {
                        color: $orange;
                        font-size: 18px;
                    }
                }
            }
        }

    }

    .social-ico * {
        color: $white;
        padding: 0 5px;
        font-size: 25px;
    }

}
</style>