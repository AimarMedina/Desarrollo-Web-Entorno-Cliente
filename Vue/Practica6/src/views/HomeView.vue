<script setup>
import productos from '@/components/productos.vue';


</script>
<template>

  <!-- Banner de bienvenida -->
  <section>
    <h1>Bienvenido al Sistema de Pedidos</h1>
    <p>Explora nuestros productos y realiza tus pedidos de manera rápida y sencilla.</p>
  </section>

  <!-- Productos disponibles -->
  <section>
    <h2>Productos Disponibles</h2>

    <productos></productos>
  </section>

  <!-- Mensaje final -->
  <section>
    <p>Selecciona los productos que deseas y realiza tu pedido. ¡Disfruta de tu experiencia!</p>
  </section>

</template>
