<script setup>
import { computed, ref } from 'vue';


let mensaje = ref('')
let longitud = computed(()=>{
    return mensaje.value.length
})

</script>

<template>
    <h3>Mensaje: {{ mensaje }}</h3>
    <input type="text" v-model="mensaje">
    <p>Longitud del mensaje: {{ longitud }}</p>
</template>

<style scoped>

</style>