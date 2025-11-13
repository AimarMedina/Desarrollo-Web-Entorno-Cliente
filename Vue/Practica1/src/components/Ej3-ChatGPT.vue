<script setup>
    import { computed, reactive, ref } from "vue";
    let productos = reactive(
        [
            {
                'id': 1,
                'nombre': 'Libro',
                'precio': 15,
                'cantidad': 5
            },
            {
                'id': 2,
                'nombre': 'Café',
                'precio': 3.02,
                'cantidad': 5
            },
            {
                'id': 3,
                'nombre': 'Bolígrafo',
                'precio': 2,
                'cantidad': 5
            },
            {
                'id': 4,
                'nombre': 'Dildo',
                'precio': 10,
                'cantidad': 5
            },
        ]
    )
    let total = computed(()=>{
        return productos.reduce((sumaTotal,producto)=> sumaTotal + producto.precio * producto.cantidad,0)
    })


    function sumar(id){
        let p = productos.find(producto=> producto.id === id)
        if(p) p.cantidad++
    }
    function restar(id){
        let p = productos.find(producto=> producto.id === id)
        if(p && p.cantidad>0) p.cantidad--
    }
</script>

<template>
    <h3>Carrito</h3>
    <ul>
        <li v-for="t in productos">{{t.nombre}} - ${{ t.precio }} - {{ t.cantidad }} uds <button class="sumar" @click="sumar(t.id)">+</button><button class="restar" @click="restar(t.id)" :disabled="t.cantidad === 0">-</button></li>
    </ul>
    <p>Total: ${{ total.toFixed(2) }}</p>
</template>