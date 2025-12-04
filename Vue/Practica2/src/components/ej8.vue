<script setup>
import { reactive } from 'vue';

let estados = ['Pendiente', 'Completado', 'Terminado']

let tareas = reactive([
    { id: 1, titulo: 'Tarea1', estado: estados[0] },
    { id: 2, titulo: 'Tarea2', estado: estados[0] },
    { id: 3, titulo: 'Tarea3', estado: estados[0] },
    { id: 4, titulo: 'Tarea4', estado: estados[0] }
])

function actualizar(id) {
    const tarea = tareas.find(t => t.id === id)

    tarea.estado =
        tarea.estado === estados[0] ? estados[1] :
            tarea.estado === estados[1] ? estados[2] :
                null
}
</script>

<template>
    <ul>
        <li v-for="tarea in tareas" :key="tarea.id" @dblclick="actualizar(tarea.id)"
            :class="tarea.estado === estados[2] ? 'terminada' : ''">
            {{ tarea.titulo }} -
            <span :class="tarea.estado === estados[0] ? 'pendiente' : ''">
                {{ tarea.estado }}
            </span>
        </li>
    </ul>
</template>

<style scoped>
li {
    cursor: pointer;
    user-select: none;
}

.pendiente {
    font-style: italic;
}

.terminada {
    display: none;
}
</style>
