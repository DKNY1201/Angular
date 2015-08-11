angular.module('customerManageService',[])
	.factory('customerManageAPI',['$http',function($http){
		var obj={};
		var baseServiceDir = 'services/';
		obj.getCustomers = function(){
			return $http.get(baseServiceDir + 'customers');
		}
		return obj;
	}])