let tabla = document.getElementsByClassName("dias")[0]
let inicializar = document.querySelector(".inicializar")
let texto = document.querySelector('input[type="text"]')


let cantidadBotones = 1;
crearBotones()

let diaSeleccionado = 0; // variable global

tabla.addEventListener("click", annadirDia);

function annadirDia(event){
    if (event.target.tagName === "BUTTON") {
        // quitar la clase 'seleccionado' de todos los botones
        let botones = tabla.getElementsByTagName("button");
        for (let boton of botones) {
            boton.classList.remove("seleccionado");
        }

        // agregar la clase al botón clicado
        event.target.classList.add("seleccionado");

        // actualizar la variable global con el número seleccionado
        diaSeleccionado = event.target.textContent;
        console.log("Día seleccionado:", diaSeleccionado);
    }
}

inicializar.addEventListener('click', guardarDatos)

function guardarDatos(){
    if(texto.value!=="" && diaSeleccionado!==0){
        console.log("hola")
    }
    else{
        console.log("debes de seleccionar un dia y escribir un texto")
    }
}



function crearBotones(){
    for(let i = 0; i<5;i++){
        let fila = document.createElement("tr")
        tabla.appendChild(fila);
        for(let j = 0; j<7  && cantidadBotones<31;j++){
            let celda = document.createElement("td")
            fila.appendChild(celda)
            let boton = document.createElement("button")
            boton.textContent = cantidadBotones
            boton.style.width = "30px"
            boton.style.height = "30px"

            boton.className = "btn-"+cantidadBotones;
            celda.appendChild(boton)

            cantidadBotones++
        }
    }
}


