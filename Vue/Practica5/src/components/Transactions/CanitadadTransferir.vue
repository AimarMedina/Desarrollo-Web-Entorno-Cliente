<script setup>
import { ref, watch } from 'vue';

let emit = defineEmits(['definirCantidad','transferir'])
let cantidad = ref(0)
let cantidadNoValida = ref(false);
watch(cantidad, (nueva) => {
    emit('definirCantidad',nueva)
})

let transferir = ()=>{
    if(cantidad.value>0){
        cantidadNoValida.value = false
        emit('transferir')
    }
    else{
        cantidadNoValida.value = true
    }
}
</script>

<template>
    <h2>Cantidad a transferir</h2>
    <div class="cantidad">
        <input type="number" min="0" v-model="cantidad">
        <div class="mensajeAdvertencia" v-if="cantidadNoValida">
            <p>Cantidad no válida</p>
        </div>
        <button @click="transferir">Terminar</button>
    </div>
</template>

<style scoped>
    .cantidad {
    display: flex;
    flex-direction: column;
    gap: 15px;
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
    .mensajeAdvertencia {

    display: flex;
    align-items: center;
    flex-direction: column;
    }
    p{
        font-size: 0.95rem;
        color: #555;              /* gris oscuro, legible pero suave */
        background-color: #ffe1e1; /* fondo amarillo suave para aviso */
        border: 1px solid #ff8a8a; /* borde amarillo claro */
        padding: 8px 12px;
        border-radius: 4px;
        margin-top: 10px;
    }
</style>
