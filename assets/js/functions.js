//
//
//
//
const imprimirDatos = document.getElementById("productosPrint")
//
//FUNC MOSTRAR PRODUCTOS
//
function mostrarProducto(productosArray) {

    productosArray.forEach(element => {
        let index = productosArray.indexOf(element)

        imprimirDatos.innerHTML += `   


  <div class="card">
  <div class="card__image">
   <img src="${element.imagen}">
</div>
    <h5 class="card_Subtitle">${element.nombre}</h5>
    <h5 class="card_title">${element.descripcion}</h5>
    <h6 class="card_title text-muted">${element.categoria}</h6>
    <p class="card-text">${element.precio}</p>
    <button class="card-link" onclick="comprar(${index})">comprar
    </button>
  </div>

   `

    })
};
//
//
//AGREGAR A CARRITO (COMPRAR)
//
//

const comprar = (index) => {
    let element = productosArray[index]

    let productoBuscar = carrito.find(producto => producto.id == element.id)
    if (productoBuscar == undefined) {
        carrito.push(element)


    } else {
        element.cantidad += 1


    }
    localStorage.setItem("cart", JSON.stringify(carrito))
}

//
//
//BTN MODAL 
//
//
const botonModal = document.getElementById("botonModal")

botonModal.addEventListener("click", (e) => {

        e.preventDefault()
        crearModal(carrito)

    })
    //
    //
    //MODAL BODY
    //
    //
function cartCuerpo(carrito) {

    let itemsCart = ""
    for (const element of carrito) {

        itemsCart += `   

    <div class="card">
<img src="${element.imagen}"  class="cart-item-img"
alt="${element.nombre}"height="50px" width="50px">
      <h5 class="card_Subtitle">${element.nombre}</h5>
      <h5 class="card_title">${element.descripcion}</h5>
      <h6 class="card_title text-muted">${element.categoria}</h6>
      <button id="btn_${element.id}">-</button>
      <p class="">${element.cantidad}</p>
      <button id="btnAdd${element.id}">+</button>
      <p class="card-text">${element.precio}</p>

   <button id="btn${element.id}">X</button>


    </div>
`


    }



    return itemsCart

}
//
//
//BTN CLEAR CART FUNC
//
//
function clearCart(carrito) {
    while (carrito.length > 0)
        carrito.pop();
}

//
//
//
//BUILD PRODUCTS BODY
//
const modal = document.getElementById("modalCarrito")

function crearModal(carrito) {

    let cuerpo = cartCuerpo(carrito)

    modal.innerHTML = `   

    
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="cuerpoCarrito">
            ${cuerpo}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  id="clearCart">clear cart</button>
            <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" id="btnComprar">Finalizar Compra</button>
          </div>
        </div>
     
       `

    //
    //
    //
    //BTN FINALIZE PURCHASE
    //
    const btn = document.getElementById("btnComprar")

    btn.addEventListener("click", () => {
            finalizarCompra(carrito)
        })
        //
        //
        //BTN CLEAR CART
        //
    const clearCarrito = document.getElementById("clearCart")
    clearCarrito.addEventListener("click", () => {
        clearCart(carrito)
        localStorage.setItem("cart", JSON.stringify(carrito))
        crearModal(carrito)
    })

    for (const element of carrito) {
        $(`#btn${element.id}`).on("click", (e) => {
            e.preventDefault()
            let productoEncontrado = carrito.find(producto => producto.id == element.id)


            carrito = carrito.filter(producto => producto.id != productoEncontrado.id)

            localStorage.setItem("cart", JSON.stringify(carrito))
            crearModal(carrito)
        })
    }
    //
    //BTN DECREASE PRODUCT
    //
    for (const element of carrito) {
        $(`#btn_${element.id}`).on("click", (e) => {
            e.preventDefault()
            let productoEncontrado = productosArray.find(producto => producto.id == element.id)

            if (productoEncontrado.cantidad > 0) {
                productoEncontrado.cantidad -= 1
            }
            localStorage.setItem("cart", JSON.stringify(carrito))
            crearModal(carrito)
        })
    }

    //
    //BTN  INCREASE PRODUCT
    //

    for (const element of carrito) {
        $(`#btnAdd${element.id}`).on("click", (e) => {
            e.preventDefault()
            let productoEncontrado = productosArray.find(producto => producto.id == element.id)

            if (productoEncontrado.cantidad < productoEncontrado.stock) {
                productoEncontrado.cantidad += 1
            }
            localStorage.setItem("cart", JSON.stringify(carrito))
            crearModal(carrito)
        })
    }
}
//
//
//FINALIZE PURCHASE FUNC
//
//
const finalizarCompra = (carrito) => {

        let monto = 0

        carrito.forEach(e => {

            monto += e.precio
        })
        clearCart(carrito)
        localStorage.setItem("cart", JSON.stringify(carrito))
        toast(monto)

    }
    //
    //
    //FUNC TOAST FINALIZED PURCHASE
    //
    //

function toast(monto) {
    const contenidoToast = document.getElementById("live_toast")

    contenidoToast.innerHTML = `
    <div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
    ¡Tu compra por el total de $${monto} ha sido exitosa!
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
    `
    $(".toast").toast("show")

}