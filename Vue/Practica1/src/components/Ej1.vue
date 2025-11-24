<script setup>
    import {ref} from 'vue'
    let contador = ref(0)
</script>

<template>
    <h3>Contador: {{ contador }}</h3>
    <div class="buttons">
        <button @click="contador++">Incrementar</button>
        <button @click="contador--">Dencrementar</button>
        <button @click="contador=0">Resetear</button>
    </div>
</template>

<style scoped>
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
