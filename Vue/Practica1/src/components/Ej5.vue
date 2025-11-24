<script setup>

import { ref,computed } from "vue";

    let nombre = ref('')

    let nombreMayus = computed( ()=>{
        return (nombre.value || ' ').toUpperCase()
    } )

</script>

<template>
    <input type="text" placeholder="Tu nombre" @input="e => nombre = e.target.value">
    <p>Normal: {{ nombre }}</p>
    <p>En mayusculas: {{ nombreMayus }}</p>
</template>
