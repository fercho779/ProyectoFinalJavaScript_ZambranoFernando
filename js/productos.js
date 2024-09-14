class remera{  
constructor(pId, pNombre, img, precio) 
    {
        this.id = pId;
        this.nombre = pNombre; 
        this.img = img;
        this.precio = precio;
        
    }
}
let idCounter = 0;

let remeras = [];
remeras.push(new remera (asignarId(),'Musculosa allboys','../assest/img/remera_allBoys_logo_rojo.webp',15000 ) );
remeras.push(new remera (asignarId(),'Musculosa allboys','../assest/img/remera_allBoys_logo_azul.webp',15000 ) );
remeras.push(new remera (asignarId(),'Remera allboys negra','../assest/img/remera_allBoys_negra.webp',18000 ) );
remeras.push(new remera (asignarId(),'Remera commamders','../assest/img/remera_comamders.webp',20000 ) );
remeras.push(new remera (asignarId(),'Remera you play','../assest/img/remera_you_play.webp',17000 ) );
remeras.push(new remera (asignarId(),'Remera rawayana','../assest/img/remera_rawayana.webp',25000 ) );
remeras.push(new remera (asignarId(),'Remera the archer','../assest/img/remera_taylor_the_archer.webp',27000 ) );
remeras.push(new remera (asignarId(),'Remera vikings','../assest/img/remera_vikings.webp',17000 ) );

function asignarId() {
    return idCounter++;
}
