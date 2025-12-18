<script setup>
    const props = defineProps({
        producto: Object
    })

</script>

<template>
    <div class="producto">
        <h3>{{ producto.nombre }}</h3>
        <img :src=" producto.imagen " alt="">
        <p>Precio: <span>{{ producto.precio_venta }} €</span></p>
        <span class="pill">{{ producto.categoria }}</span>
    </div>
</template>

<style>

</style>
