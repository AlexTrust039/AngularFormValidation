require('angular');
require('ng-mask');
require('./style.css');

var app = angular.module("myApp", ["ngMask"]);

	app.controller("controller",[ '$scope', '$http', '$window', function($scope , $http, $window){
		$scope.redirect = function(){
			$window.location.href = "next.html";
	};


	$scope.docs = {
		array : ["Паспорт", "Загран паспорт", "Паспорт моряка"],
	};


	$scope.copy = function(form){
		document.getElementById("surnameForPaste").value = $scope.list.surname;
		form.surname.$dirty = true;
		form.surname.$setValidity("required", true);
	};

	$http.get('test.json').then(function(response) {
         $scope.list = response.data;
    });
}]);
