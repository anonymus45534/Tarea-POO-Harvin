import { Persona } from "./Persona";
import { Pelicula } from "./Pelicula";
import { Sala } from "./Sala";
import { Asiento } from "./Asiento";
import { Comestible } from "./Comestible";

export class Cliente extends Persona {
  constructor(
    nombre: string,
    public pelicula: Pelicula,
    public sala: Sala,
    public asiento: Asiento,
    public productos: Comestible[]
  ) {
    super(nombre);
  }

  mostrarDetalle(): string {
    return `
Cliente: ${this.nombre}
Pelicula: ${this.pelicula.titulo}
Director: ${this.pelicula.director.nombre}
Sala: ${this.sala.id}
Asiento: ${this.asiento.numero}
Productos: ${this.productos.map(p => p.descripcion()).join("; ")}
    `.trim();
  }
}