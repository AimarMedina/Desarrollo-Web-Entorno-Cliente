<script setup>
    import { pedidosUsuario } from '@/stores/pedidosUsuario'
    import  {pedido} from './pedidos.vue';
    import {authStore} from '@/stores/auth'
    const pedidos = pedidosUsuario()
    const auth = authStore()
    let pedidosUsuario = pedidos.filter(p => p.idUsuario == auth.usuario.id)
</script>

<template>
    <div id="productos" >
        <producto v-for="producto in productosDisponibles.productos" :producto="producto"></producto>
    </div>
</template>
