let baseDatos = [
  {
    nombre: "Juan",
    contraseña: "12345Abcde",
  },
  {
    nombre: "Pedro",
    contraseña: "1234567890",
  },
];

var enviar = document.querySelector('#submit');

enviar.addEventListener("click", validarDatos);

function validarDatos() {
  var usr = document.getElementById("nombre").value;
  var passwd = document.getElementById("passwd").value;

  baseDatos.forEach((element) => {
    if (element.nombre == usr && element.passwd == passwd) {
      alert("Bienvenido" + element.nombre);
    } else {
      alert("Usuario incorrecto")
    }
  });
}
