"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asiento = void 0;
var Asiento = /** @class */ (function () {
    function Asiento(numero, disponible) {
        if (disponible === void 0) { disponible = true; }
        this.numero = numero;
        this.disponible = disponible;
    }
    return Asiento;
}());
exports.Asiento = Asiento;
