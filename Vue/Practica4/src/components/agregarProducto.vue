<script setup>
    import AccionesProducto from './accionesProductoAgregar.vue';

    const emit  = defineEmits(['agregar'])

    const agregar = (producto) => {
        emit('agregar',producto)
    }

</script>

<template>
    <h3>Agregar un producto a la lista de la compra.</h3>
    <p>Nuevo producto: <AccionesProducto @agregar="agregar"></AccionesProducto></p>
</template>
