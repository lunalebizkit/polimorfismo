const camion= require(`./Camion`);
const buque=require(`./buque`);

const barco = new buque ("Azipod 22.000 hp", "Kevin, Rodriguez", 5000, 40, 2);
const barco2 = new buque ("Azipod 23.000 hp", "Estaban Bulacio", 22000, 40, 4);
//console.log(barco.calcularVelocidad())
//console.log(barco.calcularTiempo())
 
const scania = new camion ("iveco 2.5", "Emiliano Balmaceda", 980, 90, 16);
const scania2 = new camion ("Scania 500", "Luis Nuñez", 1450, 90, 12);
//console.log(scania.calcularTiempo())
//console.info(scania.mostrarCaracter())
// console.info(barco.mostrarCaracter())

const lista = [scania, scania2, barco, barco2]
 
for(let l in lista){
    console.log(lista[l].mostrarCaracter());
 }