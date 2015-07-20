angular.module("URLApp",[])
	.filter('urlFilter',function(){
		return function(input){
			if(input){
				return input.toLowerCase().replace(/\s+/g,'-');
			}
		}
	})