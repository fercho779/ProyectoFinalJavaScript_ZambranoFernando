let carrito = [];
const seccionDelDOM = () =>{
    const seccionRemeras = document.querySelector('#seccionRemeras');
    return seccionRemeras;
}
function mostrarRemeras(pRemeras)
{
    remeras.forEach((remera)=>{
        let divRemeras = document.createElement('div');
        divRemeras.innerHTML += `
        <h2>${remera.nombre}</h2>
        <img src = ${remera.img}>
        <p>Precio: ${remera.precio}</p>
        <button onclick = "agregarRemera(${remera.id})" >agregar al carrito</button>
        `
        pRemeras.appendChild(divRemeras);
    })
}
mostrarRemeras(seccionDelDOM());

function agregarRemera(pId){
carrito.push (remeras.find((remera) => remera.id === pId ));
localStorage.setItem("carrito",JSON.stringify(carrito));
}
