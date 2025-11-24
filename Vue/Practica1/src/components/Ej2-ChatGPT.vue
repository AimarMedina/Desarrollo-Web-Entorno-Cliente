<script setup>

import { ref } from 'vue'
let tareas = ref(
    []
)

function añadirTarea() {

    let tarea = prompt("Escribe la tarea a realizar")

    tareas.value.push(tarea)

}

function eliminar(indice) {
    tareas.value.splice(indice,1)
}
</script>

<template>
    <h3>Mis tareas ({{ tareas.length }})</h3>
    <ul>
        <li v-for="t,i in tareas">{{ t }} <span class="eliminar" @click="eliminar(i)">🗑️</span></li>
    </ul>
    <div class="buttons">
        <button @click="añadirTarea">Añadir tarea</button>
        <button @click="tareas = []">Eliminar tareas</button>
    </div>
</template>

<style scoped>

.eliminar {
    border: none;
    cursor: pointer;
}
ul{
    list-style-type: none;
}

.buttons {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

</style>
