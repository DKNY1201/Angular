var myApp = angular.module("myApp",[]);

myApp.controller("MayTinh",function($scope){
	

	$scope.calculation = function(){
		var n1 = parseInt($scope.n1);
		var n2 = parseInt($scope.n2);
		var calc = parseInt($scope.calc);
		console.log(calc);
		if(calc == 1){
			$scope.result = n1 + n2;
		}
		else if(calc == 2){
			$scope.result = n1 - n2;
		}
		else if(calc == 3){
			$scope.result = n1 * n2;
		}
		else{
			$scope.result = n1 / n2;
		}
	}
});

myApp.controller("LoginController",function($scope){

	$scope.checkLogin = function(){
		var username = $scope.username;
		var password = $scope.password;
		alert("Username: " + username + ", Password: " + password);
	}
})

myApp.directive("ngFormlogin",function(){
	return {
		'templateUrl' : 'app/template/login_form.html'
	}
})
