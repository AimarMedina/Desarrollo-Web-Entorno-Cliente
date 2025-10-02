
var añadirProductoButton = document.querySelector("#añadirProducto")
var añadirProductoInput = document.querySelector("#producto")
var listaProductosDOM = document.querySelector("#listaProductos")
var vaciarListaButton = document.querySelector("#resetLista")
var elementoLista = document.getElementsByTagName("li")

var listaProductos = actualizarLista()

crearLista()

function actualizarLista(){
    if(typeof localStorage !== "undefined"){
        var lista = JSON.parse(localStorage.getItem("productos"));
        return lista ? lista : [];
    }
    return []
}

function añadirProducto(event){
    event.preventDefault()

    var producto = document.querySelector("#producto").value
    if(producto == ""){
        alert("Debes introducir un producto")
    }
    else{
        var productos = actualizarLista();
        productos.push(producto)
        localStorage.setItem("productos", JSON.stringify(productos))
        añadirProductoInput.value = ""
        actualizarLista()
        crearLista()
    }

}

function crearLista(){
    var lista = actualizarLista()
        reinicarLista()
    if (lista){
        lista.forEach(producto => {
            var productoLista = document.createElement("li")
            productoLista.textContent = producto
            productoLista.addEventListener("dblclick",eliminarUnProducto)

            listaProductosDOM.appendChild(productoLista)
        });
    }
}

function reinicarLista(){
    var productosLista = listaProductosDOM.children

    Array.from(productosLista).forEach(producto =>{
        producto.remove();
        
    })
}

function vaciarlista(){
    if(localStorage.getItem("productos")){
        localStorage.removeItem("productos")
    }
    actualizarLista()
    reinicarLista()
}

function eliminarUnProducto(event){
    var lista = JSON.parse(localStorage.getItem("productos"));


    var listaArray = []

    Array.from(lista).forEach(elemento=>{
        listaArray.push(elemento)
    })

    indiceElemento = listaArray.indexOf(event.target.textContent)

    if(indiceElemento !== 1){
        listaArray.splice(indiceElemento,1)
    }

    localStorage.setItem("productos", JSON.stringify(listaArray))

    
    if(!listaArray){
        vaciarlista()
    }
    event.target.remove()
}


añadirProductoButton.addEventListener("click", añadirProducto)
vaciarListaButton.addEventListener("click",vaciarlista)



