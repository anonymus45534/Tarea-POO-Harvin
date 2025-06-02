import { Director } from "./Director";
import { Pelicula } from "./Pelicula";
import { Sala } from "./Sala";
import { Cliente } from "./Cliente";
import { Aperitivo } from "./Aperitivo";
import { Accesorio } from "./Accesorio";
import { Asiento } from "./Asiento";

// Función para obtener un asiento disponible
function obtenerAsientoDisponible(sala: Sala): Asiento {
  const asiento = sala.asientos.find(a => a.disponible);
  if (!asiento) {
    throw new Error("No hay asientos disponibles en la sala.");
  }
  return asiento;
}

// Crear director
const director = new Director("Christopher Nolan", "Británico");

// Crear sala y película
const sala1 = new Sala(1);
const pelicula = new Pelicula("Inception", "Ciencia Ficción", 148, director, [sala1]);

// Elegir asiento disponible
const asiento = obtenerAsientoDisponible(sala1);
asiento.disponible = false;

// Crear productos
const productos = [
  new Aperitivo("Palomitas", 0),
  new Accesorio("Lentes 3D", 0)
];

// Crear cliente
const cliente = new Cliente("Ana", pelicula, sala1, asiento, productos);

// Mostrar detalle
console.log(cliente.mostrarDetalle());
