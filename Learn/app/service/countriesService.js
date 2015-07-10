var countryService = angular.module('countryService',[]).factory('countries', function($http){
return {
  list: function (callback){
    $http({
      method: 'GET',
      url: 'app/json/countrywithflag.json',
      cache: true
    }).success(callback);
  },
  find: function(id, callback){
    $http({
      method: 'GET',
      url: 'app/json/country_' + id + '.json',
      cache: true
    }).success(callback);
  }
};
});