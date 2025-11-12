<script setup>

    import {ref} from 'vue'
    let persona = ref(
        {
            'nombre': 'Ana',
            'edad': 25,
            'email': 'ana@example.com'
        }
    )

    function cumplir(){
        persona.value.edad++
    }
</script>

<template>
    <h3>{{ persona['nombre'] }} ({{ persona['edad'] }})</h3>
    <p>{{ persona['email'] }}</p>
    <button @click="cumplir">Cumplir años</button>
</template>