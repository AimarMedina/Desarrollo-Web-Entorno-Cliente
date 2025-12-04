

  <script setup>
  import { ref } from 'vue';

  const mensajes = ref([
    { texto: 'Mensaje 1', editando: false },
    { texto: 'Mensaje 2', editando: false },
    { texto: 'Mensaje 3', editando: false },
  ]);

  const iniciarEdicion = (index) => {
    console.log("Iniciando edición del mensaje" + index);
    mensajes.value[index].editando = true;
  };

  const finalizarEdicion = (index) => {
    console.log("Finalizando edición del mensaje" + index);
    mensajes.value[index].editando = false;
  };

  const eliminarMensaje = (index) => {
    mensajes.value.splice(index, 1);
  };
  </script>

<template>
    <div>
      <ul>
        <li v-for="(mensaje, index) in mensajes" :key="index">
          <span v-if="!mensaje.editando" @click="iniciarEdicion(index)">{{ mensaje.texto }}</span>
          <input v-else v-model="mensaje.texto"  @keydown.enter="finalizarEdicion(index)">
          <button @click="eliminarMensaje(index)">Eliminar</button>
        </li>
      </ul>
      <p v-if="mensajes.length === 0">No hay mensajes disponibles.</p>
    </div>
  </template>
