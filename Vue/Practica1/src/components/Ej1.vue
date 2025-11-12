<script setup>
    import {ref} from 'vue'
    let contador = ref(0)
</script>

<template>
    <h3>Contador: {{ contador }}</h3>
    <button @click="contador++">Incrementar</button>
    <button @click="contador--">Dencrementar</button>
    <button @click="contador=0">Resetear</button>
</template>