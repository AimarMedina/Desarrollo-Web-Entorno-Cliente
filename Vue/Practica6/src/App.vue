<script setup>
  import { RouterLink,RouterView } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Inicio</router-link>
    </nav>
    <router-view></router-view>
  </div>

    <footer>
    <hr>
    <p>&copy; 2025 Sistema de Pedidos - Todos los derechos reservados</p>
  </footer>
</template>


<style scoped></style>
