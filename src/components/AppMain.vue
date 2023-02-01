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
        <section id="specialties" class="py-5 text-center">
            <div class="specialties-title">
                <section-title title="Our specialties" divPosition="center"
                    text="lorem ipsum dolor sit amet,consectetur adipiscing elit"></section-title>
            </div>
            <div class="container">
                <div class="row row-cols-4 py-5 g-2">
                    <specialties-card v-for="(specialty, i) in specialtiesOption" :key="specialty.id"
                        :specialty="specialty" :index="i"></specialties-card>
                </div>
            </div>
        </section>
        <section id="founder">
            <div class="container">
                <img src="" alt="Founder Interview">
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    min-height: 100vh;
}

#specialties {
    position: absolute;
    bottom: 45%;
    left: 5%;
    right: 5%;
    background-color: $white;

    .specialties-title {
        display: flex;
        justify-content: center;
    }
}

#founder {
    background-color: $greywhite;
    padding-top: 500px
}
</style>