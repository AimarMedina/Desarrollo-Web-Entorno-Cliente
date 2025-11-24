<script setup>
    import {ref} from 'vue'
    let tareas = ref(
        []
    )
    function añadirTarea(){
        let tarea = prompt("Escribe la tarea a realizar")
        if(!tarea){
            alert("No has escrito ninguna tarea")
        }else{
            tareas.value.push(tarea)
        }

    }
</script>

<template>
    <h3>Mis tareas ({{ tareas.length }})</h3>
    <ul>
        <li v-for="t in tareas">{{ t }}</li>
    </ul>
    <div class="buttons">
        <button @click="añadirTarea">Añadir tarea</button>
        <button @click="tareas = []">Eliminar tareas</button>
    </div>

</template>

<style scoped>
    ul{
        list-style-type: none;
    }
    .buttons{
    margin-top: 10px;
    display: flex;
    gap: 10px;
    & button{
        padding: 5px 10px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;
        border: none;
    }
  }
</style>
