<script setup>
    import {ref} from 'vue'
    let texto = ref('')
</script>

<template>
    <input type="text" v-model="texto">
    <h3>Has escrito: {{ texto }}</h3>
</template>
