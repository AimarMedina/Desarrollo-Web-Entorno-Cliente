let tabla = document.getElementsByClassName("dias")[0]
let texto = document.querySelector('input[type="text"]')

//botones
let inicializar = document.querySelector(".inicializar")
let visualizar = document.querySelector(".visualizar")

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
    }
}

inicializar.addEventListener('click', guardarDatos)
visualizar.addEventListener('click',mostrarTareas)

let diaTarea = []

function guardarDatos(){
    if(texto.value!=="" && diaSeleccionado!==0){
        if(diaTarea.filter(valor => valor.dia === diaSeleccionado && valor.tarea === texto.value) < 1){
            diaTarea.push(
                {
                    dia: diaSeleccionado,
                    tarea: texto.value
                }
            )
            eliminarEstiloDias()
            texto.value = "";
            alert("Tarea insertada con exito.")
        }else{
            alert("Esta tarea ya existe para este día.")
        }
    }
}

function eliminarEstiloDias(){
    let boton = document.querySelector(".seleccionado")
    boton.classList.remove("seleccionado")
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

function mostrarTareas(){

    const container = document.querySelector(".visualizarAnotaciones");
    container.innerHTML = "";
    container.classList.remove('oculto')

    if(diaTarea.length === 0){
        container.textContent = "No hay tareas.";
        return;
    }


    // agrupar tareas por día
    const tareasPorDia = {};
    diaTarea.forEach(item => {
        if(!tareasPorDia[item.dia]){
            tareasPorDia[item.dia] = [];
        }
        tareasPorDia[item.dia].push(item.tarea);
    });

    // crear la lista en HTML
    for(const dia in tareasPorDia){
        const diaDiv = document.createElement("div");
        diaDiv.innerHTML = `<strong>Día ${dia}:</strong> ${tareasPorDia[dia].join(", ")}`;
        container.appendChild(diaDiv);
    }
}



