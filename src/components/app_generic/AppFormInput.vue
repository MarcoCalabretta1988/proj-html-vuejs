<script>
export default {
    name: 'AppFormInput',
    data: () => ({ FormText: '' }),
    props: {
        type: String,
        placeholder: String
    }
}
</script>

<template>
    <input :type="type" class="form-control " :placeholder="placeholder || 'Cerca'" v-model.trim="FormText"
        @keyup="$emit('term-change', FormText)">
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

input {
    background-color: transparent;
    border: none;
    color: $grey;
    border-bottom: 1px solid $grey;
    border-radius: 0;
    font-size: 14px;


    &::placeholder {
        color: $grey;
    }
}
</style>
