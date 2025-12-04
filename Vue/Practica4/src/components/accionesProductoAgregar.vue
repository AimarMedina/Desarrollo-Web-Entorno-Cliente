<script setup>
    import { reactive, ref } from 'vue';

    const emit = defineEmits(['agregar'])

    let visible = ref(false)

    let nombre = ref('')
    let cantidad = ref(1)

    function agregar(){
        try{
            if(nombre.value.length<1){
                throw new Error("No has escrito ningún producto");
            }
            if(parseInt(nombre.value)){
                throw new Error("El producto no puede ser un numero");
            }
            if(cantidad.value<1){
                throw new Error("No has indicado una cantidad valida");
            }

            let producto = {
                nombre: nombre.value,
                cantidad: cantidad.value
            }
            nombre.value = ""
            emit('agregar',producto)
        }catch(e){
            alert(e)
        }
    }

</script>

<template>
    <input type="text" v-model="nombre" placeholder="Nombre producto">
    <input v-if="visible" type="number" min="1" v-model="cantidad">
    <button @click="visible = !visible">Definir cantidad</button>
    <button @click="agregar">Agregar</button>
</template>



