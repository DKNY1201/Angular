'use strict';

angular.module('STMCtrl',[])
	.controller('STMMainCtrl',function($scope,$http){
		getTasks();
		function getTasks(){
			$http.post("ajax/getTasks.php").success(function(response){
				$scope.taskName = '';
				$scope.tasks = response;
			})
		}

		$scope.addTask = function(task){
			$http.post("ajax/addTask.php?task=" + task).success(function(response){
				getTasks();

			});
		}

		$scope.delTask = function(id){
			var confirm = window.confirm("Are you sure?");
			if(confirm){
				$http.post("ajax/delTask.php?id=" + id).success(function(response){
					getTasks();
				})	
			}
		}

		$scope.toggleTask = function(id,status){
			$http.post("ajax/toggleTask.php?id=" + id + "&status=" + status).success(function(response){
				getTasks();
			})
		}
	})