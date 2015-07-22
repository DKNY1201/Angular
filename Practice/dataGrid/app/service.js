'use strict';

angular.module('STMService',[])
	.factory('STMAPI',function($http){
		var STMAPI = {};
		STMAPI.getTasks = function(){
			return $http({
				url : 'ajax/getTasks.php',
				cache : 'true'
			})
		}
		/*
		STMAPI.addTask = function(task){
			return $http({
				method : 'POST',
				url : 'ajax/addTask.php',
				params: {
                    task: task
                },
				data: {
                	task: task
                }
			})
		}*/

		STMAPI.addTask = function(task){
			return $http.post("ajax/addTask.php?task=" + task);
		}
		return STMAPI;
	})