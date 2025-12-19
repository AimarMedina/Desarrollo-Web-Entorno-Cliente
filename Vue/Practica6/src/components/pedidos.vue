<script setup>
import { usePedidosUsuarioStore } from '@/stores/pedidosUsuario'
import { useAuthStore } from '@/stores/auth'
import { useProductosStore } from '@/stores/productos'
import { computed } from 'vue';

import pedido from './pedido.vue';

const pedidosDisponibles = usePedidosUsuarioStore()
const productosDisponibles = useProductosStore()
const auth = useAuthStore()

const pedidosUsuario = computed(() => {
    const pedidosArray = []

    const pedidosDelUsuario = pedidosDisponibles.pedidos.filter(
        p => p.idUsuario === auth.usuario.id
    )

    pedidosDelUsuario.forEach(pedido => {
        const producto = productosDisponibles.productos.find(
            p => p.id === pedido.idProducto
        )

        if (producto) {
            // Creamos un nuevo objeto para este pedido
            pedidosArray.push({
                ...producto,          // propiedades del producto
                cantidad: pedido.cantidad,
                fecha: pedido.fecha,
                idPedido: pedido.id   // <--- usamos id del pedido para diferenciar
            })
        }
    })

    return pedidosArray
})


console.log(pedidosUsuario.value);
</script>

<template>
    <div id="productos" v-if="pedidosUsuario.length > 0">
        <pedido v-for="pedido in pedidosUsuario" :pedido="pedido"></pedido>
    </div>
    <div v-else>
        <p>No hay pedidos.</p>
    </div>
</template>
