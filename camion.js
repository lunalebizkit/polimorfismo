const vehiculo= require(`./vehiculo`);

class Camion extends vehiculo {
    constructor (modelo, chofer, recorrido, velocidad, tieneRueda) {
        super(modelo, chofer, recorrido, velocidad)
        this.tieneRueda= tieneRueda;
    }
    
    calcularTiempo(){
        return console.log("El tiempo de viaje es  " + (60 * this.recorrido /this.velocidad)/60 + "  Horas");
    }
    mostrarCaracter(){
        return console.log(`El modelo del Camion es ${this.modelo} cuenta con ${this.tieneRueda} Ruedas en total \n Nombre del chofer ${this.chofer} \n El viaje es de ${this.recorrido} km a ${this.velocidad}Kms/h`)
    }

}
module.exports = Camion