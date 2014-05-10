angular.module('franjasDeEdad', [])
    .factory('franjasDeEdad', function() {

        var franjasDeEdad = [];

        var getFranjaPorEdad = function(edad) {
            for (var i = 0; i < franjasDeEdad.length; i++) {
                if ((edad >= franjasDeEdad[i].edadMinima) && (edad < franjasDeEdad[i].edadMaxima)) {
                    return franjasDeEdad[i];
                }
            }
            return null;
        };

        return {
            getFranjaPorEdad: getFranjaPorEdad,
            franjasDeEdad: franjasDeEdad
        };
    });