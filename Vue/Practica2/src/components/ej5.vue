<script setup>
import { ref } from 'vue';

    
    let datos = ref([])
</script>

<template>
    <ul v-if="datos.length > 0">
        <li v-for="(elemento,index) in datos " :key=index>{{ elemento }}</li>
    </ul>
    <p v-else>No hay elementos en el array</p>
</template>