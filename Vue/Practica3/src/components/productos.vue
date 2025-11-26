<script setup>
    import { reactive } from 'vue'
    import botonAgregrar from './botonAgregrar.vue'
    import producto from './producto.vue'

    let productos = reactive([
        { id: 1, nombre: 'Portátil', precio: 800 },
        { id: 2, nombre: 'Ratón', precio: 20 },
        { id: 3, nombre: 'Teclado', precio: 30 },
        {id: 4, nombre: 'Monitor', precio: 150 }
    ])
    let emit = defineEmits(['añadir'])
    let añadirCarrito = (producto) => {
        emit('añadir', {...producto})
    }
</script>

<template>
    <ul>
        <li v-for="producto in productos" :key="producto.id">
            <producto :producto="producto"></producto>
            <span>
                <botonAgregrar @agregar="añadirCarrito(producto)" />
            </span>
        </li>
    </ul>
</template>
