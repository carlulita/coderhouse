
let arrayProductos = [
    {id: 1, nombre: "Alsephina", precio: 150, currency: "USD"},
    {id: 2, nombre: "Irena", precio: 200, currency: "USD"},
    {id: 3, nombre: "Ara", precio: 100, currency: "USD"}

]

const fichaCompra = document.getElementById('fichacompra')
const estadoCompra = document.getElementById('estadocompra')

function showFichaCompra() {

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
        </select>
    </fieldset>
    <fieldset>
    <button id="btnagregar" class="button">Agregar</button>
    </fieldset>
    </form>
    <div> `
    )
    
    $("#estadocompra").prepend(
        `    
        <div class="container">
            <form id="contact" action="" method="post">
                <table class="table tabla">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
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
                </table>
            </form>
        <div>
        `
        )

    const btnAgregar = document.getElementById('btnagregar')

    btnAgregar.addEventListener('click', (event) => {
        event.preventDefault()
        comprar(contadorProductos)
    })
}

let carrito = []
let contadorProductos = 1

function comprar(){            

    const inputProducto = document.getElementById('input-producto')

    let nombre = (inputProducto.value)
    console.log(inputProducto.value)

    let producto = arrayProductos.find( element => element.nombre == nombre)
    console.log(producto)

    if(producto){
        carrito.push(producto)
        localStorage.setItem('carrito', JSON.stringify(carrito))

        $("#carritovacio").remove()

        // let rowCompra = document.getElementById('tablaCompra')
        
        // let tr = document.createElement('tr')
        // // div.classList.add('')
        // tr.innerHTML = 
        // `
        // <th scope="row">${contadorProductos}</th>
        // <td>${nombre}</td>
        // <td>${producto.precio} ${producto.currency}</td>
        // <td><img src="media/trash.png" height="18px" width="18px" alt="eliminar" id="trash${contadorProductos}" class="trash"></td>
        // `
    
        // rowCompra.appendChild(tr)

        $("#tablaCompra").append(
            `
            <tr>
            <th scope="row">${contadorProductos}</th>
            <td>${nombre}</td>
            <td>${producto.precio} ${producto.currency}</td>
            <td><button  id="trash${contadorProductos}" class="trash"><img src="media/trash.png" height="18px" width="18px" alt="eliminar"></button></td>
            </tr>
            `
        )

        contadorProductos++
        console.log(contadorProductos)

        // $(`#trash${contadorProductos}`).click(function() { 
        //     console.log(this)
        //     $(this).parent().remove()
        //     if(contadorProductos === 1)
        //     $("#tablaCompra").prepend(
        //         `                    
        //         <tr>
        //         <td id="carritovacio" colspan="4">Carrito vacío</td>
        //         </tr>`
        //     )
        // })
    } 



    

        console.log(carrito)


    // $("#estadocompra").prepend(
    //     `    <div class="container">
    //     <form id="contact" action="" method="post">
    //     <fieldset>
    //     <input placeholder="Nombre" type="text" tabindex="1" required autofocus>
    //     </fieldset>
    //     <fieldset>
    //     <input placeholder="Apellido" type="text" tabindex="1" required autofocus>
    //     </fieldset>
    //     <fieldset>
    //     <input placeholder="Correo Electrónico" type="text" tabindex="1" required autofocus>
    //     </fieldset>

    //     </form>
    //     <div>
    //     `
}


// let carritoLS = JSON.parse(localStorage.getItem('carrito'))

// if(carritoLS) {
//     carrito = carritoLS
//     // let continuar = confirm('Quiere continuar su última compra?')
//     if (continuar){
//         carrito = carritoLS
//     } else {
//         localStorage.removeItem('carrito')
//     }
    
// }

// console.log(carrito)




