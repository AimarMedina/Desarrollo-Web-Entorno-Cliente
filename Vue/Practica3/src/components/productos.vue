<script setup>
    import { inject, reactive } from 'vue'
    import botonAgregrar from './botonAgregrar.vue'
    import producto from './producto.vue'

    const productos = inject('productos')

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
