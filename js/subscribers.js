let btnSus = document.getElementById('btnSus')

let subscribersList = []

class Subscriber {
    constructor(email) {
        this.email = email
     }
}

btnSus.addEventListener('click', ()=>{
    let subscribersLS = JSON.parse(localStorage.getItem('subscribers'))
    if(subscribersLS){
        swal({
            text: "Ya estás suscripto al newsletter",
            icon: "warning",
        }) 
    } else {
        swal({
            title: "Ingresa tu correo electrónico",
            text: "¡Suscribite al newsletter y recibí todas las novedades!",
            content: "input",
            icon: "info",
            buttons: true,
            dangerMode: true,
            })
        .then((value) => {
            if(value.includes("@")) {
                let newSubscriber = new Subscriber(value)
                subscribersList.push(newSubscriber) 
                localStorage.setItem('subscribers', JSON.stringify(subscribersList))
                swal(`¡Te suscribiste correctamente al newsletter!`, {
                icon: "success",
                });
            } else {
                swal("Dirección de correo electrónico inválida", {
                icon: "warning",
                });
            }
            });
        }
})
