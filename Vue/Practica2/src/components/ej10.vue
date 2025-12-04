<script setup>
  import { ref } from 'vue';

  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
  ];

  const carrito = ref([]);

  // Sale ya el primer producto o sale vacía inicialmente la lista desplegable.
  const nuevoProducto = ref(productos[0].id);
  //const nuevoProducto = ref();

const agregarProducto = () => {
  // Si el producto ya está en el carrito, suma una unidad. Sino lo añade.
  const productoExistente = carrito.value.find(item => item.id === nuevoProducto.value);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.value.push({ id: nuevoProducto.value, nombre: getNombreProducto(nuevoProducto.value), cantidad: 1 });
  }
};

const getNombreProducto = (productoId) => {
  const producto = productos.find(item => item.id === productoId);
  return producto.nombre;
};

const incrementarCantidad = (index) => {
  carrito.value[index].cantidad++;
};

const decrementarCantidad = (index) => {
  if (carrito.value[index].cantidad > 1) {
    carrito.value[index].cantidad--;
  } else {
    // Si la cantidad es 1 o menos, elimina el producto del carrito
    carrito.value.splice(index, 1);
  }
};

const eliminarProducto = (index) => {
  carrito.value.splice(index, 1);
};
</script>

<template>
    <div>
      <ul>
        <li v-for="(producto, index) in carrito" :key="index">
          {{ producto.nombre }} - Cantidad: {{ producto.cantidad }}
          <button @click="incrementarCantidad(index)">+</button>
          <button @click="decrementarCantidad(index)">-</button>
          <button @click="eliminarProducto(index)">Eliminar</button>
        </li>
      </ul>
      <p v-if="carrito.length === 0">El carrito está vacío.</p>

      <select v-model="nuevoProducto">
        <option v-for="producto in productos" :key="producto.id" :value="producto.id">
          {{ producto.nombre }}
        </option>
      </select>
      <button @click="agregarProducto">Agregar al carrito</button>
    </div>
  </template>

  