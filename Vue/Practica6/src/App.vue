<script setup>
  import { ref, watch } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
  import { useAuthStore } from '@/stores/auth'

  const auth = useAuthStore()

</script>

<template>
  <header>
    <nav>
      <router-link to="/">Inicio</router-link>
      <div class="soloLogueados" v-if="auth.usuario">
        <router-link to="/misPedidos">Mis pedidos</router-link>
      </div>
    </nav>
    <div  >
      <router-link to="/login" v-if="!auth.usuario">Iniciar Sesión</router-link>
      <div v-if="auth.usuario" class="otrasCosas">
        <span>¡Bienvenido, {{ auth.usuario.nombre }}!</span>
        <router-link to="/" @click="auth.logout">Cerrar Sesión</router-link>
      </div>
    </div>
  </header>

  <main>
    <router-view :nombreUsuario="auth.usuario?.nombre"></router-view>
  </main>

  <footer>
    <hr>
    <p>&copy; 2025 Sistema de Pedidos - Todos los derechos reservados</p>
  </footer>
</template>


<style scoped></style>
