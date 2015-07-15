angular.module('phoneCatService',[])
	.factory('phoneCatAPI',function($http){
		var phoneCatAPI = {};

		phoneCatAPI.getPhones = function(){
			$http({
				url : 'phones/phones.json',
				cache : 'true',
			})
		}

		phoneCatAPI.getPhone = function(phoneId){
			$http({
				url : 'phones/' + phoneId + '.json',
				cache : 'true',
			})
		}

		return phoneCatAPI;
	})