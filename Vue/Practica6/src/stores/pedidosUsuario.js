import { defineStore } from "pinia";

export const pedidosUsuario = defineStore("pedidos", () => {
  const pedidos = [

    //JUAN
    {
      id: 1,
      idUsuario: 1,
      idProducto: 1,
      cantidad: 2,
      fecha: "2025-12-10",
    },
    {
      id: 2,
      idUsuario: 1,
      idProducto: 3,
      cantidad: 1,
      fecha: "2025-12-11",
    },

    //MARIA
    {
      id: 3,
      idUsuario: 2,
      idProducto: 2,
      cantidad: 3,
      fecha: "2025-12-09",
    },
    {
      id: 4,
      idUsuario: 2,
      idProducto: 4,
      cantidad: 1,
      fecha: "2025-12-12",
    },

    //CARLOS
    {
      id: 5,
      idUsuario: 3,
      idProducto: 5,
      cantidad: 2,
      fecha: "2025-12-08",
    },
    {
      id: 6,
      idUsuario: 3,
      idProducto: 1,
      cantidad: 1,
      fecha: "2025-12-11",
    },
    {
      id: 7,
      idUsuario: 3,
      idProducto: 8,
      cantidad: 2,
      fecha: "2025-12-13",
    },

    //LAURA
    {
      id: 8,
      idUsuario: 4,
      idProducto: 6,
      cantidad: 1,
      fecha: "2025-12-10",
    },
    {
      id: 9,
      idUsuario: 4,
      idProducto: 7,
      cantidad: 2,
      fecha: "2025-12-12",
    },
    {
      id: 10,
      idUsuario: 4,
      idProducto: 3,
      cantidad: 1,
      fecha: "2025-12-13",
    },

    //DAVID
    {
      id: 11,
      idUsuario: 5,
      idProducto: 9,
      cantidad: 1,
      fecha: "2025-12-09",
    },
    {
      id: 12,
      idUsuario: 5,
      idProducto: 10,
      cantidad: 2,
      fecha: "2025-12-11",
    },
    {
      id: 13,
      idUsuario: 5,
      idProducto: 2,
      cantidad: 3,
      fecha: "2025-12-13",
    },
  ];

  return {pedidos}
});
