<script setup>

</script>

<template>
    <h2>Mis cuentas</h2>
    <slot name="cuentas">

    </slot>
</template>

<style scoped>
    /* Título de la sección */


        /* Slot adicional */
        slot[name="cuentas"] {
        display: block;
        margin-top: 20px;
        }

</style>
