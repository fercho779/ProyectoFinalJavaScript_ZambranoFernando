let carrito = [];
let remeras = [];
pedirRemeras();

const seccionDelDOM = () =>{
    const seccionRemeras = document.querySelector('#seccionRemeras');
    return seccionRemeras;
}

function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('contadorCarrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contadorCarrito.textContent = carrito.length;
}

async function pedirRemeras(){
    try
    {
        const resp = await fetch('https://raw.githubusercontent.com/fercho779/ProyectoFinalJavaScript_ZambranoFernando/refs/heads/main/data/remera.json');
        const data = await resp.json();
        remeras = data;
        mostrarRemeras(remeras);
    }
    catch{
        console.error('Error: no se encontraron remeras');
    }
}

function mostrarRemeras(pRemeras)
{
    const contenedorRemeras = seccionDelDOM();
    contenedorRemeras.innerHTML= '';
    pRemeras.forEach((remera)=>{
        let divRemeras = document.createElement('div');
        divRemeras.innerHTML += `
        <h2>${remera.nombre}</h2>
        <img src = ${remera.imagen}>
        <p>Precio: $${remera.precio}</p>
        <input type="number" id="cantidad-${remera.id}" min="1" value="1">
        <button id="btnAgregar" onclick = "agregarRemera(${remera.id})" >agregar al carrito</button>
        `
        contenedorRemeras.appendChild(divRemeras);
    })
}

function agregarRemera(pId) {
    const cantidadSeleccionada = parseInt(document.getElementById(`cantidad-${pId}`).value);
    const remeraEncontrada = remeras.find((remera) => remera.id === pId);
    
    const carritoExistente = JSON.parse(localStorage.getItem('carrito')) || [];
    const itemExistente = carritoExistente.find(item => item.id === pId);

    if (itemExistente) {
        itemExistente.cantidad += cantidadSeleccionada; // Incrementa cantidad si ya está en el carrito
    } else {
        carritoExistente.push({ ...remeraEncontrada, cantidad: cantidadSeleccionada }); // Agrega la remera con cantidad
    }
    
    localStorage.setItem("carrito", JSON.stringify(carritoExistente));
    actualizarContadorCarrito();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Agregaste remeras al carrito",
        showConfirmButton: false,
        timer: 1500
    });
}
function filtrarPorPrecio(){
    const filtro = document.getElementById('filtrarPor').value;
    if(filtro == "asc"){
        remeras.sort((a,b) => a.precio - b.precio)
    }
    else if(filtro == "desc"){
        remeras.sort((a,b) => b.precio - a.precio)
    }
    mostrarRemeras(remeras);
}