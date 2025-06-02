"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sala = void 0;
var Asiento_1 = require("./Asiento");
var Aperitivo_1 = require("./Aperitivo");
var Accesorio_1 = require("./Accesorio");
var Sala = /** @class */ (function () {
    function Sala(id) {
        this.id = id;
        this.asientos = [];
        this.aperitivos = [];
        this.accesorios = [];
        for (var i = 1; i <= 10; i++) {
            this.asientos.push(new Asiento_1.Asiento(i));
        }
        this.aperitivos.push(new Aperitivo_1.Aperitivo("Palomitas", 0), new Aperitivo_1.Aperitivo("Gaseosa", 0));
        this.accesorios.push(new Accesorio_1.Accesorio("Lentes 3D", 0));
    }
    return Sala;
}());
exports.Sala = Sala;
