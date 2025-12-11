<script setup>
    import { ref } from 'vue';
    import MisCuentas from '../MisCuentas.vue';
    let props = defineProps({
        cuentas: Array
    })

let cuentaSeleccionada = ref()
let emit = defineEmits(['cuentaSeleccionadaDestino'])
let seleccinarCuentaDestino = (nCuenta) => {
    if(cuentaSeleccionada.value == nCuenta){
        cuentaSeleccionada.value = null
        emit('cuentaSeleccionadaDestino',null)
    }
    else{
        cuentaSeleccionada.value = nCuenta
        emit('cuentaSeleccionadaDestino',cuentaSeleccionada.value)
    }
}
</script>

<template>
    <MisCuentas #cuentas>
        <ul>
            <li v-for="cuenta in props.cuentas" :key="cuenta.nCuenta"
                @click="seleccinarCuentaDestino(cuenta.nCuenta)"
                :class="{ 'activo': cuentaSeleccionada === cuenta.nCuenta }">
                {{ cuenta.nCuenta }}
            </li>
        </ul>
    </MisCuentas>
</template>
