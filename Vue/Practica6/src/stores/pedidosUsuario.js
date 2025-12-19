import { defineStore } from "pinia";

export const usePedidosUsuarioStore = defineStore("usePedidosUsuarioStore", () => {
  const pedidos = [

    //JUAN
    {
      id: 1,
      idUsuario: 1001,
      idProducto: 1,
      cantidad: 2,
      fecha: "2025-12-10",
    },
    {
      id: 2,
      idUsuario: 1001,
      idProducto: 3,
      cantidad: 1,
      fecha: "2025-12-11",
    },

    //MARIA
    {
      id: 3,
      idUsuario: 1002,
      idProducto: 2,
      cantidad: 3,
      fecha: "2025-12-09",
    },
    {
      id: 4,
      idUsuario: 1002,
      idProducto: 4,
      cantidad: 1,
      fecha: "2025-12-12",
    },

    //CARLOS
    {
      id: 5,
      idUsuario: 1003,
      idProducto: 5,
      cantidad: 2,
      fecha: "2025-12-08",
    },
    {
      id: 6,
      idUsuario: 1003,
      idProducto: 1,
      cantidad: 1,
      fecha: "2025-12-11",
    },
    {
      id: 7,
      idUsuario: 1003,
      idProducto: 8,
      cantidad: 2,
      fecha: "2025-12-13",
    },

    //LAURA
    {
      id: 8,
      idUsuario: 1004,
      idProducto: 6,
      cantidad: 1,
      fecha: "2025-12-10",
    },
    {
      id: 9,
      idUsuario: 1004,
      idProducto: 7,
      cantidad: 2,
      fecha: "2025-12-12",
    },
    {
      id: 10,
      idUsuario: 1004,
      idProducto: 3,
      cantidad: 1,
      fecha: "2025-12-13",
    },

    //DAVID
    {
      id: 11,
      idUsuario: 1005,
      idProducto: 9,
      cantidad: 1,
      fecha: "2025-12-09",
    },
    {
      id: 12,
      idUsuario: 1005,
      idProducto: 10,
      cantidad: 2,
      fecha: "2025-12-11",
    },
    {
      id: 13,
      idUsuario: 1005,
      idProducto: 2,
      cantidad: 3,
      fecha: "2025-12-13",
    },
  ];

function agregarPedido(pedido) {
  let pedidoExistente = pedidos.find(
    p =>
      p.idProducto === pedido.idProducto &&
      p.idUsuario === pedido.idUsuario &&
      p.fecha === pedido.fecha
  )

  if (pedidoExistente) {
    pedidoExistente.cantidad += pedido.cantidad
  } else {
    pedidos.push(pedido)
  }
}

  return {pedidos,agregarPedido}
});
