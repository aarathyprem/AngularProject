(function() {
	'use strict';

	angular.module('myApp')
		.factory('GalleryService', GalleryService);
	
	GalleryService.$inject = ['$http'];
	function GalleryService($http) {
            var service = {};
            service.getGalleryItems = getGalleryItems;
            return service;
            
            function getGalleryItems(callback) {
                var req = {
                    method: 'JSONP',
                    url: 'http://jsonplaceholder.typicode.com/photos'
                };

                $http(req)
                    .success(function(data) {
                        callback(data);
                    })
                    .error(function(data) {
                        callback(data);
                    });
            }   
	}
})();