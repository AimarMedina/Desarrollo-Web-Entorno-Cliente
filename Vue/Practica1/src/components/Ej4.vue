<script setup>

import {ref} from 'vue'
let tareas = ref(
    []
)

function añadirTarea(){
    
    let tarea = prompt("Escribe la tarea a realizar")

    tareas.value.push(tarea)

}

</script>

<template>
    <h3>Mis tareas ({{ tareas.length }})</h3>
    <ul>
        <li v-for="t in tareas">{{ t }}</li>
    </ul>
    <button @click="añadirTarea">Añadir tarea</button>
</template>