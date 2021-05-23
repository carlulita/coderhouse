function showDetalles(nombreFiltro, nombreFiltroHTML, nombreLink) {

    swal(nombreFiltro, nombreFiltroHTML, {
        buttons: {
        cancel: "Probar",
            ok: true,
            },
        })
        .then((value) => {
            switch (value) {

            case "ok":
                console.log("ok");
                break;

            default:
                window.location.href = nombreLink;
            }
        });

}


let alsephina = `Alsephina`
let alsephinaHTML = `
Maquillaje de nubes
Pestañas 3D
Lentes de contacto 3D
Nubes animadas
Botones y tap para cambiar`
let alsephinaLink = "https://www.instagram.com/ar/1627169634152239/"

let irena = `Irena`
let irenaHTML = `
    Photobooth
    Timer automático al grabar
    10 filtros de color
    Frame retro`
let irenaLink = "https://www.instagram.com/ar/677224399613046/"

let ara = `Ara`
let araHTML = `
    Emojis al pestanear
    7 filtros de color
    Efecto retro regulable con slider
    Pecas y delineador`
let araLink = "https://www.instagram.com/ar/461815995042159/"

let maia = `Maia`
let maiaHTML = `
    Ojos 3D estilo cartoon
    Pestañas 3D
    Filtro de color
    Partículas corazones dinámicas
    Animación al lanzar besos
    Make-up`
let maiaLink = "https://www.instagram.com/ar/461815995042159/"

let ain = `Ain`
let ainHTML = `
    Nubes animadas flotantes
    Filtro de color
    Efecto prisma
    Pestañas 3D`
let ainLink = "https://www.instagram.com/ar/461815995042159/"

let lerna = `Lerna`
let lernaHTML = `
    Lentes de contacto 3D
    6 colores de cabello
    Pestañas 3D`
let lernaLink = "https://www.instagram.com/ar/461815995042159/"

