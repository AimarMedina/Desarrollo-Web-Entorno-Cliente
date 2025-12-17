<script setup>
    import { productos } from '@/stores/productos'
    import  producto from './producto.vue';
    const productosDisponibles = productos()
</script>

<template>
    <div id="productos" >
        <producto v-for="producto in productosDisponibles.productos" :producto="producto"></producto>
    </div>
</template>