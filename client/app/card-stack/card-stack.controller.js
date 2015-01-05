'use strict';

angular.module('snckcoApp')



.controller('Card-stackCtrl', function ($scope, $http) {

		/* 
			1. Based on the swipes you need to send to mongodb api for storage with corresponding id number
		
		*/
        $http.get('./../../assets/data/card-stack.json').success(function(data) {
                $scope.cards = data;
        });

        $scope.throwout = function (eventName, eventObject) {
            console.log('throwout', eventObject);
        };

        $scope.throwoutleft = function (eventName, eventObject) {
            console.log('throwoutleft', eventObject);
			console.log("Swiping Left - No ");
			
			// Store into database as swipe left no
        };

        $scope.throwoutright = function (eventName, eventObject) {
            console.log('throwoutright', eventObject);
			console.log("Swiping Right - Yes ");
			
			// Store into database as swipe Right yes
        };

        $scope.throwin = function (eventName, eventObject) {
            console.log('throwin', eventObject);
        };

        $scope.dragstart = function (eventName, eventObject) {
            console.log('dragstart', eventObject);
        };

        $scope.dragmove = function (eventName, eventObject) {
            console.log('dragmove', eventObject);

            //$scope.namename = eventObject.throwDirection;       
             //$scope.leftside = { 'border-left-color': $scope.getColor };
            
        };
        
        $scope.dragend = function (eventName, eventObject) {
            console.log('dragend', eventObject);
        };
    })
;

