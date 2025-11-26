<script setup>
    import listaProductos from './components/listaProductos.vue'
    import carrito from './components/carrito.vue'
    import { ref } from 'vue'

    const productoElegido = ref()
    const datos = (producto) => {
        productoElegido.value = producto
    }
</script>

<template>
    <h1>Tienda de informática EGIBIDE-ARRIAGA</h1>
    <listaProductos @añadir="datos"></listaProductos>
    <carrito :producto="productoElegido"></carrito>
</template>

<style scoped></style>
