<script setup>
import { computed, reactive, ref, watch } from 'vue';
import AgregarProducto from './components/AgregarProducto.vue';
import EliminarProducto from './components/EliminarProducto.vue';
import ListaCompra from './components/ListaCompra.vue';

const opciones = {
  AgregarProducto: AgregarProducto,
  EliminarProducto: EliminarProducto
}
const porDefecto = 'AgregarProducto'
const seleccion = ref('AgregarProducto')

function cAgregar() {
  seleccion.value = "AgregarProducto"
}
function cEliminar() {
  seleccion.value = "EliminarProducto"
}

const lista = reactive(JSON.parse(localStorage.getItem('productos')) ?? [])
const listaVacía = computed(() => lista.length < 1);

watch(lista, (nuevaLista) => {
  localStorage.setItem('productos', JSON.stringify(nuevaLista));
});

function agregarProductoCarrito(event) {

  const indice = verificarProductoExistente(event, lista)
  if (indice !== -1) {
    lista[indice].cantidad = lista[indice].cantidad + event.cantidad
  } else {
    lista.push(event)
  }

}

function verificarProductoExistente(producto, lista) {
  const indiceProducto = lista.findIndex(p => p.nombre.toLowerCase() === producto.nombre.toLowerCase());
  return indiceProducto;
}

function eliminarProductoCarrito(event) {
  const indice = verificarProductoExistente(event, lista)
  try {
    if (indice === -1) {
      throw new Error("El producto introducido no existe");
    }

    lista.splice(indice, 1)
  } catch (e) {
    alert(e)
  }
}


</script>



<template>
  <h1>Operaciones sobre la lista de la compra</h1>
  <button @click="cAgregar">Agregrar Producto</button>
  <button v-if="!listaVacía" @click="cEliminar">Eliminar Producto</button>

  <component :is="listaVacía ? opciones[porDefecto] : opciones[seleccion]" @agregar="agregarProductoCarrito"
    @eliminar="eliminarProductoCarrito"></component>
  <ListaCompra>
    <template #lista>
      <ul v-if="lista.length > 0">
        <li v-for="(producto, index) in lista" :key="index"> {{ producto.nombre }} - {{ producto.cantidad }} uds </li>
      </ul>
      <p v-else>
        No hay productos en la lista
      </p>

    </template>
  </ListaCompra>
</template>

