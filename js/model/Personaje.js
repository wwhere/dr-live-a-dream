/**
 *
 * @param {number} edad
 * @constructor
 */
function Personaje(edad) {

    /**
     *
     * @type {string}
     */
    this.nombre = "Federico";

    /**
     *
     * @type {number}
     */
    this.edad = edad;

    /**
     *
     * @type {FranjaDeEdad}
     */
    this.franjaDeEdad = getFranjaPorEdad(this.edad);

    /**
     *
     * @type {number}
     */
    this.puntosCaracteristica = this.franjaDeEdad.puntosCaracteristica;

    /**
     *
     * @type {number}
     */
    this.polaroids = this.franjaDeEdad.polaroids;

    /**
     *
     * @type {number}
     */
    this.puntosOnirica = this.franjaDeEdad.puntosOnirica;

    this.fisico = 0;

    this.combate = 0;

    this.conocimiento = 0;

    this.astucia = 0;
}

Personaje.prototype = {
    constructor : Personaje,

    setEdad : function(valor) {
        this.edad = valor;

        this.franjaDeEdad = getFranjaDeEdadPorEdad(edad)

        this.puntosCaracteristica = this.franjaDeEdad.puntosCaracteristica;
        this.polaroids = this.franjaDeEdad.polaroids;
        this.puntosOnirica = this.franjaDeEdad.puntosOnirica;
    }
};
