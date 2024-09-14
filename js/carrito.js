
    const seccionRemeras = document.querySelector('#seccionRemeras');
    const Precio = document.querySelector('#precio');
    const Finalizar = document.querySelector('#Finalizar');

const remerasCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
if(remerasCarrito)
{
    Actualizar()
}
function Actualizar(){
    seccionRemeras.innerHTML = '';
    remerasCarrito.forEach((remera)=>{
        let divRemeras = document.createElement('div');
        divRemeras.innerHTML += `
        <h2>${remera.nombre}</h2>
        <img src = ${remera.img}>
        <p>Precio: ${remera.precio}</p>
        <button onclick = "EliminarRemeraCarrito(${remera.id})" >Eliminar</button>
        `
        seccionRemeras.appendChild(divRemeras);
    })
    CalcularPrecioTotal()
}
function CalcularPrecioTotal(){
    let total = 0 ;
remerasCarrito.forEach((remeras)=>{
    
    total += remeras.precio; 
})
    Precio.innerHTML = ` <p class="mensaje" > Precio total: $${total} `;
}
function EliminarRemeraCarrito(pId){
    const RemeraEliminada = remerasCarrito.find((remera) => remera.id === pId )
    
    if(RemeraEliminada != null)
    {
        const PosicionRemeraEliminada = remerasCarrito.indexOf(RemeraEliminada);
        remerasCarrito.splice(PosicionRemeraEliminada,1);
        
    }
    Actualizar();
    
}
function finalizarCompra () {
    Finalizar.addEventListener("click", () => {
        if(remerasCarrito.length > 0)
        {
            MostrarMensaje("Muchas gracias por comprar en sket, Vuelva pronto!!!")
            seccionRemeras.innerHTML = '';
            Precio.innerHTML = '';
            localStorage.clear();
        }
        else{
            MostrarMensaje("El carrito esta vacio")
        }
    })
}
finalizarCompra();
function MostrarMensaje(sms){
const mensajefinal = document.querySelector('#mensajefinal');
mensajefinal.innerHTML = `<p class="mensaje">${sms}</p>`;
}