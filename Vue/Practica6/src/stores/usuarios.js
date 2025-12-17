import { defineStore } from "pinia";

export const usuarios = defineStore("usuarios", () => {
  
    const usuarios = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Pérez",
      dni: "12345678A",
      email: "juan.perez@email.com",
      contraseña: "juan1234",
    },
    {
      id: 2,
      nombre: "María",
      apellido: "Gómez",
      dni: "23456789B",
      email: "maria.gomez@email.com",
      contraseña: "maria1234",
    },
    {
      id: 3,
      nombre: "Carlos",
      apellido: "López",
      dni: "34567890C",
      email: "carlos.lopez@email.com",
      contraseña: "carlos1234",
    },
    {
      id: 4,
      nombre: "Laura",
      apellido: "Martínez",
      dni: "45678901D",
      email: "laura.martinez@email.com",
      contraseña: "laura1234",
    },
    {
      id: 5,
      nombre: "David",
      apellido: "Sánchez",
      dni: "56789012E",
      email: "david.sanchez@email.com",
      contraseña: "david1234",
    },
  ]

  return {usuarios}
});
