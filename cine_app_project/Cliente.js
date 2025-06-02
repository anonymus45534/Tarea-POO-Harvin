"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Persona_1 = require("./Persona");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, pelicula, sala, asiento, productos) {
        var _this = _super.call(this, nombre) || this;
        _this.pelicula = pelicula;
        _this.sala = sala;
        _this.asiento = asiento;
        _this.productos = productos;
        return _this;
    }
    Cliente.prototype.mostrarDetalle = function () {
        return "\nCliente: ".concat(this.nombre, "\nPelicula: ").concat(this.pelicula.titulo, "\nDirector: ").concat(this.pelicula.director.nombre, "\nSala: ").concat(this.sala.id, "\nAsiento: ").concat(this.asiento.numero, "\nProductos: ").concat(this.productos.map(function (p) { return p.descripcion(); }).join("; "), "\n    ").trim();
    };
    return Cliente;
}(Persona_1.Persona));
exports.Cliente = Cliente;
