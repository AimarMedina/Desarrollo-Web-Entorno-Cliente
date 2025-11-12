<script setup>
    import { ref } from "vue";
    let productos = ref(
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
    let total = ref(0)
    productos.value.forEach(producto => {
        total.value += producto.precio
    });
</script>

<template>
    <h3>Carrito</h3>
    <ul>
        <li v-for="t in productos">{{t.nombre}} - ${{ t.precio }}</li>
    </ul>
    <p>Total: ${{ total }}</p>
</template>