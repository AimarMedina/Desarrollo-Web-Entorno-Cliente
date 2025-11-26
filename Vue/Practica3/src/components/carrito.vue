<script setup>
import { ref, watch } from 'vue'
import Producto from './producto.vue'

let carrito = ref([])

const props = defineProps({
    producto: Object
})

// Cada vez que llega un nuevo producto, lo añadimos al carrito:
watch(() => props.producto, (nuevoProducto) => {
    if (nuevoProducto) {
        if (!carrito.value.find(p => p.id === nuevoProducto.id)){
            nuevoProducto.cantidad = 1
            carrito.value.push(nuevoProducto)
        }else{
            let productoExistente = carrito.value.find(p => p.id === nuevoProducto.id)
            productoExistente.cantidad += 1
        }
    }
})

let eliminarProducto = (id) => {
    carrito.value.find(p => p.id == id).cantidad--
    let indexProducto = carrito.value.findIndex(p => p.id == id)
    if (indexProducto !== -1 && carrito.value[indexProducto].cantidad <= 0){
        carrito.value.splice(indexProducto, 1)
    }
}
</script>

<template>
    <h3>Carrito</h3>
    <ul>
        <li v-for="p in carrito" :key="p.id">
            <Producto :producto="p" />
            <input type="text" v-model="p.cantidad">
            <button @click="eliminarProducto(p.id)">Eliminar</button>
        </li>
    </ul>
    <p>Total: {{ carrito.reduce((total, p) => total + p.precio * p.cantidad, 0) }}€</p>
</template>
