(function() {
	'use strict';

	angular.module('myApp')
		.controller('HomeController', HomeController);
	
	HomeController.$inject = ['$scope', '$http'];
	function HomeController($scope, $http) {
            angular.element("body").removeClass("body-bg");
            $http.get('https://jsonplaceholder.typicode.com/posts/1').success(function (data){
                $scope.content = data;
            });
	}
})();