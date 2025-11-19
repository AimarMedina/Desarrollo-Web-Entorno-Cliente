<script setup>
import { ref } from 'vue'


let isVisible = ref(true)

function toggleStyle (){
    isVisible.value = !isVisible.value
}

let ocultar = 'display: none'
let mostrar = 'display: block'

</script>

<template>
    <button @click="toggleStyle">Mostrar/Ocultar Mensaje</button>
    <p :style="isVisible ? mostrar : ocultar">¡Hola, este es un mensaje!</p>
</template>