<script setup>
    let enlace = 'https://www.instagram.com'
    let enlaceClass = 'enlace'
    let cabeceraClass = 'gris'
    let parrafoStyle = 'color: blue'


</script>

<template>
    <h2 :class="cabeceraClass">Practica con v-bind</h2>
    <p :style="parrafoStyle">Este es un ejemplo práctico con v-bind en Vue 3</p>
    <a :href="enlace" :class="enlaceClass">Ir a instagram</a>
</template>

<style scoped>
    .gris{
        color: rgb(163, 163, 163);
    }
    .enlace{
        color: white;
        text-decoration: none;
    }
</style>