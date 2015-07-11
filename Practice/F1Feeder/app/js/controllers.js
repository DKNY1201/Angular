angular.module("F1FeederApp.controllers",[])
	.controller("driversController",function($scope,ergastAPIservice){
		$scope.nameFilter = null;
		$scope.driversList = [];
		ergastAPIservice.getDrivers().success(function(response){
			$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
		})
		$scope.searchFilter = function(driver){
			var keyword = new RegExp($scope.nameFilter,'i');
			return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
		}
	})
	.controller('driverController',function($scope,ergastAPIservice,$routeParams){
		$scope.id = $routeParams.id;
		$scope.driver = null;
		$scope.races = [];

		ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
	        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
	    });

		ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
			$scope.races = response.MRData.RaceTable.Races;
		});

	})