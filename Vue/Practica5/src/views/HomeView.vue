<script setup>
import acceso from '@/components/Home/acceso.vue';
    let emit = defineEmits(['iniciarSesion'])

    let props = defineProps({
        usuarioRegistrado: Object
    })

    let iniciarSesion = (usuario) =>{
        emit('iniciarSesion',usuario)
    }
</script>

<template>
    <acceso @iniciarSesion="iniciarSesion" v-if="!props.usuarioRegistrado"></acceso>
    <div class="bienvenido" v-else>
        <h2>¡Bienvenido, {{ props.usuarioRegistrado.name }}!</h2>
    </div>
    <div class="imagenes">
        <img src="../../public/boss.png" alt="">
        <img src="../../public/team.png" alt="">
    </div>
</template>

<style scoped>
/* Estilos para el componente acceso */
.bienvenido {
    text-align: center;
    margin: 40px auto;
    max-width: 900px;
    padding: 20px;
}

/* Contenedor de imágenes */
.imagenes {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    /* separación entre imágenes */
    flex-wrap: wrap;
    /* para que en pantallas pequeñas bajen */
}

/* Imágenes */
.imagenes img {
    width: 300px;
    /* tamaño base */
    max-width: 100%;
    /* que no desborden */
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease;
    cursor: pointer;
}

/* Efecto hover suave */
.imagenes img:hover {
    transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
    .imagenes {
        gap: 20px;
    }

    .imagenes img {
        width: 220px;
    }
}
</style>
