<script setup>
    import {ref} from 'vue'
    let contador = ref(0)
</script>

<template>
    <h1>Contador: {{ contador }}</h1>
    <button @click="contador++">Incrementar</button>
    <button @click="contador--">Dencrementar</button>
    <button @click="contador=0">Resetear</button>
</template>