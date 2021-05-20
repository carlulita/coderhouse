function showDetalles(nombreFiltro, nombreFiltroHTML) {

    nombreFiltro.innerHTML = ''

    let div = document.createElement('div')
    div.classList.add('detalles')
    div.innerHTML = nombreFiltroHTML

    nombreFiltro.appendChild(div)
}


let alsephinaHTML = `
<h4>Alsephina</h4>
<p>Maquillaje de nubes</p>
<p>Pestañas 3D</p>
<p>Lentes de contacto 3D</p>
<p>Nubes animadas</p>
<p>Botones y tap para cambiar</p>
<a href="https://www.instagram.com/ar/1627169634152239/">PROBAR</a>`

let irenaHTML = `
    <h4>Irena</h4>
    <p>Photobooth</p>
    <p>Timer automático al grabar</p>
    <p>10 filtros de color</p>
    <p>Frame retro</p>
    <a href="https://www.instagram.com/ar/677224399613046/">PROBAR</a>`


let araHTML = `
    <h4>Ara</h4>
    <p>Emojis al pestanear</p>
    <p>7 filtros de color</p>
    <p>Efecto retro regulable con slider</p>
    <p>Pecas y delineador</p>
    <a href="https://www.instagram.com/ar/461815995042159/">PROBAR</a>`
