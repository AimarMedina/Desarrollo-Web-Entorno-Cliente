import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);

export const useUsersStore = defineStore("counter", () => {
  const usuarios = [
    {
      id: 1,
      dni: "11111111A",
      passwd: "12345",
      name: "Pedro",
      cuentas: [
        { id: 1, nCuenta: 1234567890 },
        { id: 2, nCuenta: 1357924680 },
        { id: 3, nCuenta: 1122334455 },
      ],
    },
    {
      id: 2,
      dni: "22222222B",
      passwd: "12345",
      name: "Emma",
      cuentas: [
        { id: 1, nCuenta: 2233445566 },
        { id: 2, nCuenta: 6677889900 },
      ],
    },
    {
      id: 3,
      dni: "33333333C",
      passwd: "12345",
      name: "Francisco Franco",
      cuentas: [
        { id: 1, nCuenta: 3344556677 },
        { id: 2, nCuenta: 7788990011 },
        { id: 3, nCuenta: 9900112233 },
      ],
    },
  ];

  const movimientosUsuarios = [
    {
      id: 1,
      idUsuario: 1,
      movimientos: [
        {
          id: 1,
          nCuenta: 1234567890,
          fechaMovimiento: "10/10/2025",
          tipo: "Deposito",
          cantidad: 500,
        },
        {
          id: 2,
          nCuenta: 1234567890,
          fechaMovimiento: "10/12/2025",
          tipo: "Retiro",
          cantidad: 200,
        },
        {
          id: 3,
          nCuenta: 1357924680,
          fechaMovimiento: "04/12/2024",
          tipo: "Retiro",
          cantidad: 340,
        },
      ],
    },
  ];
  return { usuarios,movimientosUsuarios };
});
