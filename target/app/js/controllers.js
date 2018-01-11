var controllers=angular.module("controllers",[]);
controllers.controller("HomeController",["$scope","$http",function(d,c){d.debug=false;
d.title="Hello ";
c.get("service/home").success(function(a){d.data=a;
d.title+=d.data.message
});
d.toggleDebug=function(){d.debug=!d.debug
}
}]);