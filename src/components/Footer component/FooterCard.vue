<script>
export default {
    name: 'FooterCard',
    props: {
        element: Object,
    }
}
</script>

<template>
    <!-- FOOTER CARD -->
    <div class="footer-card">

        <h5>{{ element.title }}</h5>
        <div class="divider">____</div>
        <ul>
            <!-- FOOTER LIST ELEMENT -->
            <li v-for="link in element.links" :key="link.id"><a href="#" class="d-flex ">
                    <font-awesome-icon :icon="link.icon" class="icon p-1" />
                    <span class="px-2">{{ link.text }}</span>
                </a></li>
        </ul>
        <p class="py-3">{{ element.text }}</p>
        <!-- ADDITIONAL MARK UP SLOT -->
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

//CARD STYLE
.divider {
    color: $main;
}

h5 {
    color: $white;
    font-family: 'Playfair Display', serif;
}

//LIST STYLE
ul {
    margin: 10px 0;

    li {
        padding: 3px 0;

        a {
            color: $grey;
            font-size: 14px;

            &:hover {
                color: $white;
            }

            .icon {
                color: $main;
                font-size: 18px;
            }
        }
    }
}
</style>