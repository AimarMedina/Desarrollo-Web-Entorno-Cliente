<script setup>
    import { computed, reactive, ref } from "vue";
    let productos = reactive(
        [
            {
                'nombre': 'Libro',
                'precio': 15
            },
            {
                'nombre': 'Café',
                'precio': 3
            },
            {
                'nombre': 'Bolígrafo',
                'precio': 2
            },
            {
                'nombre': 'Dildo',
                'precio': 10
            },
        ]
    )
    let total = computed(() => {
        return productos.reduce((suma, producto) => suma + producto.precio,0)
    })
</script>

<template>
    <h3>Carrito</h3>
    <ul>
        <li v-for="t in productos">{{t.nombre}} - ${{ t.precio }}</li>
    </ul>
    <p><strong>Total</strong>: ${{ total }}</p>
</template>

<style scoped>

ul{
    text-align: left;
}

</style>
