<script setup>
import { ref } from 'vue';

    
    let isRed = ref(true)

    function toggleColor(){
        isRed.value = !isRed.value
    }

</script>

<template>
    <p :class="isRed ? 'blue' : 'red'">Hola</p>
    <button @click="toggleColor">cambiar color</button>
</template>

<style scoped>
    .blue{
        color: blue;
    }
    .red{
        color: red;
    }
</style>