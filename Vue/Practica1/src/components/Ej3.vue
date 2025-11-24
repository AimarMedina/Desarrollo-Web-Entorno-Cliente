<script setup>

    import {reactive, ref} from 'vue'
    let persona = reactive(
        {
            'nombre': 'Ana',
            'edad': 25,
            'email': 'ana@example.com'
        }
    )

    function cumplir(){
        persona.edad++
    }
</script>

<template>
    <h3>{{ persona['nombre'] }} ({{ persona['edad'] }})</h3>
    <p>{{ persona['email'] }}</p>
    <button @click="cumplir">Cumplir años</button>
</template>

<style scoped>
    button{
        margin-top: 10px;
        padding: 5px 10px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;
        border: none;
    }
</style>
