import { Persona } from "./Persona";

export class Director extends Persona {
  constructor(
    nombre: string,
    public nacionalidad: string
  ) {
    super(nombre);
  }
}