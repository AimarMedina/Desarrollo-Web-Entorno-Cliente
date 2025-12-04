<script setup>
    import listaProductos from './components/listaProductos.vue'
    import carrito from './components/carrito.vue'
    import { provide, ref } from 'vue'

    let productos = [
        { id: 1, nombre: 'Portátil', precio: 800 },
        { id: 2, nombre: 'Ratón', precio: 20 },
        { id: 3, nombre: 'Teclado', precio: 30 },
        {id: 4, nombre: 'Monitor', precio: 150 }
    ]

    provide('productos',productos)

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
