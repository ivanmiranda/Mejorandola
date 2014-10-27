'use strict'

var HireMeApp = angular.module('HireMeApp', []);

HireMeApp.controller('SearchCtrl', function ($scope){

	$scope.search = function () {

		$http.get('results'. {
			params: {name: $scope.searchInput}
		}).success(function (data){
			$scope.users = data;
		});

	}

});