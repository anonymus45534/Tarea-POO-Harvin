"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Director_1 = require("./Director");
var Pelicula_1 = require("./Pelicula");
var Sala_1 = require("./Sala");
var Cliente_1 = require("./Cliente");
var Aperitivo_1 = require("./Aperitivo");
var Accesorio_1 = require("./Accesorio");
// Función para obtener un asiento disponible
function obtenerAsientoDisponible(sala) {
    var asiento = sala.asientos.find(function (a) { return a.disponible; });
    if (!asiento) {
        throw new Error("No hay asientos disponibles en la sala.");
    }
    return asiento;
}
// Crear director
var director = new Director_1.Director("Christopher Nolan", "Británico");
// Crear sala y película
var sala1 = new Sala_1.Sala(1);
var pelicula = new Pelicula_1.Pelicula("Inception", "Ciencia Ficción", 148, director, [sala1]);
// Elegir asiento disponible
var asiento = obtenerAsientoDisponible(sala1);
asiento.disponible = false;
// Crear productos
var productos = [
    new Aperitivo_1.Aperitivo("Palomitas", 0),
    new Accesorio_1.Accesorio("Lentes 3D", 0)
];
// Crear cliente
var cliente = new Cliente_1.Cliente("Ana", pelicula, sala1, asiento, productos);
// Mostrar detalle
console.log(cliente.mostrarDetalle());
