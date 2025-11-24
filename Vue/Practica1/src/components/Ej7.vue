<script setup>
import { ref } from "vue";

let nombre = ref('')
let edad = ref('')
let ciudad = ref('')


</script>

<template>
    <h3>Prefil de usuario</h3>
    <div class="inputs">
        <input type="text" placeholder="Nombre" v-model="nombre">
        <input type="number" placeholder="Edad" v-model="edad">
        <input type="text" placeholder="Ciudad" v-model="ciudad">
    </div>
    <p v-if="nombre || edad || ciudad">
        <span>¡Hola, {{ nombre || 'Anónimo' }}!</span>
        <span v-if="edad"> Tienes {{ edad }} años</span>
        <span v-if="ciudad">
            <span v-if="edad"> y</span> vives en {{ ciudad }}
        </span>
    </p>

    <p v-else>
        Todavía no has rellenado ningún campo
    </p>
</template>
