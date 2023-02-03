<script>
//IMPORT COMPONENT
import GenericButton from '../app_generic/GenericButton.vue';
export default {
    name: 'CalendarCard',
    components: { GenericButton },
    props: {
        event: Object,
    }
}
</script>

<template>
    <!-- CALENDAR CARD -->
    <div class="calendar-card py-4">
        <div class="row d-flex">
            <!-- EVIDENCE DATE SQUARE -->
            <div class="col-3 px-4">
                <div class="evidence-date text-center">
                    <div class="fs-5 fw-bold">{{ event.day }}</div>
                    <span>{{ event.month }},{{ event.year }}</span>
                </div>
            </div>
            <div class="col">
                <!-- DATE INFO -->
                <div class="date-info">
                    <h5>{{ event.location }} Coaching</h5>
                    <div class="my-2">
                        <div class="d-flex">
                            <font-awesome-icon icon="fa-regular fa-clock" class="icon" />
                            <span>{{ event.start }} - {{ event.end }},{{ event.month }} {{ event.day }},{{
                                event.year
                            }}</span>
                        </div>
                        <div class="d-flex">
                            <font-awesome-icon icon="fa-solid fa-location-dot" class="icon " />
                            <span>{{ event.adress }}</span>
                        </div>
                    </div>
                    <generic-button text="READ MORE"></generic-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.calendar-card {
    padding: 20px;
    box-shadow: 1px 1px 5px #888888;
    font-family: 'Playfair Display', serif;

    //DATE INFO LAYOUT
    .date-info {
        color: $grey;
        font-weight: 100;

        h5 {
            font-weight: 700;
            padding: 3px 0;
            padding-top: 0;
            color: $black;

            &:hover {
                color: $main;
            }
        }

        .icon {
            color: $main ;
            font-weight: 100;
            padding: 5px 10px;
            width: 12px;
        }


    }

    //EVIDENCE DATE SQUARE
    .evidence-date {
        min-height: 50px;
        min-width: 50px;
        background-color: $main;
        color: $white;
        padding: 3px 0;
        font-family: 'Playfair Display', serif;

        span {
            font-size: 13px;
            font-weight: 100;
        }
    }



}
</style>