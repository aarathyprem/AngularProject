(function() {
	'use strict';

	angular.module('myApp')
		.controller('ContactController', ContactController);
	
	ContactController.$inject = ['$scope'];
	function ContactController($scope) {
            angular.element("body").addClass("body-bg");
	}
})();