<script setup>

    const props = defineProps({
        producto: Object
    })

</script>

<template>
        {{ props.producto.nombre }} - {{ props.producto.precio }} €
</template>
