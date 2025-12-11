<script setup>
import { ref } from 'vue';

let emit = defineEmits(['definirCantidad'])
let cantidad = ref(0)

let defifiniCantidad = ()=>{
    if(cantidad>0)
    emit('definirCantidad',cantidad)
}
</script>

<template>
    <h2>Cantidad a transferir</h2>
    <div class="cantidad">
        <input type="number" min="0" v-model="cantidad">
        <button @click="definirCantidad">Terminar</button>
    </div>
</template>

<style scoped>
    .cantidad {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    align-items: center;
    }

    .cantidad input[type="number"] {
    width: 200px;
    padding: 10px 14px;
    font-size: 1rem;
    border: 2px solid #0077ff;
    border-radius: 8px;
    outline: none;
    transition: all 0.3s ease;
    }

    .cantidad input[type="number"]:focus {
    border-color: #005fcc;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    }

    .cantidad button {
    width: 200px;
    background-color: #0077ff;
    color: #fff;
    padding: 10px 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.2s;
    }

    .cantidad button:hover {
    background-color: #005fcc;
    transform: translateY(-2px);
    }

    .cantidad button:active {
    transform: translateY(0);
    }

</style>
