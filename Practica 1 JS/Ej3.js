var hoy = new Date();
console.log(hoy)

console.log(Date.now())
console.log(Date.now()*3.17098e-11)

var unAñoMas = new Date(hoy.getFullYear()+1, hoy.getMonth(), hoy.getDate())
console.log(unAñoMas)

var fechaNacimiento = new Date(2006, 8, 23)
var edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
if(hoy.getMonth() < fechaNacimiento.getMonth() || (hoy.getMonth() == fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())){
    edad--
}
console.log(edad)

console.log(fechaNacimiento.getFullYear())
var fechaNavidad = new Date(hoy.getFullYear(), 11, 25)

console.log("Quedan " + Math.floor((fechaNavidad -hoy)/(1000*60*60*24)) + " dias para navidad")
