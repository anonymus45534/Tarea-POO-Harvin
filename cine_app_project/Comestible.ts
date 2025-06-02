export abstract class Comestible {
  constructor(
    public nombre: string,
    public precio: number
  ) {}

  abstract descripcion(): string;
}