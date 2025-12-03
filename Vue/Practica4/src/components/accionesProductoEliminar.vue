<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['eliminar'])

    let nombre = ref('')

    function eliminar(){
        try{

            if(nombre.value.length<1){
                throw new Error("No has escrito ningún producto");
            }

            emit('eliminar',{nombre: nombre.value, cantidad: 0})
            nombre.value = ""
        }catch(e){
            alert(e)
        }
    }

</script>

<template>
    <input type="text" v-model="nombre" placeholder="Nombre producto">
    <button @click="eliminar">Eliminar</button>
</template>



