import { Comestible } from "./Comestible";

export class Aperitivo extends Comestible {
  descripcion(): string {
    return `Aperitivo: ${this.nombre} - $${this.precio}`;
  }
}