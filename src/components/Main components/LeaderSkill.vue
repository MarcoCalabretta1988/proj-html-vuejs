<script>
export default {
    name: 'LeaderSkill',
    props: {
        title: String,
        percentual: String,
        skill: String
    }
}
</script>

<template>
    <div class="d-flex justify-content-between">
        <h4>{{ title }}</h4>
        <div>{{ percentual }}</div>
    </div>
    <span class="progress-bar">
        <div class="bar">
            <div class="bar-progress" :class="skill"></div>
        </div>
    </span>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

h4 {
    font-family: 'Playfair Display', serif;
}

.progress-bar {

    .bar {
        position: relative;
        height: 4px;
        background-color: $orange;
    }

    .bar-progress {
        background-color: $lightgrey;
        height: 4px;
        position: absolute;
        top: 0;
        right: 0;

        &.mentorship {
            left: 78%;
        }

        &.education {
            left: 95%;
        }

        &.learning {
            left: 65%;
        }

        &.motivation {
            left: 83%;
        }
    }
}
</style>