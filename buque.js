const vehiculo= require(`./vehiculo`);

class buque extends vehiculo {
    constructor (modelo, chofer, recorrido, velocidad, propelas) {
        super(modelo, chofer, recorrido, velocidad);
        this.propelas=propelas;
    }
    calcularVelocidad(){
        return console.log("La velocidad es  " + (this.velocidad / 1.852) + " Nudos");
    }
    
    calcularTiempo(){
        return console.log("El tiempo de viaje es  " + (60 * this.recorrido /this.velocidad)/60 + "  Horas");
    }
    mostrarCaracter(){
        console.log(`El modelo del barco es ${this.modelo} es impulsado por ${this.propelas} Propelas \n Nombre del Capitan ${this.chofer} \n El viaje es de ${this.recorrido} km a ${this.velocidad / 1.852}Nudos`)
    }
}
module.exports = buque;
