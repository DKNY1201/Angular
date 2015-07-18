'use strict';

angular.module("STMDirective",[])
	.directive("enterSubmit",function(){
		return {
			restrict : 'A',
			link : function(scope,element,attrs){
				element.on("keydown",function(e){
					var code = e.keyCode || e.which;
					if(code==13){
						if(!e.shiftKey){
							scope.$apply(attrs.enterSubmit);
						}
					}
				})
			}
		}
	});