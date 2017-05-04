(function() {
	'use strict';
	var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'infinite-scroll']);

	myApp.config(function($routeProvider) {

		$routeProvider
			.when('/home', {
					templateUrl : 'home/home.view.html',
					controller  : 'HomeController'
			})
			
			.when('/gallery', {
					templateUrl : 'gallery/gallery.view.html',
					controller  : 'GalleryController'
			})

			.when('/contact', {
					templateUrl : 'contact/contact.view.html',
					controller  : 'ContactController'
			})
			
			.otherwise({
				redirectTo : '/home'
			});
	});
        
        myApp.run(function ($rootScope, $location) {
            $rootScope.navActive = function(item) {
                var current = (item === $location.path())
                return current;
            };
        });
})();