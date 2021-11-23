////////////////
$.getJSON("./data.json",
    function(respuesta, estado) {
        if (estado === "success") {

            for (const objeto of respuesta) {
                productosArray.push(new Producto(objeto.nombre, objeto.categoria, objeto.precio, objeto.stock, objeto.descripcion, objeto.imagen))

            }
            if ("lista" in localStorage == []) {
                localStorage.setItem("lista", JSON.stringify(productosArray))
            }
            mostrarProducto(productosArray)
        }
    })

//
//
//




//
//
//READY FUNC
//
//
$(document).ready(function() {

    if ("cart" in localStorage) {

        const dato = JSON.parse(localStorage.getItem("cart"))


        for (const productos of dato) {
            carrito.push(new Producto(productos.nombre, productos.categoria, productos.precio, productos.stock, productos.descripcion, productos.imagen))

        }
    }


})