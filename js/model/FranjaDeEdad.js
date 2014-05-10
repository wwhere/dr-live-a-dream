/**
 *
 * @param {string} nombre
 * @param {number} edadMinima
 * @param {number} edadMaxima
 * @param {number} puntosCaracteristica
 * @param {number} polaroids
 * @param {number} puntosOnirica
 * @constructor
 */
function FranjaDeEdad(nombre, edadMinima, edadMaxima, puntosCaracteristica, polaroids, puntosOnirica) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {number}
     */
    this.edadMinima = edadMinima;

    /**
     *
     * @type {number}
     */
    this.edadMaxima = edadMaxima;

    /**
     *
     * @type {number}
     */
    this.puntosCaracteristica = puntosCaracteristica;

    /**
     *
     * @type {number}
     */
    this.polaroids = polaroids;

    /**
     *
     * @type {number}
     */
    this.puntosOnirica = puntosOnirica;
}
