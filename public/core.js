var pokebase = angular.module('pokebase', []);

function mainController($scope, $http) {
	$scope.formData = {};

	$http.get('/api/pokedex')
		// when landing on the page, get all pokemon and show them
		//TO DO: SORT POKEDEX
		.success(function(data) {
			$scope.pokedex = data;
			console.log($scope.pokedex);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		}
	);
}