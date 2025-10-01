
var añadirProductoButton = document.querySelector("#añadirProducto")
var añadirProductoInput = document.querySelector("#producto")

function actualizarLista(){
    if(typeof localStorage !== "undefined"){
        return lista = JSON.parse(localStorage.getItem("productos"));
    }
}

function añadirProducto(event){
    event.preventDefault()



    let producto = document.querySelector("#producto").value
    if(producto == ""){
        alert("Debes introducir un producto")
    }
    else{
        var productos = actualizarLista();
        productos.push(producto)
        localStorage.setItem("productos", JSON.stringify(productos))
        añadirProductoInput.value = ""
        actualizarLista()
    }

}

function crearLista(){
    var lista = actualizarLista()

    lista.forEach(producto => {
        var productoLista = document.createElement("li")
        productoLista.textContent = producto

        document.querySelector("#lista").appendChild(productoLista)
    });
}

añadirProductoButton.addEventListener("click", añadirProducto)

