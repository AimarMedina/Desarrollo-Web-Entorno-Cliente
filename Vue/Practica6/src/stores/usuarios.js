import { defineStore } from "pinia";

export const users = defineStore("users", () => {

  const users = [
    {
      id: 1001,
      nombre: "Juan",
      apellido: "Pérez",
      email: "juan.perez@email.com",
      passwd: "Juan@1234", // mayúscula, minúscula, número y símbolo
    },
    {
      id: 1002,
      nombre: "María",
      apellido: "Gómez",
      email: "maria.gomez@email.com",
      passwd: "Maria#5678",
    },
    {
      id: 1003,
      nombre: "Carlos",
      apellido: "López",
      email: "carlos.lopez@email.com",
      passwd: "Carlos$9012",
    },
    {
      id: 1004,
      nombre: "Laura",
      apellido: "Martínez",
      email: "laura.martinez@email.com",
      passwd: "Laura!3456",
    },
    {
      id: 1005,
      nombre: "David",
      apellido: "Sánchez",
      email: "david.sanchez@email.com",
      passwd: "David%7890",
    },
  ];

  function validarPassword(passwd){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Z a-z\d]).{8,}$/;
    return regex.test(passwd)
  }

  return { users, validarPassword };
});
