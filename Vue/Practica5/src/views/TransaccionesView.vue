<script setup>

import MisCuentas from '@/components/MisCuentas.vue';
import CuentasDestino from '@/components/Transactions/CuentasDestino.vue';
import CanitadadTransferir from '@/components/Transactions/CanitadadTransferir.vue';
import { computed, reactive, ref, watch } from 'vue';

let props = defineProps({
    usuarioRegistrado: Object
})

let emit = defineEmits(['transferir'])
let cuentaOrigenSeleccionada = ref()
let cuentaDestinoSeleccionada = ref()
let cantidadSeleccionada = ref()



// watch(cuentaOrigenSeleccionada, (nueva) => {
//     console.log("Origen cambiado:", nueva)
// })

// watch(cuentaDestinoSeleccionada, (nueva) => {
//     console.log("Destino cambiado:", nueva)
// })

// watch(cantidadSeleccionada, (nueva) => {
//     console.log("Cantidad cambiada:", nueva)
// })

let opcionSeleccionada = ref('misCuentas')

let seleccinarCuentaOrigen = (nCuenta) => {
    if (cuentaOrigenSeleccionada.value == nCuenta) {
        cuentaOrigenSeleccionada.value = null
    }
    else {
        cuentaOrigenSeleccionada.value = nCuenta
    }
}

let cuentaDestino = (nCuenta) => {
    cuentaDestinoSeleccionada.value = nCuenta
}

let definirCantidad = (cantidad) => {
    cantidadSeleccionada.value = cantidad
}

let restoCuentas = computed(() => {
    return props.usuarioRegistrado.cuentas.filter(
        cuenta => cuenta.nCuenta !== cuentaOrigenSeleccionada.value
    )
})
let nCuentaInvalido = ref(false)
let ejecutarTranferencia = () => {
    let datosTransferencia = ref();
    switch (opcionSeleccionada.value) {
        case "misCuentas":
            datosTransferencia.value = {
                cuentaOrigen: cuentaOrigenSeleccionada.value,
                cuentaDestino: cuentaDestinoSeleccionada.value,
                cantidad: cantidadSeleccionada.value
            }
            break;
        case "otraCuenta":
            if (cuentaDestinoSeleccionada.value.length == 10) {
                if(!isNaN(cuentaDestinoSeleccionada.value)){
                    nCuentaInvalido.value = false
                    datosTransferencia.value = {
                        cuentaOrigen: cuentaOrigenSeleccionada.value,
                        cantidad: cantidadSeleccionada.value
                    }
                }else{
                    nCuentaInvalido.value = true
                }
            }
            else {
                nCuentaInvalido.value = true
            }
            break;
    }

    emit('transferir', datosTransferencia.value)
    cuentaDestinoSeleccionada.value = ""
    cuentaOrigenSeleccionada.value = ""
    cantidadSeleccionada.value = 0
}


</script>

<template>
    <h2>Seleccina la cuenta origen</h2>
    <MisCuentas #cuentas>
        <ul>
            <li v-for="cuenta in usuarioRegistrado.cuentas" :key="cuenta.nCuenta"
                @click="seleccinarCuentaOrigen(cuenta.nCuenta)"
                :class="{ 'activo': cuentaOrigenSeleccionada === cuenta.nCuenta }">
                {{ cuenta.nCuenta }}
            </li>
        </ul>
    </MisCuentas>
    <h2>Seleccione una opcion de transferencia</h2>
    <div class="opcionesDestino">
        <div class="misCuentas">

            <input type="radio" value="misCuentas" id="opcion1" v-model="opcionSeleccionada">
            <label for="opcion1">Mis cuentas</label>
        </div>
        <div class="otraCuenta">
            <input type="radio" value="otraCuenta" id="opcion2" v-model="opcionSeleccionada">
            <label for="opcion2">Otra cuenta</label>

        </div>
    </div>


    <div class="unaDeMisCuentas" v-if="opcionSeleccionada == 'misCuentas' && cuentaOrigenSeleccionada">
        <CuentasDestino :cuentas="restoCuentas" @cuenta-seleccionada-destino="cuentaDestino" />
        <CanitadadTransferir v-if="cuentaDestinoSeleccionada" @definir-cantidad="definirCantidad"
            @transferir="ejecutarTranferencia" />
        <div class="mensajeAdvertencia" v-else-if="opcionSeleccionada == 'misCuentas' && !cuentaDestinoSeleccionada">
            <p>Ninguna cuenta seleccionada</p>
        </div>
    </div>
    <div class="mensajeAdvertencia" v-else-if="opcionSeleccionada == 'misCuentas' && !cuentaOrigenSeleccionada">
        <p>Ninguna cuenta seleccionada</p>
    </div>
    <div class="otraCuenta" v-if="opcionSeleccionada == 'otraCuenta' && cuentaOrigenSeleccionada">

        <div class="cuentaDestino">
            <h2>Cuenta destino</h2>
            <input type="text" v-model="cuentaDestinoSeleccionada" maxlength="10">
            <div class="mensajeError" v-if="nCuentaInvalido">
                <p>Numero de cuenta invalido</p>
            </div>
        </div>
        <CanitadadTransferir @definir-cantidad="definirCantidad" @transferir="ejecutarTranferencia" />
    </div>
    <div class="mensajeAdvertencia" v-else-if="opcionSeleccionada == 'otraCuenta' && !cuentaOrigenSeleccionada">
        <p>Ninguna cuenta seleccionada</p>
    </div>
</template>

<style scoped>
.opcionesDestino {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 20px 0;
}


.opcionesDestino input[type="radio"] {
    display: none;
    /* ocultamos el radio real */
}

.opcionesDestino label {
    display: block;
    text-align: center;
    padding: 10px 20px;
    border: 2px solid #0077ff;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    background-color: #fff;
    color: #0077ff;
}

.opcionesDestino input[type="radio"]:checked+label {
    background-color: #0077ff;
    color: #fff;
    box-shadow: 0 4px 12px rgba(0, 119, 255, 0.3);
}

.opcionesDestino label:hover {
    background-color: #e8f4ff;
}

.mensajeAdvertencia {

    display: flex;
    align-items: center;
    flex-direction: column;
}

.mensajeAdvertencia p {
    font-size: 0.95rem;
    color: #555;
    /* gris oscuro, legible pero suave */
    background-color: #fff8e1;
    /* fondo amarillo suave para aviso */
    border: 1px solid #ffe08a;
    /* borde amarillo claro */
    padding: 8px 12px;
    border-radius: 4px;
    margin-top: 10px;
}

.mensajeError p {
    font-size: 0.95rem;
    color: #555;
    /* gris oscuro, legible pero suave */
    background-color: #ffe1e1;
    /* fondo amarillo suave para aviso */
    border: 1px solid #ff8a8a;
    /* borde amarillo claro */
    padding: 8px 12px;
    border-radius: 4px;
    margin-top: 10px;
}

input[type="text"] {
    width: 200px;
    padding: 10px 14px;
    font-size: 1rem;
    border: 2px solid #0077ff;
    border-radius: 8px;
    outline: none;
    transition: all 0.3s ease;
}

input[type="text"]:focus {
    border-color: #005fcc;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
}

.otraCuenta {
    display: flex;
    flex-direction: column;
}

.otraCuenta .cuentaDestino {
    align-self: center;
    margin-bottom: 10px;
}
</style>
