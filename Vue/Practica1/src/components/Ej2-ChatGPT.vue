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
        <li v-for="t,i in tareas">{{ t }} <span class="eliminar" @click="eliminar(i)">X</span></li>
    </ul>
    <button @click="añadirTarea">Añadir tarea</button>
</template>

<style scoped>
* {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

.eliminar {
    border: none;
    padding: 2px 6px;
    font-size: 10px;
    border-radius: 10px;
    background-color: red;
    color: white;
    cursor: pointer;
}
</style>