<script setup>
import productos from '@/components/productos.vue';


</script>
<template>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página de Inicio - Sistema de Pedidos</title>
</head>
<body>
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

</body>
</html>

</template>