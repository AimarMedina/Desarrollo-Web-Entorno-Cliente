<script setup>
import MisCuentas from '@/components/MisCuentas.vue';
import MisMovimientos from '@/components/Consults/MisMovimientos.vue';
import { ref } from 'vue';
let props = defineProps({
    usuarioRegistrado: Object
})
let cuentaSeleccionada = ref()
let mostrarMovimentos = (nCuenta) => {
    cuentaSeleccionada.value = nCuenta
}

</script>

<template>
    <h2>Mis cuentas</h2>
    <MisCuentas #cuentas>
        <ul>
            <li v-for="cuenta in usuarioRegistrado.cuentas" :key="cuenta.nCuenta"
                @click="mostrarMovimentos(cuenta.nCuenta)" :class="{ 'activo': cuentaSeleccionada === cuenta.nCuenta }">
                {{ cuenta.nCuenta }}
            </li>
        </ul>
    </MisCuentas>
    <MisMovimientos :nCuenta="cuentaSeleccionada" />
</template>

<style>
/* Título de la sección */
h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #222;
    margin-bottom: 25px;
    text-align: center;
}

/* Lista de cuentas */
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    /* centra los li */
}

/* Cada cuenta */
li {
    width: 90%;
    max-width: 350px;
    padding: 15px 20px;
    background-color: #ffffff;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Hover moderno */
li:hover,
li.activo {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    background-color: #e8f4ff;
}


/* Slot adicional */
slot[name="cuentas"] {
    display: block;
    margin-top: 20px;
}

/* Responsive */
@media (max-width: 480px) {
    li {
        width: 95%;
        padding: 12px 15px;
        font-size: 0.95rem;
    }

    MisCuentas {
        padding: 15px 20px;
    }
}
</style>
