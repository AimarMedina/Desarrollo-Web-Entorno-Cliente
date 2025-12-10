<script setup>
import { ref, watch, inject, reactive } from 'vue';
let cuenta = ref()
let props = defineProps({
    nCuenta: Number
});
const movimientos = inject('movimientos')

const movimientoCuenta = ref([])
watch(() => props.nCuenta, (nuevaCuenta) => {
    cuenta.value = nuevaCuenta
    movimientoCuenta.value = movimientos.filter(movimiento => movimiento.nCuenta == cuenta.value);

})



</script>

<template>
    <h2>Movimientos</h2>
    <div class="info" v-if="cuenta">
        <ul v-if="movimientoCuenta.length > 0">
            <li v-for="movimiento in movimientoCuenta">{{ movimiento.fechaMovimiento }} - {{ movimiento.tipo }} - {{
                movimiento.cantidad }} </li>
        </ul>
        <p v-else>Esta cuenta no tiene movimientos</p>
    </div>
    <p v-else>
        Seleccione una cuenta
    </p>
</template>

<style scoped>
/* Contenedor de Movimientos */
.info :not(p) {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px 25px;
    background-color: #f9fafb;
    border-radius: 20px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    font-family: 'Segoe UI', sans-serif;
}

/* Título */
h2 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    color: #222;
    margin-bottom: 25px;
}

/* Lista de movimientos */
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Cada movimiento */
li {
    padding: 12px 15px;
    background-color: #ffffff;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover */
li:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    background-color: #e8f4ff;
}

/* Mensajes de estado */
p {
    text-align: center;
    font-size: 1rem;
    color: #555;
    margin-top: 15px;
}

/* Responsive */
@media (max-width: 480px) {
    .info {
        padding: 15px 20px;
    }

    li {
        font-size: 0.95rem;
        padding: 10px 12px;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
}
</style>
