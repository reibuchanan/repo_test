class User {

    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass;
    }

}



const reine = new User("123", "123")



const logInBtn = document.getElementById("btnLogIn")
logInBtn.addEventListener("click", e => {
    e.preventDefault()
    confirmacionDeAcceso()
})


////
const UserLogIn = document.getElementById("UserLogIn")







//
const confirmacionDeAcceso = () => {


    const usuario = document.getElementById("floatingInput").value;
    const pass = document.getElementById("floatingPassword").value;



    if (usuario === reine.nombre && pass === reine.pass) {

        formBody()


    } else {
       alert("URUARIO O CONTRASEÑA INCORRECTO");
    }
}



    ////
    ///
function formBody() {
    UserLogIn.innerHTML = `
    <form class="h-100" method="post">
    <div class="input-group mb-3">
   
    <input type="text" id="form-1" class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1">
  </div>
  
  <div class="input-group mb-3">
    <input type="text" class="form-control" id="form-2" placeholder="Categoria" aria-label="Categoria" aria-describedby="basic-addon2">
  </div>
  
  <label for="basic-url" class="form-label">Image URL</label>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon3">https://example.com/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="URl imagen">
  </div>
  
  <div class="input-group mb-3">
    <span class="input-group-text">$</span>
    <input type="text" id="form-3" class="form-control" placeholder="Precio" aria-label="Precio($)">
   
  </div>
  
  <div class="input-group mb-3">
    <input type="text" id="form-4" class="form-control" placeholder="Stock" aria-label="Stock">
  </div>
  <div class="input-group">
    <span class="input-group-text">Descripcion</span>
    <textarea id="form-5" class="form-control" aria-label="Descripcion"></textarea>
    <button id="LoadProduct">Cargar</button>
  </div></form>`



    const CargarProducto = document.getElementById("LoadProduct")
    CargarProducto.addEventListener("click", (e) => {

        e.preventDefault()

        const nombre = document.getElementById("form-1").value;
        const categoria = document.getElementById("form-2").value;
        const precio = document.getElementById("form-3").value;
        const stock = document.getElementById("form-4").value;
        const imagen = document.getElementById("basic-url").value;
        const descripcion = document.getElementById("form-5").value;
        ////

        ProductoCargado(nombre, categoria, precio, stock, imagen, descripcion)

        formBody()

    })
}
//////
function ProductoCargado(nombre, categoria, precio, stock, imagen, descripcion) {

    const producto = new Producto(nombre, categoria, precio, stock, descripcion, imagen)
    productosArray.push(producto)

    localStorage.setItem("lista", JSON.stringify(productosArray))

    console.log(productosArray)

}