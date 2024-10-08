const seccionRemeras = document.querySelector('#seccionRemeras');
const Precio = document.querySelector('#precio');
const Finalizar = document.querySelector('#Finalizar');

function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('contadorCarrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contadorCarrito.textContent = carrito.length;
}

const remerasCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
if (remerasCarrito.length > 0) {
    Actualizar();
    actualizarContadorCarrito();
}

function Actualizar() {
    seccionRemeras.innerHTML = '';
    remerasCarrito.forEach((remera) => {
        let divRemeras = document.createElement('div');
        divRemeras.innerHTML += `
            <h2>${remera.nombre}</h2>
            <img src="${remera.imagen}">
            <p>Precio: $${remera.precio}</p>
            <input type="number" id="cantidad-${remera.id}" min="1" value="${remera.cantidad}" onchange="actualizarCantidad(${remera.id})">
            <p>Total por esta remera: $${remera.precio * remera.cantidad}</p>
            <button onclick="EliminarRemeraCarrito(${remera.id})">Eliminar</button>
        `;
        seccionRemeras.appendChild(divRemeras);
    });
    CalcularPrecioTotal();
}

function CalcularPrecioTotal() {
    let total = 0;
    remerasCarrito.forEach((remera) => {
        total += remera.precio * remera.cantidad;
    });
    Precio.innerHTML = `<p class="mensaje">Precio total: $${total}</p>`;
}

function actualizarCantidad(pId) {
    const nuevaCantidad = parseInt(document.getElementById(`cantidad-${pId}`).value);
    const remeraActualizada = remerasCarrito.find((remera) => remera.id === pId);

    if (remeraActualizada) {
        remeraActualizada.cantidad = nuevaCantidad;
        localStorage.setItem('carrito', JSON.stringify(remerasCarrito));
        Actualizar();
    }
}

function EliminarRemeraCarrito(pId) {
    const RemeraEliminada = remerasCarrito.find((remera) => remera.id === pId);
    
    if (RemeraEliminada) {
        Swal.fire({
            title: "Seguro que quieres eliminar la remera?",
            showDenyButton: true,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                const PosicionRemeraEliminada = remerasCarrito.indexOf(RemeraEliminada);
                remerasCarrito.splice(PosicionRemeraEliminada, 1);
                localStorage.setItem('carrito', JSON.stringify(remerasCarrito));
                Actualizar();
                actualizarContadorCarrito();
            } else if (result.isDenied) {
                Swal.fire("No se ha eliminado ninguna remera");
            }
        });
    }
}

function finalizarCompra() {
    Finalizar.addEventListener("click", () => {
        if (remerasCarrito.length > 0) {
            MostrarMensaje("Muchas gracias por comprar en sket, Vuelva pronto!!!");
            seccionRemeras.innerHTML = '';
            Precio.innerHTML = '';
            localStorage.clear();
            actualizarContadorCarrito();
        } else {
            Swal.fire({
                icon: "error",
                title: "Lo sentimos",
                text: "No hay remeras en el carrito",
            });
            MostrarMensaje("El carrito está vacío");
        }
    });
}

function filtrarPorPrecio() {
    const filtro = document.getElementById('filtrarPor').value;
    if (filtro === "asc") {
        remerasCarrito.sort((a, b) => a.precio - b.precio);
    } else if (filtro === "desc") {
        remerasCarrito.sort((a, b) => b.precio - a.precio);
    }
    Actualizar();
}

finalizarCompra();

function MostrarMensaje(sms) {
    const mensajefinal = document.querySelector('#mensajefinal');
    mensajefinal.innerHTML = `<p class="mensaje">${sms}</p>`;
}