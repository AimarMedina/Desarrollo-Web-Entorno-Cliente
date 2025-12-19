<script setup>
    const props = defineProps({
        pedido: Object
    })
</script>

<template>
    <div class="pedido">
        <h3>{{ pedido.nombre }}</h3>
        <img :src="pedido.imagen" alt="">
        <p>Cantidad: <span>{{ pedido.cantidad }}</span></p>
        <p>Total a pagar: <span>{{ pedido.precio_venta*pedido.cantidad }} €</span></p>
        <p>Fecha: <span> {{ pedido.fecha }}</span></p>
        <span class="pill">{{ pedido.categoria }}</span>
    </div>
</template>

