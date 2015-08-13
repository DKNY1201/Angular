angular.module('customerManageService',[])
	.factory('customerManageAPI',['$http',function($http){
		var obj={};
		var baseServiceDir = 'services/';
		obj.getCustomers = function(){
			return $http.get(baseServiceDir + 'customers');
		}

		obj.getCustomer = function(customerID){
			return $http.get(baseServiceDir + 'customer?customerID=' + customerID);
		}

		obj.insertCustomer = function(customer){
			return $http.post(baseServiceDir + 'insertCustomer', customer).then(function(response){
				return response;
			});
		}
		
		obj.deleteCustomer = function(customerID){
			return $http.delete(baseServiceDir + 'deleteCustomer?customerID=' + customerID).then(function(response){
				console.log(response);
			})
		}

		obj.updateCustomer = function(customerID,customer){
			return $http.post(baseServiceDir + 'updateCustomer',{customerID: customerID, customer: customer})
		}

		return obj;
	}])