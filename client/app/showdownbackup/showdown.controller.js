'use strict';

angular.module('snckcoApp')

.directive('myContinent', function () {
		return {
			restrict: 'E',
			template: '<div class="col-md-3"> <a class="btn col-md-12" ng-click="target=continentId" ng-class="{active : target == continentId}"><img class="showdown" ng-class="{active : target == showdowns}" src="./../../assets/images/{{showdowns}}" width="350" height="350"></img></a></div>',
			scope: {
				continentId: '@',
				showdowns: '@',
				target: '='
			}
			
		};
	})

.controller('ShowdownCtrl', function ($scope, $http, User) {

		$scope.showdowns;
		
		$scope.myDropDown = 'first';
		$scope.continent = 1;
		$scope.count = 0;
		$scope.results = false;


		$scope.apply = function($rootScope, count, continent, results) {
			$scope.count = $scope.continent;
			
			//give styles and settings for selected vote
			/*
			1. Get data sent over to Mongod to be stored
			2. Refresh that data, retrieve it
			3. Base that data off of the other cards that have been voted from the stored data
			4. Give appropriate styles for the voted showdown cards
			
			*/
			$scope.results = true;
		};

		$http.get('./../../assets/data/card-stack.json').success(function(data) {
                $scope.cards = data;
				// Set the showdown images from the card data grabbed from the card-stack.json file
				$scope.showdowns = [
					$scope.cards[0].url,
					$scope.cards[1].url,
					$scope.cards[2].url,
					$scope.cards[3].url
				];
        });
		
		/******
		// You already have the showdown api in server/api/showdown - here you can make the server-side JS post request for Mongod
		******/
			
	});



