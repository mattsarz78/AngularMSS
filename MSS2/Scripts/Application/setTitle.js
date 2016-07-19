"use strict";
angular.module("ui.router.title", ["ui.router"])
	.run(["$rootScope", "$timeout", "$state", function ($rootScope, $timeout, $state) {

	    $rootScope.$on("$stateChangeSuccess", function () {
	        switch ($state.current.controller) {
	            case 'scheduleWeeklyController':
	                $rootScope.title = 'Weekly Schedule: ' + $state.params.sportYear + ' Week: ' + $state.params.week;
	                break;
	            case 'seasonContentsController':
	                $rootScope.title = 'Season Contents: ' + $state.params.sportYear;
	                break;
	            case 'scheduleWeeklyTextController':
	                $rootScope.title = 'Weekly Text Schedule: ' + $state.params.sportYear + ' Week: ' + $state.params.week;
	                break;
	            case 'contractGameListController':
	                $rootScope.title = 'Contract Game List: ' + $state.params.conference + ' Year: ' + $state.params.year;
	                break;
	            default:
	                $rootScope.title = $state.current.title;
	        }
	    });
	}]);
