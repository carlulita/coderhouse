let arrayProductos = []

const fichaCompra = document.getElementById('fichacompra')
const estadoCompra = document.getElementById('estadocompra')


const traerDatos = async ()=>{
    const resp = await fetch('./js/products.json')
    const data = await resp.json()
    arrayProductos = data
}
traerDatos()

let on = 0
let carrito = []

function showFichaCompra(arrayProductos) {

    
    // let carrito = []
    let subtotal = 0

    function lS(){
        let carritoLS = JSON.parse(localStorage.getItem('carrito'))

        if(carritoLS) {
        swal({
            title: "¿Querés continuar tu última compra?",
            text: "Si cancelás, no podrás recuperar los productos del carrito.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
        .then((willDelete) => {
            if (willDelete) {
            carrito = carritoLS
            carrito.forEach((productoLS) =>{
            let nombreLS = productoLS.nombre
            operacionesCarrito(nombreLS, productoLS)
            })
            actualizarSubtotal()
            swal("Carrito recuperado", {
                icon: "success",
                });
            } else {
            localStorage.removeItem('carrito')
            carrito = []
                swal("Carrito vaciado", {
                icon: "success",
                });
            }
            });
        }
    }

    function actualizarSubtotal(){
        let totalCarrito = carrito.reduce( (acc, el)=> acc += el.precio, 0 )
        subtotal = totalCarrito
        $("#subtotal2").remove()
        $("#subtotal").prepend(
        `    
        <td id="subtotal2" colspan="4">Subtotal $ ${subtotal}<br><button class="button-small" id="finalizarcompra">FINALIZAR COMPRA</button></td>`
        )
    }

    function operacionesCarrito(nombre, producto){

        $("#carritovacio").remove()
        
        $("#tablaCompra").append(
            `
            <tr id="producto-${nombre}">
            <td scope="row">${producto.id}</td>
            <td>${nombre}</td>
            <td>${producto.precio} ${producto.currency}</td>
            <td><button id="${nombre}" class="trash"><img src="media/trash.png" height="18px" width="18px" alt="eliminar"></button></td>
            </tr>
            `
        )
    
        $(`#${nombre}`).on('click', function() { 
            $(`#producto-${nombre}`).remove()

            let index = carrito.findIndex(elemento => elemento.nombre === nombre)

            subtotal = subtotal - producto.precio

            carrito.splice(index, 1)
            localStorage.setItem('carrito', JSON.stringify(carrito))
            actualizarSubtotal(subtotal)

            if(carrito.length === 0) {
                localStorage.removeItem('carrito')
                $("#tablaCompra").prepend(
                    `                    
                    <tr>
                    <td id="carritovacio" colspan="4">Carrito vacío</td>
                    </tr>`
                )
                }
            })
        }

    function comprar(){  

        const inputProducto = document.getElementById('input-producto')

        let nombre = (inputProducto.value)

        let producto = arrayProductos.find( element => element.nombre == nombre)

        if(producto && carrito.length >=1) {
            let productosCarrito = carrito.find(element => element.nombre == nombre)
                if (productosCarrito === producto){ 
                swal({
                    text: `El producto ${nombre} ya está en el carrito`,
                    icon: "warning",
                })
                console.log("El producto ya está en el carrito")
                } else {
                carrito.push(producto) && operacionesCarrito(nombre, producto) 
                localStorage.setItem('carrito', JSON.stringify(carrito)) 
                actualizarSubtotal()
                }
        } else {
            carrito.push(producto)
            localStorage.setItem('carrito', JSON.stringify(carrito))
            actualizarSubtotal()
            operacionesCarrito(nombre, producto)
        }

        $('#finalizarcompra').on('click', function() { 
            console.log("Redirigiendo a Mercado Pago")
            finalizarCompra()
        })
    }

    fichacompra.innerHTML = ''

    $("#fichacompra").prepend( `
    <div class="container">
    <form id="contact" action="" method="post">
    <h3 class="center">Carrito de compras</h3>
    <fieldset>
    <label for="producto">
        <select class=" width input" name="producto" id="input-producto">
            <option value="Alsephina">Alsephina</option>
            <option value="Irena">Irena</option>
            <option value="Ara">Ara</option>
            <option value="Maia">Maia</option>
            <option value="Ain">Ain</option>
            <option value="Lerna">Lerna</option>
        </select>
    </fieldset>
    <fieldset>
    <button id="btnagregar" class="button">Agregar</button>
    </fieldset>
    </form>
    <div> `
    )
    
    if(on >= 1) {
        console.log("El carrito ya está activado")
    } else {
    $("#estadocompra").prepend(
        `    
        <div class="container">
                <table id="contact" action="" method="post" class="table tabla">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="tablaCompra" class="tabla2">  
                    <tr>
                    <td id="carritovacio" colspan="4">Carrito vacío</td>
                    </tr>
                    </tbody>  
                    <tfoot id="subtotal">
                    <td id="subtotal2" colspan="4">Subtotal $ ${subtotal}<br><button class="button-small" id="finalizarcompra">FINALIZAR COMPRA</button></td>
                    </tfoot> 
                </table>
        <div>
        `
        )
        on++
    }

    lS()
    
    const btnAgregar = document.getElementById('btnagregar')

    btnAgregar.addEventListener('click', (event) => {
        event.preventDefault()
        comprar()
    })
    

    //MERCADO PAGO
    
    const finalizarCompra = async () => {
    
        const carritoMP = carrito.map( el => ({       
            title: el.nombre,
            description: "",
            picture_url: "",
            category_id: el.id,
            quantity: 1,
            currency_id: "ARS",
            unit_price: el.precio       
        }) )
    
        const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
                            method: "POST",
                            headers: {
                                Authorization: 'Bearer TEST-6557637320914878-070610-f22af8ccb242ad70f79344c9d86e6618-2495555'
                            },                         
                            body: JSON.stringify({
                                items: carritoMP
                            })
                        })
    
        const {init_point} = await resp.json()
    
        window.open(init_point, '_blank')
    }

}
