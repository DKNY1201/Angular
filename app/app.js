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

myApp.directive("directiverestricta", function(){
	return {
		restrict: "A",
		template: "<h1>Directive restrict A</h1>",
	};
})

myApp.directive("directiveRestrictC", function(){
	return {
		restrict: "C",
		template: "<h1>Directive restrict C</h1>",
	};
})

myApp.directive("directiverestricte", function(){
	return {
		restrict: "E",
		template: "<h1>Directive restrict E</h1>",
	};
})

myApp.controller("MessageController",function($scope){
	$scope.showMessage = function(){
		alert("hello world!");
	};
})

myApp.directive("message",function(){
	return function(scope,element,attrs){
		element.on("mouseenter",function(){
			scope.$apply("showMessage()");
			alert(attrs.title);
		})
	}
})