<script setup>
  import { RouterLink,RouterView } from 'vue-router';
  import { ref,provide } from 'vue';
  import { useUsersStore } from '@/stores/users';

  let usuarioRegistrado = ref(obtenerUsuarioRegistrado())

  let guardarSesion = (usuario) => {
    const usuarioGuardar = {
      id: usuario.id,
      name: usuario.name,
      cuentas: usuario.cuentas
    }

    localStorage.setItem('usuario', JSON.stringify(usuarioGuardar))
    usuarioRegistrado.value = usuarioGuardar
  }


  let cerrarSesion = () => {
    localStorage.removeItem('usuario')
    usuarioRegistrado.value = null
  }

  function obtenerUsuarioRegistrado() {
    return JSON.parse(localStorage.getItem('usuario'))
  }

if(usuarioRegistrado.value){
  const movimientosUsuario = useUsersStore().movimientosUsuarios.find(
    movimiento => movimiento.idUsuario == usuarioRegistrado.value.id
  )

  provide('movimientos', movimientosUsuario?.movimientos || []);

}


</script>

<template>
  <header>
    <div class="logo">
      <RouterLink to="/">
        <img src="../public/logo.png" alt="">
      </RouterLink>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <div class="accionesUsuario" v-if="usuarioRegistrado">
        <RouterLink to="/consultas">Consultas</RouterLink>
        <RouterLink to="/transacciones">Transacciones</RouterLink>
        <RouterLink to="/" @click="cerrarSesion">Cerrar sesión</RouterLink>
      </div>
    </nav>
  </header>
  <RouterView @iniciarSesion="guardarSesion" :usuarioRegistrado="usuarioRegistrado"/>
</template>

<style scoped>
  header {
  padding: 15px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Logo */
.logo img {
  height: 50px;
  width: auto;
}

/* Nav */
nav,.accionesUsuario {
  display: flex;
  gap: 25px;
}

nav a {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #0077ff;
}

/* Responsive */
@media (max-width: 768px) {
  header {
    padding: 10px 20px;
  }

  nav {
    gap: 15px;
  }

  .logo img {
    height: 40px;
  }
}

</style>
