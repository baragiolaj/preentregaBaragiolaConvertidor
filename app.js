
const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Carrito Vacío',
        showConfirmButton: false,
        timer: 1000
      })
})

fetch("stock.json")
.then(response => response.json())
.then(data2 => {
data2.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <div id="bCarrito" >
    <button id="agregar${producto.id}" class="boton-agregar" id="carritos"> <p>Agregar</p> <img src="./assets/carrito.png" class="butCarrito"> </button>
    </div>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)


    boton.addEventListener('click', () => 
    {
        agregarAlCarrito(producto.id)
    })

    boton.addEventListener('click', () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregado al Carrito',
            showConfirmButton: false,
            timer: 600
          })
    })

const agregarAlCarrito = (prodId) => {

    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito()
}
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><img src="./assets/trashico.png" class="trashico"></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)


}


})
})


function convert () {
    let valor = parseInt (document.getElementById("cantidad").value);
    let result = 0;
    let bitcoin =  2880000;
    let ethereum = 203118;
    let dai = 172;
    if (document.getElementById("bitcoin").checked){
        result = valor * bitcoin;
        document.getElementById("resultado").value = result;}
        else if (document.getElementById("ethereum").checked){
            result = valor * ethereum;
            document.getElementById("resultado").value = result;}
        else if (document.getElementById("dai").checked){
            result = valor * dai;
            document.getElementById("resultado").value = result;}
        else {
            alert("Debes completar todos los requisitos")
        }
        }

        const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
        const botonAbrir = document.getElementById('boton-carrito')
        const botonCerrar = document.getElementById('carritoCerrar')
        const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
        
        
        botonAbrir.addEventListener('click', ()=>{
            contenedorModal.classList.toggle('modal-active')
        })
        botonCerrar.addEventListener('click', ()=>{
            contenedorModal.classList.toggle('modal-active')
        })
        
        contenedorModal.addEventListener('click', (event) =>{
            contenedorModal.classList.toggle('modal-active')
        
        })
        modalCarrito.addEventListener('click', (event) => {
            event.stopPropagation()
        })
        
        let elimcar = document.getElementById("vaciar-carrito")
        