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
/*
myApp.directive("ngFormlogin",function(){
	return {
		'templateUrl' : 'app/template/login_form.html'
	}
})
*/
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

	$scope.showMessage1 = function(message){
		alert(message);
	}

	$scope.ctrContent = "Controller Content";
})

myApp.directive("message",function(){
	return function(scope,element,attrs){
		element.on("mouseenter",function(){
			scope.$apply("showMessage()");
			alert(attrs.title);
		})
	}
})

myApp.directive("newmessage", function(){
	return {
		restrict: "E",
		link: function(s,e,a){
			e.on("mouseenter",function(){
				s.$apply("showMessage()");
				alert(a.title);
			})
		}
	}
})

myApp.directive("newmessage1",function(){
	return {
		restrict: "E",
		scope : {
			show: "&"
		},
		template: '<input type="text" ng-model="message" />'
					+ '<input type="button" value="Show" ng-click="show({messages:message})" />',
	}
})

myApp.directive("messagetwo",function(){
	return {
		restrict: "A",
		scope: {
			content: "@"
		},
		template: "{{content}}",
	}
})

myApp.directive("loginform",function(){
	return {
		restrict: "E",
		transclude: true,
		template: '<div ng-transclude></div>Password: <input type="password" />'
	}
})

myApp.controller("repeat",function($scope){
	$scope.students = [
		{
			'name' : 'DKNY',
			'age' : 25,
			'sex' : 'male'
 		},
 		{
			'name' : 'DKNY1',
			'age' : 26,
			'sex' : 'female'
 		},
 		{
			'name' : 'DKNY2',
			'age' : 27,
			'sex' : 'male'
 		}
	]
})

myApp.controller("HelloController", function($scope){
	console.log($scope);
})

myApp.directive("hello", function(){
	return {
		restrict: "E",
		link: function(s,e,a){
			console.log(s);
			console.log(e);
		}
	}
	
})

myApp.controller("MessageCtrl", function($scope){

})

myApp.directive("messageDir", function(){
	return {
		restrict : "E",
		templateUrl: "table.html",
	}
})

myApp.directive("footerDir", function(){
	return {
		restrict : "E",
		templateUrl: "footer.html",
	}
})