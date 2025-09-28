let enviar = document.querySelector(".Enviar");
let formulario = document.querySelector("#formulario")

enviar.addEventListener('click', (event) => {
    event.preventDefault()
    try{
        let nombre = document.querySelector("input[name='nombre']")
        verificarCamposVacios(nombre.type,nombre.value,"'Nombre'");

        let apellidos = document.querySelector("input[name='apellidos']")
        verificarCamposVacios(apellidos.type,apellidos.value,"'Apellidos'");

        let email = document.querySelector("input[name='correo']")
        verificarCamposVacios(email.type,email.value,"'Email'");

        let poblacion = document.querySelector("input[name='poblacion']")
        verificarCamposVacios(poblacion.type,poblacion.value,"'Poblacion'");

        let provincia = document.querySelector("input[name='provincia']")
        verificarCamposVacios(provincia.type,provincia.value,"'Provincia'");

        let edad = document.querySelector("input[name='edad']:checked")
        verificarCamposVacios(edad ? edad.type : "radio",edad ? edad.value : "","'Provincia'");

        let conocidoPor = Array.from( document.querySelectorAll("input[name='conocido']:checked")).map(c=> c.value)
        verificarCamposVacios("checkbox",conocidoPor,"'Provincia'");

        alert(
            'Nombre: ' + nombre.value + "\n" +
            'Apellidos: '+ apellidos.value + "\n" +
            'Email: ' + email.value + "\n" +
            'Poblacion: '+ poblacion.value + "\n" +
            'Provincia: ' + provincia.value + "\n" +
            'Edad: ' + edad.value + "\n" +
            'Conocido por: ' + conocidoPor.join(", ").toUpperCase() + "\n"

        )

        formulario.submit()
    }catch(e){
        alert(e.message)
    }
})


function verificarCamposVacios(inputType,valor,inputName){
    switch(inputType){
        case "text":
        case "email":
            if (valor === ""){
                throw new Error("El campo "+inputName+" es obligatorio.")
            }
            break;
        case "radio":
            if(valor === ""){
                throw new Error("Debes elegir un rango de edad.")
            }
            break;
        case "checkbox":
            if(valor.length<=0){
                throw new Error("Debes elegir al menos una opción que nos indique como nos conociste.")
            }
            break;
    }
}