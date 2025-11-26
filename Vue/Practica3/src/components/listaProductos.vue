<script setup>
    import productos from './productos.vue'

    let emit = defineEmits(['añadir'])
    let añadirAlCarrito = (producto) => {
        emit('añadir', producto)
    }
</script>

<template>
    <h3>Productos</h3>
    <productos @añadir="añadirAlCarrito"/>
</template>
