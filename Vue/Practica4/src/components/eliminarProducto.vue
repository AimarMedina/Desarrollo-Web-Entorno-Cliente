<script setup>
    import accionesProductoEliminar from './accionesProductoEliminar.vue'
    const emit  = defineEmits(['eliminar'])

    const eliminar = (producto) =>{
        emit('eliminar',producto)
    }

</script>

<template>
    <h3>Agregar un producto a la lista de la compra.</h3>
    <p>Producto a eliminar: <accionesProductoEliminar @eliminar="eliminar"></accionesProductoEliminar></p>
</template>
