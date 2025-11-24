<script setup>
    import { ref } from 'vue'
    let nombre = ref('')
    let apellido = ref('')
</script>

<template>
    <h3>Tu nombre completo es: {{ nombre }} {{ apellido }}</h3>
</template>
