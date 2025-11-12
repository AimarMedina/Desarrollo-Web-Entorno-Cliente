<script setup>

import { ref } from "vue";

    let nombre = ref('')

    function actualizar(){
        nombre.value = event.target.value
    }
    
</script>

<template>
    <input type="text" placeholder="Tu nombre" @input="actualizar">
    <p>Normal: {{ nombre }}</p>
    <p>En mayusculas: {{ nombre.toUpperCase() }}</p>
</template>