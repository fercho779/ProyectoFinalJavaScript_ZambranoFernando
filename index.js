class remeraSket {
    constructor(color, talla, diseño, precio) {
        this.color = color;
        this.talla = talla;
        this.diseño = diseño;
        this.precio = precio;
    }
}

class remeraCliente {
    constructor(color, talla, diseño, precio) {
        this.color = color;
        this.talla = talla;
        this.diseño = diseño;
        this.precio = precio;
    }
}

let remeras = [];
let carrito = [];
let continuar = true;

remeras.push(new remeraSket('azul', 'S', 'sketDiseño', 20000));
remeras.push(new remeraSket('negro', 'M', 'sketDiseño', 18000));
remeras.push(new remeraSket('blanco', 'XXL', 'sketDiseño', 30000));
remeras.push(new remeraSket('verde','L','sketDiseño',21000));
remeras.push(new remeraSket('verde','XL','sketDiseño',23000));

// Comprar remeras prediseñadas
if (confirm('¿Desea comprar nuestros diseños?')) {
    while (continuar) {
        if(confirm('Desea filtrar las remeras por el precio mas bajo?'))
        {
            remeras.sort((a,b) => a.precio - b.precio)
        }else if(confirm('Desea filtrar por el precio mas alto?')) {
            remeras.sort((a,b) => b.precio - a.precio)
        }
        let mensaje = 'Nuestros diseños son:\n';
        remeras.forEach((remera, index) => {
            mensaje += `${index + 1}. Color: ${remera.color}, Talla: ${remera.talla}, Diseño: ${remera.diseño}, Precio: ${remera.precio}\n`;
        });
        mensaje += 'Ingrese el número de la remera que desea comprar:';

        let seleccion = prompt(mensaje);
        let indiceSeleccionado = parseInt(seleccion) - 1;

        if (indiceSeleccionado >= 0 && indiceSeleccionado < remeras.length) {
            carrito.push(remeras[indiceSeleccionado]);
            alert(`Has agregado al carrito la remera: Color: ${remeras[indiceSeleccionado].color}\n Talla: ${remeras[indiceSeleccionado].talla}\n Diseño: ${remeras[indiceSeleccionado].diseño}\n Precio: ${remeras[indiceSeleccionado].precio}\n`);
        } else {
            alert('Selección inválida.');
        }
        continuar = confirm('¿Desea agregar otro diseño?');
    }
}
// Crear diseños propios
continuar = confirm('¿Desea realizar un diseño propio?');
while (continuar) {
    let precioTalla = 0;
    let precioDiseño = 0;
    alert('Precios por talla y por diseño:\n Tallas:\n S a la L el precio es de: 10000\n XL a la XXXL 20000\n Diseños:\n Diseño pequeño el precio es: 5000\n Diseño mediano el precio es: 10000\n Diseño grande el precio es: 15000\n');

    let tallaCliente = prompt('Seleccione la Talla:\n').toUpperCase();
    if (tallaCliente != "S" && tallaCliente != "M" && tallaCliente != "L" && tallaCliente != "XL" && tallaCliente != "XXL" && tallaCliente != "XXXL") {
        alert('La talla no existe');
        continue;
    } else if (tallaCliente == 'S' || tallaCliente == 'M' || tallaCliente == 'L') {
        precioTalla = 10000;
    } else if (tallaCliente == 'XL' || tallaCliente == 'XXL' || tallaCliente == 'XXXL') {
        precioTalla = 20000;
    }

    let diseñoCliente = prompt('Seleccione su diseño:');
    switch (diseñoCliente.toLowerCase()) {
        case "diseño pequeño":
            precioDiseño = 5000;
            break;
        case "diseño mediano":
            precioDiseño = 10000;
            break;
        case "diseño grande":
            precioDiseño = 15000;
            break;
        default:
            alert('Ese diseño no existe.');
            continue;
    }

    function calcularPrecio(precioTalla, precioDiseño) {
        let precioSinIva = precioTalla + precioDiseño;
        let iva = precioSinIva * 0.21;
        let precioFinal = precioSinIva + iva;
        return precioFinal;
    }

    carrito.push(new remeraCliente(prompt('Elija el color de la Remera'), tallaCliente, diseñoCliente, calcularPrecio(precioTalla, precioDiseño)));
    continuar = confirm('¿Desea realizar otro diseño?');
}

// Mostrar todas las remeras en el carrito
let mensajeFinal = 'Tus remeras en el carrito son:\n';
carrito.sort((a,b) => a.precio - b.precio)
carrito.forEach((remera, index) => {
    mensajeFinal += `${index + 1}. Color: ${remera.color}, Talla: ${remera.talla}, Diseño: ${remera.diseño}, Precio: ${remera.precio}\n`;
});
alert(mensajeFinal);
alert('¡Muchas gracias, vuelva pronto!');
