var liveADreamApp = angular.module('liveADreamApp', []);

liveADreamApp.controller('PersonajeCtrl', ['franjasDeEdad','$scope',
    function (franjasDeEdad, $scope) {
        $scope.nombre = "Federico";

        $scope.edad = 10;

        $scope.franjaDeEdad = franjasDeEdad.getFranjaPorEdad($scope.edad);

        $scope.puntosCaracteristica = $scope.franjaDeEdad.puntosCaracteristica;

        $scope.polaroids = $scope.franjaDeEdad.polaroids;

        $scope.puntosOnirica = $scope.franjaDeEdad.puntosOnirica;

        $scope.fisico = 0;

        $scope.combate = 0;

        $scope.conocimiento = 0;

        $scope.astucia = 0;
    }]
);

liveADreamApp.controller('FranjaDeEdadCtrl',['franjasDeEdad','$scope', '$http',
    function (franjasDeEdad, $scope, $http) {
        $http.get('data/franjasDeEdad.json').success(function(data) {
            franjasDeEdad.franjasDeEdad = data;
        });
    }]
);
