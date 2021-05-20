// function compra() {
    
//     const producto1 = 150
//     const producto2 = 160
//     const producto3 = 170
//     const producto4 = 180
//     const producto5 = 190
//     const producto6 = 200
    
//     const adicional1 = 10
//     const adicional2 = 20
//     const adicional3 = 30
    
//     const guarnicion1 = 10
//     const guarnicion2 = 20
//     const guarnicion3 = 30
    
    
//     let pedido =  prompt("Qué desea comer?")


    
    
//     let subtotal = 0
    
    
//     switch (pedido) {
//         case '1' : producto1
//         console.log(subtotal = subtotal + producto1)
//         break;
//         case '2' : producto2
//         console.log(subtotal = subtotal + producto2)
//         break;
//         case '3' : producto3
//         console.log(subtotal = subtotal + producto3)
//         break;
//         case '4' : producto4
//         console.log(subtotal = subtotal + producto4)
//         break;
//         case '5' : producto5
//         console.log(subtotal = subtotal + producto5)
//         break;
//         case '6' : producto6
//         console.log(subtotal = subtotal + producto6)
//         break; 
//     }
    
//     let adicionales = prompt("¿Desea adicionales?")
           
//     switch (adicionales) {
//         case '7': adicional1
//         console.log(subtotal = subtotal + adicional1)
//         break;
//         case '8': adicional2
//         console.log(subtotal = subtotal + adicional2)
//         break;
//         case '9': adicional3
//         console.log(subtotal = subtotal + adicional3)
//         break;
//     }
    
//     let guarnicion =  prompt("¿Desea guarnicion?")

//     switch (guarnicion) {
//         case '10' : guarnicion1
//         console.log(subtotal = subtotal + guarnicion1)
//         break;
//         case '11' : guarnicion2
//         console.log(subtotal = subtotal + guarnicion2)
//         break;
//         case '12': guarnicion3
//         console.log(subtotal = subtotal + guarnicion3)
//         break;
//     }

// alert(subtotal)
    
//     }


//--------------------------------------------------------------------------------------------------




class Subscriber {
    constructor(name, email, country) {
         this.name = name
         this.email = email
         this.country = country
     }
    
      personSubscribed() {
          alert(`¡Gracias ${this.name} por suscribirte al newsletter!`)
       }
}

    function subscribe() {
    
    let subscribersList = []
    
    let name = prompt('Ingresá tu nombre.')
    let email = prompt('Ingresá tu e-mail.')
    let country = prompt('Ingresá tu país de residencia.')

    subscribersList.push( new Subscriber(name, email, country)) 

    console.log(subscribersList)

    subscribersList[0].personSubscribed()
}











