var datnuocDirective = angular.module('datnuocDirective',[]).directive('datnuoc', function(){
        return {
          scope: {
            datnuoc: '='
          },
          restrict: 'A',
          templateUrl: 'app/template/country.html',
          controller : function($scope,countries){
          	countries.find($scope.datnuoc.id,function(country){
          		$scope.flagUrl = country.flag;
          	})
          }
        };
      });