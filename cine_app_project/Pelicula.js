"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, genero, duracion, director, salas) {
        if (salas === void 0) { salas = []; }
        this.titulo = titulo;
        this.genero = genero;
        this.duracion = duracion;
        this.director = director;
        this.salas = salas;
    }
    return Pelicula;
}());
exports.Pelicula = Pelicula;
