<script setup>

const props = defineProps({
    lista: Array
})

</script>
<template>
    <h3>Mostrar productos de la lista.</h3>
    <slot name="lista">
        
    </slot>
</template>
