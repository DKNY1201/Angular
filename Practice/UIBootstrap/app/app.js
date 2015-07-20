angular.module("UIApp",['ui.bootstrap'])
	.controller('UICtrl',function($scope){
		$scope.bigData = {
			breakfask : false,
			lunch : false,
			dinner : false,	
		}

		$scope.isCollapsed = false;
	})