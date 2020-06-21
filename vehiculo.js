class vehiculo {
    constructor(modelo, chofer, recorrido, velocidad) {
        this.modelo=modelo;
        this.chofer=chofer;
        this.recorrido= recorrido;
        this.velocidad= velocidad; 
    }
    calcularVelocidad() {
        console.error("vehiculo no calcula distancia")
    }
    calcularTiempo(){
        console.error("La clase vehiculo no calcula tiempo")
    }
    mostrarCaracter(){
        return console.log("No hay datos de Vehiculo")
    }
}

module.exports = vehiculo;
