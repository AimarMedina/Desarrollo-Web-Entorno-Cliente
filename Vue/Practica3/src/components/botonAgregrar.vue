<script setup>
    let emit = defineEmits(['agregar'])
</script>

<template>
    <button @click="emit('agregar')">Agregar</button>
</template>
