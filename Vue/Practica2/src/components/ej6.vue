<script setup>
  import { ref } from 'vue';

  const campo1 = ref('');
  const campo2 = ref('');
  </script>

<template>
    <div>
      <input v-model="campo1" placeholder="Campo 1">
      <input v-model="campo2" placeholder="Campo 2">

      <p v-if="campo1.length > 0 && campo2.length > 0">Ambos campos están llenos.</p>
      <p v-else>Completa ambos campos.</p>
    </div>
  </template>
