<script setup>
import { computed, ref } from 'vue';

let nombre = ref('')
let apellido = ref('')

let nombreCompleto = computed(()=>{
    return nombre.value + ' ' + apellido.value
})
</script>

<template>
  <div class="container">
    <form action="">
        <h3>Tu nombre completo es: {{ nombreCompleto }}</h3>
        <span>Nombre: <input type="text" v-model="nombre"></span>
        <span> Apellido: <input type="text" v-model="apellido"></input></span>

    </form>
  </div>
</template>


<style scoped>

</style>