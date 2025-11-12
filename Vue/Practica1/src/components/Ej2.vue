<script setup>
    import {ref} from 'vue'
    let texto = ref('')
    function actualzar(){
        texto.value = event.target.value
    }
</script>

<template>
    <input type="text" @input="actualzar">
    <h3>Has escrito: {{ texto }}</h3>
</template>