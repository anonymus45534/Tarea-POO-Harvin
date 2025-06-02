import { Comestible } from "./Comestible";

export class Accesorio extends Comestible {
  descripcion(): string {
    return `Accesorio: ${this.nombre} - $${this.precio}`;
  }
}