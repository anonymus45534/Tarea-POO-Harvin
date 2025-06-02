import { Asiento } from "./Asiento";
import { Aperitivo } from "./Aperitivo";
import { Accesorio } from "./Accesorio";

export class Sala {
  public asientos: Asiento[] = [];
  public aperitivos: Aperitivo[] = [];
  public accesorios: Accesorio[] = [];

  constructor(
    public id: number
  ) {
    for (let i = 1; i <= 10; i++) {
      this.asientos.push(new Asiento(i));
    }

    this.aperitivos.push(new Aperitivo("Palomitas", 0), new Aperitivo("Gaseosa", 0));
    this.accesorios.push(new Accesorio("Lentes 3D", 0));
  }
}