<script setup>
import { useProductosStore } from '@/stores/productos'
import { useAuthStore } from '@/stores/auth'
import { usePedidosUsuarioStore } from '@/stores/pedidosUsuario'
import Producto from './producto.vue'
import { reactive } from 'vue'

const productosDisponibles = useProductosStore()
const auth = useAuthStore()
const pedidos = usePedidosUsuarioStore()
// Creamos un objeto con la cantidad de cada producto
const cantidades = reactive({})

productosDisponibles.productos.forEach(p => {
  cantidades[p.id] = 1
})

const sumar = (id) => {
  cantidades[id]++
}

const restar = (id) => {
  if(cantidades[id] > 0) cantidades[id]--
}

const pedir = (idProducto,cantidad) => {
  if(cantidad>0){
    let fecha = new Date()
    let año = fecha.getFullYear()
    let mes = String(fecha.getMonth()+1).padStart(2,'0')
    let dia = String(fecha.getDay()).padStart(2,'0')
    const nuevoPedido = {
      id: pedidos.pedidos.length+1,
      idUsuario: auth.usuario.id,
      idProducto: idProducto,
      cantidad: cantidad,
      fecha: `${año}-${mes}-${dia}`
    }

    pedidos.agregarPedido(nuevoPedido)
    cantidades[idProducto] = 1
  }
}
</script>

<template>
  <div id="productos">
    <Producto
      v-for="producto in productosDisponibles.productos"
      :producto="producto"
    >
      <template #pedir v-if="auth.usuario">
        <div class="cantidad">
          <button @click="sumar(producto.id)" class="btn btn-cantidad">+</button>
          <input type="number" v-model="cantidades[producto.id]" min="1">
          <button @click="restar(producto.id)" class="btn btn-cantidad">-</button>
        </div>
        <button @click="pedir(producto.id,cantidades[producto.id])">Pedir</button>
      </template>
    </Producto>
  </div>
</template>
