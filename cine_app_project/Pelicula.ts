import { Sala } from "./Sala";
import { Director } from "./Director";

export class Pelicula {
  constructor(
    public titulo: string,
    public genero: string,
    public duracion: number,
    public director: Director,
    public salas: Sala[] = []
  ) {}
}