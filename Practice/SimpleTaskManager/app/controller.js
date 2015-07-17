'use strict';

angular.module('STMCtrl',[])
	.controller('STMMainCtrl',function($scope,$http,STMAPI){
		getTasks();
		function getTasks(){
			console.log('gettask');
			$http.post("").success(function(response){
				$scope.tasks = response;
			})	
		}		

		

		$scope.addTask = function(task){
			STMAPI.addTask(task).success(function(response){
				getTasks();
				$scope.taskName = '';	
			});
			
		}
	})