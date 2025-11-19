<script setup>
import { ref } from 'vue';


let contador = ref(0)


</script>

<template>
    <p>El contador es 
        <span v-if="contador == 0">igual a cero</span>
        <span v-else-if="contador>0">positivo</span>
        <span v-else>negativo</span>
    </p>
    
    <button @click="contador++">Incrementar</button>
    <button @click="contador--">Decrementar</button>
</template>